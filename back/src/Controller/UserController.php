<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use OpenApi\Attributes as OA;

class UserController extends AbstractController
{
    #[OA\Tag(name: 'Users')]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour voir les utilisateurs')]
    #[Route('/api/users', name: 'get_users', methods: ['GET'])]
    public function getUsersList(UserRepository $userRepository): JsonResponse
    {
        $users = $userRepository->findAll();
        return $this->json($users, 200, [], ['groups' => ['getUsers']]);
    }

    #[OA\Tag(name: 'Users')]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour voir les utilisateurs')]
    #[Route('/api/users/{id}', name: 'get_user', methods: ['GET'])]
    public function getUserById(int $id, UserRepository $userRepository): JsonResponse
    {
        $user = $userRepository->find($id);

        if (!$user) {
            return new JsonResponse(['error' => '404', 'message' => 'User not found.'], 404);
        }

        return $this->json($user, 200, [], ['groups' => ['getUsers']]);
    }

    #[OA\Tag(name: 'Users')]
    #[Route('/api/me', name: 'get_account', methods: ['GET'])]
    public function getAccount(): JsonResponse
    {
        return $this->json($this->getUser(), 200, [], ['groups' => ['getUsers']]);
    }


    #[OA\Tag(name: 'Users')]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour créer un utilisateur')]
    #[Route('/api/users', name: 'create_user', methods: ['POST'])]
    public function createUser(Request $request, EntityManagerInterface $em, UserPasswordHasherInterface $passwordHasher, ValidatorInterface $validator): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $user = new User();
        $user->setName($data['name']);
        $user->setSurname($data['surname']);
        $user->setMail($data['mail']);
        $user->setAuthenticated(false); // Assuming default value is false for 'authenticated' field
        $user->setUtilityTokenTotalAmount($data['utility_token_total_amount']);

        // Hash the password before persisting
        $hashedPassword = $passwordHasher->hashPassword($user, $data['password']);
        $user->setPassword($hashedPassword);

        // Validate the User entity
        $errors = $validator->validate($user);

        if (count($errors) > 0) {
            $errorMessages = [];
            foreach ($errors as $error) {
                $errorMessages[] = $error->getMessage();
            }

            return new JsonResponse(['errors' => $errorMessages], 400);
        }

        $em->persist($user);
        $em->flush();

        return new JsonResponse(['message' => 'User created successfully.'], 201);
    }

    #[OA\Tag(name: 'Users')]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour modifier un utilisateur')]
    #[Route('/api/users/{id}', name: 'update_user', methods: ['PUT'])]
    public function updateUser(int $id, Request $request, UserRepository $userRepository, UserPasswordHasherInterface $passwordHasher, ValidatorInterface $validator): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $user = $userRepository->find($id);

        if (!$user) {
            return new JsonResponse(['error' => '404', 'message' => 'User not found.'], 404);
        }

        $user->setName($data['name']);
        $user->setSurname($data['surname']);
        $user->setMail($data['mail']);
        $user->setUtilityTokenTotalAmount($data['utility_token_total_amount']);

        // Update the password if provided
        if (isset($data['password'])) {
            $hashedPassword = $passwordHasher->hashPassword($user, $data['password']);
            $user->setPassword($hashedPassword);
        }

        // Validate the User entity
        $errors = $validator->validate($user);

        if (count($errors) > 0) {
            $errorMessages = [];
            foreach ($errors as $error) {
                $errorMessages[] = $error->getMessage();
            }

            return new JsonResponse(['errors' => $errorMessages], 400);
        }

        $userRepository->save($user);

        return new JsonResponse(['message' => 'User updated successfully.'], 200);
    }

    #[OA\Tag(name: 'Users')]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour supprimer un utilisateur')]
    #[Route('/api/users/{id}', name: 'delete_user', methods: ['DELETE'])]
    public function deleteUser(int $id, UserRepository $userRepository, EntityManagerInterface $entityManager): JsonResponse
    {
        $user = $userRepository->find($id);

        if (!$user) {
            return new JsonResponse(['error' => '404', 'message' => 'User not found.'], 404);
        }

        $entityManager->remove($user);
        $entityManager->flush();

        return new JsonResponse(null, 204);
    }
}
