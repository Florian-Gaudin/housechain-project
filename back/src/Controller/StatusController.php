<?php

namespace App\Controller;

use App\Entity\Status;
use App\Repository\StatusRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use OpenApi\Attributes as OA;

class StatusController extends AbstractController
{
    #[OA\Tag(name: 'Property Status')]
    #[Route('/api/status', name: 'status', methods: ['GET'])]
    public function getStatusList(StatusRepository $statusRepository): JsonResponse
    {
        $status = $statusRepository->findAll();
        return $this->json($status, 200, [], ['groups' => ['getProperties']]);
    }

    #[OA\Tag(name: 'Property Status')]
    #[Route('/api/status/{id}/properties', name: 'status_properties', methods: ['GET'])]
    public function getStatusProperties(int $id, StatusRepository $statusRepository): JsonResponse
    {
        $status = $statusRepository->find($id);

        if (!$status) {
            return new JsonResponse(['error' => '404', 'message' => 'Status not found.'], Response::HTTP_NOT_FOUND);
        }

        $properties = $status->getProperties();

        return $this->json($properties, Response::HTTP_OK, [], ['groups' => ['getProperties']]);
    }

    #[OA\Tag(name: 'Property Status')]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour créer un status de propriété')]
    #[Route('/api/status', name: 'create_status', methods: ['POST'])]
    public function createStatus(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $statusType = $data['type'];

        // Check if a Status with the given statusType already exists
        $existingStatus = $em->getRepository(Status::class)->findOneBy(['status_name' => $statusType]);

        if ($existingStatus) {
            return new JsonResponse(['error' => '400', 'message' => 'Status with this type already exists.'], Response::HTTP_BAD_REQUEST);
        }

        $status = (new Status())->setType($statusType);

        $em->persist($status);
        $em->flush();

        return new JsonResponse(['message' => 'Status created successfully.'], Response::HTTP_CREATED);
    }

    #[OA\Tag(name: 'Property Status')]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour modifier un status de propriété')]
    #[Route('/api/status/{id}', name: 'update_status', methods: ['PUT'])]
    public function updateStatus(int $id, Request $request, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $statusType = $data['type'];

        $status = $em->getRepository(Status::class)->find($id);

        if (!$status) {
            return new JsonResponse(['error' => '404', 'message' => 'Status not found.'], Response::HTTP_NOT_FOUND);
        }

        // Check if a Status with the given statusType already exists
        $existingStatus = $em->getRepository(Status::class)->findOneBy(['type' => $statusType]);

        if ($existingStatus && $existingStatus->getId() !== $status->getId()) {
            return new JsonResponse(['error' => '400', 'message' => 'Status with this name already exists.'], Response::HTTP_BAD_REQUEST);
        }

        $status->setStatusName($statusType);

        $em->persist($status);
        $em->flush();

        return new JsonResponse(['message' => 'Status updated successfully.'], Response::HTTP_OK);
    }

    #[OA\Tag(name: 'Property Status')]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour supprimer un status de propriété')]
    #[Route('/api/status/{id}', name: 'delete_status', methods: ['DELETE'])]
    public function deleteStatus(int $id, EntityManagerInterface $em): JsonResponse
    {
        $status = $em->getRepository(Status::class)->find($id);

        if (!$status) {
            return new JsonResponse(['error' => '404', 'message' => 'Status not found.'], Response::HTTP_NOT_FOUND);
        }

        $em->remove($status);
        $em->flush();

        return new JsonResponse(['message' => 'Status deleted successfully.'], Response::HTTP_NO_CONTENT);
    }
}