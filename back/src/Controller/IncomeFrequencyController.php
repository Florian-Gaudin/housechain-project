<?php

namespace App\Controller;

use App\Entity\IncomeFrequency;
use App\Repository\IncomeFrequencyRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Nelmio\ApiDocBundle\Annotation\Model;
use OpenApi\Attributes as OA;

class IncomeFrequencyController extends AbstractController
{
    #[OA\Tag(name: 'IncomeFrequency')]
    #[Route('/api/income_frequencies', name: 'get_income_frequencies', methods: ['GET'])]
    public function getIncomeFrequencies(IncomeFrequencyRepository $incomeFrequencyRepository): JsonResponse
    {
        $incomeFrequencies = $incomeFrequencyRepository->findAll();

        return $this->json($incomeFrequencies, 200, [], ['groups' => ['getIncomeFrequencies']]);
    }

    #[OA\Tag(name: 'IncomeFrequency')]
    #[Route('/api/income_frequencies/{id}', name: 'get_income_frequency', methods: ['GET'])]
    public function getIncomeFrequency(int $id, IncomeFrequencyRepository $incomeFrequencyRepository): JsonResponse
    {
        $incomeFrequency = $incomeFrequencyRepository->find($id);

        if (!$incomeFrequency) {
            return new JsonResponse(['error' => '404', 'message' => 'Income Frequency not found.'], 404);
        }

        return $this->json($incomeFrequency, 200, [], ['groups' => ['getIncomeFrequencies']]);
    }

    #[OA\Tag(name: 'IncomeFrequency')]
    #[Route('/api/income_frequencies/{id}/wallets', name: 'get_wallets_by_income_frequency', methods: ['GET'])]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour vérifier les fréquences sur les autres wallets')]
    public function getWalletsByIncomeFrequency(int $id, IncomeFrequencyRepository $incomeFrequencyRepository, EntityManagerInterface $entityManager): JsonResponse
    {
        $incomeFrequency = $incomeFrequencyRepository->find($id);

        if (!$incomeFrequency) {
            return new JsonResponse(['error' => '404', 'message' => 'Income Frequency not found.'], 404);
        }

        $wallets = $incomeFrequency->getSecurityTokenWallet()->toArray();

        return $this->json($wallets, 200, [], ['groups' => ['getWalletsByIncomeFrequency']]);
    }

    #[OA\Tag(name: 'IncomeFrequency')]
    #[Route('/api/income_frequencies', name: 'create_income_frequency', methods: ['POST'])]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour ajouter une fréquence de loyer')]
    public function createIncomeFrequency(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $incomeFrequency = new IncomeFrequency();
        $incomeFrequency->setFrequency($data['frequency']);

        $entityManager->persist($incomeFrequency);
        $entityManager->flush();

        return new JsonResponse(['message' => 'Income Frequency created successfully.'], Response::HTTP_CREATED);
    }

    #[OA\Tag(name: 'IncomeFrequency')]
    #[Route('/api/income_frequencies/{id}', name: 'update_income_frequency', methods: ['PUT'])]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour modifier une fréquence de loyer')]
    public function updateIncomeFrequency(int $id, Request $request, IncomeFrequencyRepository $incomeFrequencyRepository, EntityManagerInterface $entityManager): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $incomeFrequency = $incomeFrequencyRepository->find($id);

        if (!$incomeFrequency) {
            return new JsonResponse(['error' => '404', 'message' => 'Income Frequency not found.'], 404);
        }

        $incomeFrequency->setFrequency($data['frequency']);

        $entityManager->flush();

        return new JsonResponse(['message' => 'Income Frequency updated successfully.'], Response::HTTP_OK);
    }

    #[OA\Tag(name: 'IncomeFrequency')]
    #[Route('/api/income_frequencies/{id}', name: 'delete_income_frequency', methods: ['DELETE'])]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour supprimer une fréquence de loyer')]
    public function deleteIncomeFrequency(int $id, IncomeFrequencyRepository $incomeFrequencyRepository, EntityManagerInterface $entityManager): JsonResponse
    {
        $incomeFrequency = $incomeFrequencyRepository->find($id);

        if (!$incomeFrequency) {
            return new JsonResponse(['error' => '404', 'message' => 'Income Frequency not found.'], 404);
        }

        $entityManager->remove($incomeFrequency);
        $entityManager->flush();

        return new JsonResponse(null, Response::HTTP_NO_CONTENT);
    }
}