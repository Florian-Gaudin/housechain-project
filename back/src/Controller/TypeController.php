<?php

namespace App\Controller;

use App\Entity\Type;
use App\Repository\TypeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use OpenApi\Attributes as OA;

class TypeController extends AbstractController
{
    #[OA\Tag(name: 'Property Types')]
    #[Route('/api/types', name: 'types', methods: ['GET'])]
    public function getTypesList(TypeRepository $typeRepository): JsonResponse
    {
        $types = $typeRepository->findAll();
        return $this->json($types, 200, [], ['groups' => ['getProperties']]);
    }

    #[OA\Tag(name: 'Property Types')]
    #[Route('/api/types/{id}/properties', name: 'type_properties', methods: ['GET'])]
    public function getTypeProperties(int $id, TypeRepository $typeRepository): JsonResponse
    {
        $type = $typeRepository->find($id);

        if (!$type) {
            return new JsonResponse(['error' => '404', 'message' => 'Type not found.'], Response::HTTP_NOT_FOUND);
        }

        $properties = $type->getProperties();

        return $this->json($properties, Response::HTTP_OK, [], ['groups' => ['getProperties']]);
    }

    #[OA\Tag(name: 'Property Types')]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour créer un type de propriété')]
    #[Route('/api/types', name: 'create_type', methods: ['POST'])]
    public function createType(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $typeName = $data['type_name'];

        // Check if a Type with the given typeName already exists
        $existingType = $em->getRepository(Type::class)->findOneBy(['type_name' => $typeName]);

        if ($existingType) {
            return new JsonResponse(['error' => '400', 'message' => 'Type with this name already exists.'], Response::HTTP_BAD_REQUEST);
        }

        $type = (new Type())->setTypeName($typeName);

        $em->persist($type);
        $em->flush();

        return new JsonResponse(['message' => 'Type created successfully.'], Response::HTTP_CREATED);
    }

    #[OA\Tag(name: 'Property Types')]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour modifier un type de propriété')]
    #[Route('/api/types/{id}', name: 'update_type', methods: ['PUT'])]
    public function updateType(int $id, Request $request, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $typeName = $data['type_name'];

        $type = $em->getRepository(Type::class)->find($id);

        if (!$type) {
            return new JsonResponse(['error' => '404', 'message' => 'Type not found.'], Response::HTTP_NOT_FOUND);
        }

        // Check if a Type with the given typeName already exists
        $existingType = $em->getRepository(Type::class)->findOneBy(['type_name' => $typeName]);

        if ($existingType && $existingType->getId() !== $type->getId()) {
            return new JsonResponse(['error' => '400', 'message' => 'Type with this name already exists.'], Response::HTTP_BAD_REQUEST);
        }

        $type->setTypeName($typeName);

        $em->persist($type);
        $em->flush();

        return new JsonResponse(['message' => 'Type updated successfully.'], Response::HTTP_OK);
    }

    #[OA\Tag(name: 'Property Types')]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour supprimer un type de propriété')]
    #[Route('/api/types/{id}', name: 'delete_type', methods: ['DELETE'])]
    public function deleteType(int $id, EntityManagerInterface $em): JsonResponse
    {
        $type = $em->getRepository(Type::class)->find($id);

        if (!$type) {
            return new JsonResponse(['error' => '404', 'message' => 'Type not found.'], Response::HTTP_NOT_FOUND);
        }

        $em->remove($type);
        $em->flush();

        return new JsonResponse(['message' => 'Type deleted successfully.'], Response::HTTP_NO_CONTENT);
    }
}