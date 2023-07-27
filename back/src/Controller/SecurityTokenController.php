<?php

namespace App\Controller;

use App\Entity\SecurityToken;
use App\Repository\SecurityTokenRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Nelmio\ApiDocBundle\Annotation\Model;
use OpenApi\Attributes as OA;

class SecurityTokenController extends AbstractController
{
    #[OA\Tag(name: 'Security Token')]
    #[Route('/api/securitytokens', name: 'get_securitytokens', methods: ['GET'])]
    public function getSecurityTokensList(SecurityTokenRepository $securityTokenRepository): JsonResponse
    {
        $securityTokens = $securityTokenRepository->findAll();
        return $this->json($securityTokens, 200, [], ['groups' => ['getProperties']]);
    }

    #[OA\Tag(name: 'Security Token')]
    #[Route('/api/securitytokens/{id}', name: 'get_securitytoken', methods: ['GET'])]
    public function getSecurityToken(int $id, SecurityTokenRepository $securityTokenRepository): JsonResponse
    {
        $securityToken = $securityTokenRepository->find($id);

        if (!$securityToken) {
            return new JsonResponse(['error' => '404', 'message' => 'SecurityToken not found.'], 404);
        }

        return $this->json($securityToken, 200, [], ['groups' => ['getProperties']]);
    }

    #[OA\Tag(name: 'Security Token')]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour créer un security token')]
    #[Route('/api/securitytokens', name: 'create_securitytoken', methods: ['POST'])]
    public function createSecurityToken(Request $request, EntityManagerInterface $em, SerializerInterface $serializer, ValidatorInterface $validator): JsonResponse
    {
        $securityToken = $serializer->deserialize($request->getContent(), SecurityToken::class, 'json', [
            AbstractNormalizer::OBJECT_TO_POPULATE => new SecurityToken(),
        ]);

        $errors = $validator->validate($securityToken);

        if ($errors->count() > 0) {
            return new JsonResponse($serializer->serialize($errors, 'json'), JsonResponse::HTTP_BAD_REQUEST, [], true);
        }

        $em->persist($securityToken);
        $em->flush();

        return new JsonResponse(['message' => 'SecurityToken created successfully.'], JsonResponse::HTTP_CREATED);
    }

    #[OA\Tag(name: 'Security Token')]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour modifier un security token')]
    #[Route('/api/securitytokens/{id}', name: 'update_securitytoken', methods: ['PUT'])]
    public function updateSecurityToken(int $id, Request $request, EntityManagerInterface $em, SecurityTokenRepository $securityTokenRepository, SerializerInterface $serializer, ValidatorInterface $validator): JsonResponse
    {
        $securityToken = $securityTokenRepository->find($id);

        if (!$securityToken) {
            return new JsonResponse(['error' => '404', 'message' => 'SecurityToken not found.'], 404);
        }

        $updatedData = json_decode($request->getContent(), true);

        $serializer->deserialize(json_encode($updatedData), SecurityToken::class, 'json', [
            AbstractNormalizer::OBJECT_TO_POPULATE => $securityToken,
        ]);

        $errors = $validator->validate($securityToken);

        if ($errors->count() > 0) {
            return new JsonResponse($serializer->serialize($errors, 'json'), JsonResponse::HTTP_BAD_REQUEST, [], true);
        }

        $em->flush();

        return new JsonResponse(['message' => 'SecurityToken updated successfully.'], JsonResponse::HTTP_OK);
    }

    #[OA\Tag(name: 'Security Token')]
    #[IsGranted('ROLE_ADMIN', message: 'Vous n\'avez pas les droits suffisants pour supprimer un security token')]
    #[Route('/api/securitytokens/{id}', name: 'delete_securitytoken', methods: ['DELETE'])]
    public function deleteSecurityToken(int $id, EntityManagerInterface $em, SecurityTokenRepository $securityTokenRepository): JsonResponse
    {
        $securityToken = $securityTokenRepository->find($id);

        if (!$securityToken) {
            return new JsonResponse(['error' => '404', 'message' => 'SecurityToken not found.'], 404);
        }

        $em->remove($securityToken);
        $em->flush();

        return new JsonResponse(null, JsonResponse::HTTP_NO_CONTENT);
    }
}