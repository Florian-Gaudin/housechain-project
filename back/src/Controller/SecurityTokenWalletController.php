<?php

namespace App\Controller;

use App\Entity\SecurityTokenWallet;
use App\Entity\User;
use App\Repository\SecurityTokenWalletRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Nelmio\ApiDocBundle\Annotation\Model;
use OpenApi\Attributes as OA;

class SecurityTokenWalletController extends AbstractController
{
    #[OA\Tag(name: 'Security Token Wallet')]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour consulter un security token wallet')]
    #[Route('/api/securitytokenwallets', name: 'get_security_token_wallets', methods: ['GET'])]
    public function getSecurityTokenWallets(SecurityTokenWalletRepository $securityTokenWalletRepository): JsonResponse
    {
        $securityTokenWallets = $securityTokenWalletRepository->findAll();
        return $this->json($securityTokenWallets, 200, [], ['groups' => ['getSecurityTokenWallets']]);
    }

    #[OA\Tag(name: 'Security Token Wallet')]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour consulter un security token wallet')]
    #[Route('/api/securitytokenwallets/{id}', name: 'get_security_token_wallet', methods: ['GET'])]
    public function getSecurityTokenWallet(int $id, SecurityTokenWalletRepository $securityTokenWalletRepository): JsonResponse
    {
        $securityTokenWallet = $securityTokenWalletRepository->find($id);

        if (!$securityTokenWallet) {
            return new JsonResponse(['error' => '404', 'message' => 'Security Token Wallet not found.'], Response::HTTP_NOT_FOUND);
        }

        return $this->json($securityTokenWallet, 200, [], ['groups' => ['getSecurityTokenWallets']]);
    }

    #[OA\Tag(name: 'Security Token Wallet')]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour consulter un security token wallet')]
    #[Route('/api/users/{id}/security_token_wallets', name: 'get_user_security_token_wallets', methods: ['GET'])]
    public function getUserSecurityTokenWallets(int $id, SecurityTokenWalletRepository $securityTokenWalletRepository, EntityManagerInterface $entityManager): JsonResponse
    {
        // Recherche l'utilisateur par son id
        $user = $entityManager->getRepository(User::class)->find($id);

        if (!$user) {
            return new JsonResponse(['error' => '404', 'message' => 'User not found.'], 404);
        }

        // Recherche tous les portefeuilles de tokens de sécurité associés à cet utilisateur
        $securityTokenWallets = $securityTokenWalletRepository->findBy(['user' => $user]);

        // Vous pouvez sérialiser les résultats selon vos besoins, ici nous utilisons le groupe 'getUsers'
        return $this->json($securityTokenWallets, 200, [], ['groups' => ['getUserSecurityTokenWallets']]);
    }

    #[OA\Tag(name: 'Security Token Wallet')]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour créer un security token wallet')]
    #[Route('/api/securitytokenwallets', name: 'create_security_token_wallet', methods: ['POST'])]
    public function createSecurityTokenWallet(Request $request, SerializerInterface $serializer, ValidatorInterface $validator, EntityManagerInterface $entityManager): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $securityTokenWallet = $serializer->deserialize($request->getContent(), SecurityTokenWallet::class, 'json');
        $errors = $validator->validate($securityTokenWallet);

        if (count($errors) > 0) {
            $errorMessages = [];
            foreach ($errors as $error) {
                $errorMessages[] = $error->getMessage();
            }
            return new JsonResponse(['errors' => $errorMessages], Response::HTTP_BAD_REQUEST);
        }

        $entityManager->persist($securityTokenWallet);
        $entityManager->flush();

        return new JsonResponse(['message' => 'Security Token Wallet created successfully.'], Response::HTTP_CREATED);
    }

    #[OA\Tag(name: 'Security Token Wallet')]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour modifier un security token wallet')]
    #[Route('/api/securitytokenwallets/{id}', name: 'update_security_token_wallet', methods: ['PUT'])]
    public function updateSecurityTokenWallet(int $id, Request $request, SecurityTokenWalletRepository $securityTokenWalletRepository, SerializerInterface $serializer, ValidatorInterface $validator, EntityManagerInterface $entityManager): JsonResponse
    {
        $securityTokenWallet = $securityTokenWalletRepository->find($id);

        if (!$securityTokenWallet) {
            return new JsonResponse(['error' => '404', 'message' => 'Security Token Wallet not found.'], Response::HTTP_NOT_FOUND);
        }

        $data = json_decode($request->getContent(), true);
        $securityTokenWallet = $serializer->deserialize($request->getContent(), SecurityTokenWallet::class, 'json', ['object_to_populate' => $securityTokenWallet]);

        $errors = $validator->validate($securityTokenWallet);

        if (count($errors) > 0) {
            $errorMessages = [];
            foreach ($errors as $error) {
                $errorMessages[] = $error->getMessage();
            }
            return new JsonResponse(['errors' => $errorMessages], Response::HTTP_BAD_REQUEST);
        }

        $entityManager->flush();

        return new JsonResponse(['message' => 'Security Token Wallet updated successfully.'], Response::HTTP_OK);
    }

    #[OA\Tag(name: 'Security Token Wallet')]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour supprimer un security token wallet')]
    #[Route('/api/securitytokenwallets/{id}', name: 'delete_security_token_wallet', methods: ['DELETE'])]
    public function deleteSecurityTokenWallet(int $id, SecurityTokenWalletRepository $securityTokenWalletRepository, EntityManagerInterface $entityManager): JsonResponse
    {
        $securityTokenWallet = $securityTokenWalletRepository->find($id);

        if (!$securityTokenWallet) {
            return new JsonResponse(['error' => '404', 'message' => 'Security Token Wallet not found.'], Response::HTTP_NOT_FOUND);
        }

        $entityManager->remove($securityTokenWallet);
        $entityManager->flush();

        return new JsonResponse(null, Response::HTTP_NO_CONTENT);
    }
}

