<?php

namespace App\Controller;

use App\Entity\Property;
use App\Entity\Type;
use App\Repository\PropertyRepository;
use App\Repository\StatusRepository;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Contracts\Cache\ItemInterface;
use Symfony\Contracts\Cache\TagAwareCacheInterface;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Nelmio\ApiDocBundle\Annotation\Model;
use OpenApi\Attributes as OA;

class PropertyController extends AbstractController
{
    private PropertyRepository $propertyRepository;
    private StatusRepository $statusRepo;
    private EntityManagerInterface $em;

    public function __construct(PropertyRepository $propertyRepository, StatusRepository $statusRepo, EntityManagerInterface $em)
    {
        $this->propertyRepository = $propertyRepository;
        $this->statusRepo = $statusRepo;
        $this->em = $em;
    }

    #[OA\Response(
        response: 200,
        description: "Retourne la liste des propriétés",
        content: new OA\JsonContent(
            type: "array",
            items: new OA\Items(ref: new Model(type: Property::class, groups: ["getProperties"]))
        )
    )]
    #[OA\Parameter(
        name: 'page',
        in: 'query',
        description: "La page que l'on veut récupérer",
        schema: new OA\Schema(type: 'int')
    )]
    #[OA\Parameter(
        name: 'limit',
        in: 'query',
        description: "Le nombre d'éléments que l'on veut récupérer",
        schema: new OA\Schema(type: 'int')
    )]
    #[OA\Tag(name: 'Properties')]
    #[Route('/api/properties', name: 'properties', methods: ['GET'])]
    public function getPropertiesList(PropertyRepository $propertyRepository, Request $request, TagAwareCacheInterface $cache, SerializerInterface $serializer): JsonResponse
    {
        $allProperties = $propertyRepository->findAll();
        foreach ($allProperties as $property) {
            $this->updatePropertyStatus($property->getId());
        }

        $page = $request->get('page', 1);
        $limit = $request->get('limit', 100);

        $idCache = "getAllProperties-" . $page . "-" . $limit;
        $jsonPropertiesList = $cache->get($idCache, function (ItemInterface $item) use ($propertyRepository, $page, $limit, $serializer) {
            $item->tag("propertiesCache");
            $propertiesList = $propertyRepository->findAllWithPagination($page, $limit);

            return $serializer->serialize($propertiesList, 'json', ['groups' => 'getProperties']);
        });
        return new JsonResponse($jsonPropertiesList, 200, [], true);
    }

    #[OA\Response(
        response: 200,
        description: "Retourne une propriété par son ID",
        content: new OA\JsonContent(
            type: "array",
            items: new OA\Items(ref: new Model(type: Property::class, groups: ["getProperties"]))
        )
    )]
    #[OA\Response(
        response: 404,
        description: "La propriété n'a pas été trouvée",
        content: new OA\JsonContent(
            type: "object",
            properties: [
                new OA\Property(property: "Error", type: "string", example: "404"),
                new OA\Property(property: "message", type: "string", example: "Property not found.")
            ]
        )
    )]
    #[OA\Tag(name: 'Properties')]
    #[Route('/api/properties/{id}', name: 'propertyDetail', methods: ['GET'])]
    public function getPropertyDetail(int $id, PropertyRepository $propertyRepository): JsonResponse
    {
        $property = $propertyRepository->find($id);

        if (!$property) {
            return new JsonResponse(['Error' => '404', 'message' => 'Property not found.'], 404);
        }

        return $this->json($property, 200, [], ['groups' => ['getProperties']]);
    }

    #[OA\Response(
        response: 204,
        description: "La propriété a été supprimée avec succès !",
        content: new OA\JsonContent(
            type: "object",
            properties: [
                new OA\Property(property: "Success", type: "string", example: "404"),
                new OA\Property(property: "message", type: "string", example: "La propriété a été supprimée avec succès")
            ]
        )
    )]
    #[OA\Response(
        response: 404,
        description: "La propriété n'a pas été trouvée",
        content: new OA\JsonContent(
            type: "object",
            properties: [
                new OA\Property(property: "Error", type: "string", example: "404"),
                new OA\Property(property: "message", type: "string", example: "Property not found.")
            ]
        )
    )]
    #[OA\Tag(name: 'Properties')]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour supprimer une propriété')]
    #[Route('/api/properties/{id}', name: 'deleteProperty', methods: ['DELETE'])]
    public function deleteProperty(int $id, EntityManagerInterface $em, PropertyRepository $propertyRepository, TagAwareCacheInterface $cachePool): JsonResponse 
    {
        $property = $propertyRepository->find($id);

        if (!$property) {
            return new JsonResponse(['Error' => '404', 'message' => 'Property not found.'], 404);
        }

        $images = $property->getPropertyImages();
        foreach ($images as $image) {
            $em->remove($image);
        }
        $cachePool->invalidateTags(["propertiesCache"]);
        $em->remove($property);
        $em->flush();

        return new JsonResponse(null, 204);
    }

    #[OA\RequestBody(
        content: new OA\JsonContent(
            type: "array",
            items: new OA\Items(ref: new Model(type: Property::class, groups: ["getProperties"]))))]
    #[OA\Response(
        response: 200,
        description: "La propriété a été créée avec succès !",
        content: new OA\JsonContent(
            type: "array",
            items: new OA\Items(ref: new Model(type: Property::class, groups: ["getProperties"]))
        )
    )]
    #[OA\Response(
        response: 400,
        description: 'This response provides bad request sample structure',
        content: new OA\JsonContent(
            type: "array",
            items: new OA\Items(ref: new Model(type: Property::class, groups: ["getProperties"]))
        )
    )]
    #[OA\Tag(name: 'Properties')]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour créer une propriété')]
    #[Route('/api/properties', name: 'createProperty', methods: ['POST'])]
    public function createProperty(Request $request, EntityManagerInterface $em, SerializerInterface $serializer, UrlGeneratorInterface $urlGenerator, ValidatorInterface $validator, TagAwareCacheInterface $cachePool): JsonResponse 
    {
        // Récupérer les données de la requête
        $data = json_decode($request->getContent(), true);

        // Vérifier si l'ID du type existe dans les données
        if (empty($data['type']['id'])) {
            return new JsonResponse(['error' => 'Missing type_id'], 400);
        }

        // Charger l'entité Type à partir de la base de données en utilisant l'ID
        $type = $em->getRepository(Type::class)->find($data['type']['id']);

        // Vérifier si le type existe
        if (!$type) {
            return new JsonResponse(['error' => 'Type not found'], 404);
        }
        $property = $serializer->deserialize($request->getContent(), Property::class, 'json', [
            AbstractNormalizer::OBJECT_TO_POPULATE => new Property(),
        ]);

        // Lier l'entité Property à l'entité Type
        $property->setType($type);

        // On vérifie les erreurs
        $errors = $validator->validate($property);

        if (count($errors) > 0) {
            $errorMessages = [];
            foreach ($errors as $error) {
                $errorMessages[] = $error->getMessage();
            }

            return new JsonResponse(['errors' => $errorMessages], JsonResponse::HTTP_BAD_REQUEST);
        }

        $cachePool->invalidateTags(["propertiesCache"]);
        $em->persist($property);
        $em->flush();

        $location = $urlGenerator->generate('propertyDetail', ['id' => $property->getId()], UrlGeneratorInterface::ABSOLUTE_URL);

        return $this->json($property, 201, ["Location" => $location], ['groups' => ['getProperties']]);
    }

    #[OA\RequestBody(
        content: new OA\JsonContent(
            type: "array",
            items: new OA\Items(ref: new Model(type: Property::class, groups: ["getProperties"]))))]
    #[OA\Response(
        response: 200,
        description: "La propriété a été modifiée avec succès",
        content: new OA\JsonContent(
            type: "array",
            items: new OA\Items(ref: new Model(type: Property::class, groups: ["getProperties"]))
        )
    )]
    #[OA\Response(
        response: 404,
        description: "La propriété n'a pas été trouvée",
        content: new OA\JsonContent(
            type: "object",
            properties: [
                new OA\Property(property: "Error", type: "string", example: "404"),
                new OA\Property(property: "message", type: "string", example: "Property not found.")
            ]
        )
    )]
    #[OA\Tag(name: 'Properties')]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour modifier une propriété')]
    #[Route('/api/properties/{id}', name: 'updateProperty', methods: ['PUT'])]
    public function updateProperty(int $id, Request $request, EntityManagerInterface $em, TagAwareCacheInterface $cachePool): JsonResponse
    {
        // Récupérer l'entité Property à partir de l'ID
        $property = $em->getRepository(Property::class)->find($id);
    
        // Vérifier si la Property existe
        if (!$property) {
            return new JsonResponse(['error' => '404', 'message' => 'Property not found.'], 404);
        }
    
        // Récupérer les données de la requête
        $data = json_decode($request->getContent(), true);
    
        // Vérifier si l'ID du type existe dans les données
        if (empty($data['type']['id'])) {
            return new JsonResponse(['error' => 'Missing type_id'], 400);
        }
    
        // Charger l'entité Type à partir de la base de données en utilisant l'ID
        $type = $em->getRepository(Type::class)->find($data['type']['id']);
    
        // Vérifier si le type existe
        if (!$type) {
            return new JsonResponse(['error' => 'Type not found'], 404);
        }
    
        // Mettre à jour les autres champs de la propriété
        $property->setName($data['name']);
        $property->setCity($data['city']);
        $property->setTotalPrice($data['totalprice']);
        $property->setYield($data['yield']);
        $property->setDescription($data['description']);

        // Lier l'entité Property à l'entité Type
        $property->setType($type);

        $cachePool->invalidateTags(["propertiesCache"]);
        $em->flush();
    
        return $this->json($property, 200, [], ['groups' => ['getProperties']]);
    }

    public function updatePropertyStatus(int $id)
    {
        $status1 = $this->statusRepo->find(1);
        $status2 = $this->statusRepo->find(2);
        $status3 = $this->statusRepo->find(3);
        $property = $this->propertyRepository->find($id);
        $today = new DateTimeImmutable(date('Y-m-d'));
        $starting_date = $property->getStartingDate();
        if($starting_date === null) {
            $property->setStartingDate($today);
            $this->em->flush();
        }
        $start = $property->getStartingDate();
        $interval_start = $today->diff($start);
        $ending_date = $property->getEndingDate();
        
        $securityToken = $property->getSecurityTokens();
        
        
        if ( $securityToken[0]->getStActualQuantity() === 0) {
            $property->setStatus($status3);
            $property->setEndingDate($today);
        }

        elseif ( $starting_date !== null && $ending_date === null && $interval_start->invert == 1 && $interval_start->days > 0)  {
            $property->setStatus($status2);
        }
        
        elseif ( $starting_date !== null && $ending_date === null && $interval_start->invert == 0 && $interval_start->days > 0) {
            $property->setStatus($status1);
        }
        $this->em->flush();
    }
}
