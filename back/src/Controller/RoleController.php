<?php

namespace App\Controller;

use App\Entity\Role;
use App\Repository\RoleRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Nelmio\ApiDocBundle\Annotation\Model;
use OpenApi\Attributes as OA;

class RoleController extends AbstractController
{
    #[OA\Tag(name: 'Roles')]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour vérifier les rôles')]
    #[Route('/api/roles', name: 'get_roles', methods: ['GET'])]
    public function getRoles(RoleRepository $roleRepository): JsonResponse
    {
        $roles = $roleRepository->findAll();
        return $this->json($roles, 200, [], ['groups' => ['getUsers']]);
    }

    #[OA\Tag(name: 'Roles')]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour vérifier les rôles')]
    #[Route('/api/roles/{id}', name: 'get_role', methods: ['GET'])]
    public function getRole(int $id, RoleRepository $roleRepository): JsonResponse
    {
        $role = $roleRepository->find($id);

        if (!$role) {
            return new JsonResponse(['error' => '404', 'message' => 'Role not found.'], Response::HTTP_NOT_FOUND);
        }

        return $this->json($role, 200, [], ['groups' => ['getUsers']]);
    }

    #[OA\Tag(name: 'Roles')]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour vérifier les rôles')]
    #[Route('/api/roles/{id}/users', name: 'get_users_by_role', methods: ['GET'])]
    public function getUsersByRole(int $id, RoleRepository $roleRepository, UserRepository $userRepository): JsonResponse
    {
        $role = $roleRepository->find($id);

        if (!$role) {
            return new JsonResponse(['error' => '404', 'message' => 'Role not found.'], Response::HTTP_NOT_FOUND);
        }

        $users = $userRepository->findBy(['role' => $role]);

        return $this->json($users, 200, [], ['groups' => ['getUsers']]);
    }

    #[OA\Tag(name: 'Roles')]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour créer un rôle')]
    #[Route('/api/roles', name: 'create_role', methods: ['POST'])]
    public function createRole(Request $request, SerializerInterface $serializer, ValidatorInterface $validator, EntityManagerInterface $entityManager): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $role = $serializer->deserialize($request->getContent(), Role::class, 'json');
        $errors = $validator->validate($role);

        if (count($errors) > 0) {
            $errorMessages = [];
            foreach ($errors as $error) {
                $errorMessages[] = $error->getMessage();
            }
            return new JsonResponse(['errors' => $errorMessages], Response::HTTP_BAD_REQUEST);
        }

        $entityManager->persist($role);
        $entityManager->flush();

        return new JsonResponse(['message' => 'Role created successfully.'], Response::HTTP_CREATED);
    }

    #[OA\Tag(name: 'Roles')]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour modifier un rôle')]
    #[Route('/api/roles/{id}', name: 'update_role', methods: ['PUT'])]
    public function updateRole(int $id, Request $request, RoleRepository $roleRepository, SerializerInterface $serializer, ValidatorInterface $validator, EntityManagerInterface $entityManager): JsonResponse
    {
        $role = $roleRepository->find($id);

        if (!$role) {
            return new JsonResponse(['error' => '404', 'message' => 'Role not found.'], Response::HTTP_NOT_FOUND);
        }

        $data = json_decode($request->getContent(), true);
        $role = $serializer->deserialize($request->getContent(), Role::class, 'json', ['object_to_populate' => $role]);

        $errors = $validator->validate($role);

        if (count($errors) > 0) {
            $errorMessages = [];
            foreach ($errors as $error) {
                $errorMessages[] = $error->getMessage();
            }
            return new JsonResponse(['errors' => $errorMessages], Response::HTTP_BAD_REQUEST);
        }

        $entityManager->flush();

        return new JsonResponse(['message' => 'Role updated successfully.'], Response::HTTP_OK);
    }

    #[OA\Tag(name: 'Roles')]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour supprimer un rôle')]
    #[Route('/api/roles/{id}', name: 'delete_role', methods: ['DELETE'])]
    public function deleteRole(int $id, RoleRepository $roleRepository, EntityManagerInterface $entityManager): JsonResponse
    {
        $role = $roleRepository->find($id);

        if (!$role) {
            return new JsonResponse(['error' => '404', 'message' => 'Role not found.'], Response::HTTP_NOT_FOUND);
        }

        $entityManager->remove($role);
        $entityManager->flush();

        return new JsonResponse(null, Response::HTTP_NO_CONTENT);
    }
}
