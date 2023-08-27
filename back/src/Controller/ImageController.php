<?php

namespace App\Controller;

use App\Entity\Image;
use App\Entity\Property;
use App\Repository\ImageRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\SerializerInterface;
use Nelmio\ApiDocBundle\Annotation\Model;
use OpenApi\Attributes as OA;

class ImageController extends AbstractController
{
    #[OA\Tag(name: 'Images')]
    #[Route('/api/images', name: 'images', methods: ['GET'])]
    public function getAllImages(ImageRepository $imageRepository): JsonResponse
    {
        $images = $imageRepository->findAll();
        
        return $this->json($images, 200, [], ['groups' => ['getImages']]);
    }

    #[OA\Tag(name: 'Images')]
    #[Route('/api/images/{id}', name: 'image', methods: ['GET'])]
    public function getImage(int $id, ImageRepository $imageRepository): JsonResponse
    {
        $image = $imageRepository->find($id);

        if (!$image) {
            return new JsonResponse(['Error' => '404', 'message' => 'Property not found.'], 404);
        }

        return $this->json($image, 200, [], ['groups' => ['getImages']]);
    }

    #[OA\Tag(name: 'Images')]
    #[Route('/api/properties/{id}/images', name: 'getPropertyImages', methods: ['GET'])]
    public function getPropertyImages(int $id, EntityManagerInterface $em): JsonResponse
    {
        $property = $em->getRepository(Property::class)->find($id);

        if (!$property) {
            return new JsonResponse(['error' => '404', 'message' => 'Property not found.'], 404);
        }

        // Retrieve the associated images of the property.
        $images = $property->getPropertyImages();
        $imageData = [];
        foreach ($images as $image) {
            $imageData[] = [
                'id' => $image->getId(),
                'url' => $image->setUrl(str_replace("\\", "/", $_SERVER["DOCUMENT_ROOT"]) . "upload/images/property/" . $image->getUrl()),
                'type' => $image->getType(),
                'description' => $image->getDescription(),

                // Add other image properties you want to include in the response.
            ];
        }

        return $this->json($imageData, 200);
    }

    #[OA\Tag(name: 'Images')]
    #[Route('/api/images/{id}', name: 'deleteImage', methods: ['DELETE'])]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour supprimer une image')]
    public function deleteImage(int $id, EntityManagerInterface $em, ImageRepository $imageRepository): JsonResponse 
    {
        $image = $imageRepository->find($id);

        if (!$image) {
            return new JsonResponse(['Error' => '404', 'message' => 'Image not found.'], 404);
        }

        $em->remove($image);
        $em->flush();

        return new JsonResponse(null, 204);
    }

    #[OA\Tag(name: 'Images')]
    #[Route('/api/images', name: 'addImageToProperty', methods: ['POST'])]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour ajouter une image')]
    public function createImage(Request $request, EntityManagerInterface $em, SerializerInterface $serializer, UrlGeneratorInterface $urlGenerator): JsonResponse 
    {
        $data = json_decode($request->getContent(), true);

        $imagesData = $data['images'];
        $images = [];

        foreach ($imagesData as $imageData) {
            $propertyId = $imageData['property']['id'];
            $property = $em->getRepository(Property::class)->find($propertyId);

            if (!$property) {
                return new JsonResponse(['error' => '404', 'message' => 'Property not found.'], 404);
            }

            $image = $serializer->deserialize(json_encode($imageData), Image::class, 'json', [
                AbstractNormalizer::OBJECT_TO_POPULATE => new Image(),
            ]);

            // Set the property for the image entity.
            $image->setProperty($property);

            $em->persist($image);
            $images[] = $image;
        }

        $em->flush();


        return $this->json($images, 201, [], ['groups' => ['getImages']]);
    }

    #[OA\Tag(name: 'Images')]
    #[Route('/api/properties/{id}/images', name: 'updateImages', methods: ['PUT'])]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour modifier une image')]
    public function updateImages(int $id, Request $request, EntityManagerInterface $em, SerializerInterface $serializer): JsonResponse
    {
        $property = $em->getRepository(Property::class)->find($id);

        if (!$property) {
            return new JsonResponse(['error' => '404', 'message' => 'Property not found.'], 404);
        }

        $updatedImageData = json_decode($request->getContent(), true);

        if (!isset($updatedImageData) || !is_array($updatedImageData)) {
            return new JsonResponse(['error' => '400', 'message' => 'Invalid request data.'], 400);
        }

        $updatedImages = [];

        foreach ($updatedImageData as $imageData) {
            $imageId = $imageData['id'] ?? null;

            if ($imageId) {
                $existingImage = $em->getRepository(Image::class)->find($imageId);

                if (!$existingImage) {
                    return new JsonResponse(['error' => '404', 'message' => 'Image not found.'], 404);
                }

                // Update the existing image with the new data.
                $serializer->deserialize(json_encode($imageData), Image::class, 'json', [
                    AbstractNormalizer::OBJECT_TO_POPULATE => $existingImage,
                ]);

                $updatedImages[] = $existingImage;
            } else {
                // If the image does not have an ID, it's a new image, so create a new entity.
                $newImage = $serializer->deserialize(json_encode($imageData), Image::class, 'json');

                // Set the property for the new image entity.
                $newImage->setProperty($property);

                // Persist the new image directly.
                $em->persist($newImage);

                $updatedImages[] = $newImage;
            }
        }

        // Remove images not present in the update.
        foreach ($property->getPropertyImages() as $image) {
            if (!in_array($image, $updatedImages, true)) {
                $property->removePropertyImages($image);
                $em->remove($image);
            }
        }

        $em->flush();

        return $this->json($updatedImages, 200, [], ['groups' => ['getProperties']]);
    }
}