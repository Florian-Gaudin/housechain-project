<?php
namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class RegisterController extends AbstractController
{
    #[Route('/api/register', name: 'register', methods: ['POST'])]
    public function register(Request $request, EntityManagerInterface $em, UserPasswordHasherInterface $passwordHasher, ValidatorInterface $validator): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        dd($data);
        //fetch the default role
        $defaultRole = $em->getRepository(Role::class)->findOneBy(['name' => 'ROLE_USER']);

        $user = new User();
        $user->setName($data['name']);
        $user->setSurname($data['surname']);
        $user->setMail($data['mail']);
        $user->setAuthenticated(false); // Assuming default value is false for 'authenticated' field
        $user->setUtilityTokenTotalAmount(0);
        $user->setRole($defaultRole);
        $user->setPassword($passwordHasher->hashPassword($user, $data['password']));

        // Hash the password_login before persisting
        $hashedPasswordLogin = $passwordHasher->hashPassword($user, $data['password_login']);
        $user->setPasswordLogin($hashedPasswordLogin);

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
}