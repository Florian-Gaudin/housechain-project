<?php
namespace App\Controller;

use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

class LoginController extends AbstractController
{
    private $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    #[Route('/api/login', name: 'login', methods: ['POST'])]
    public function login(Request $request, EntityManagerInterface $em, UserPasswordHasherInterface $passwordHasher): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $accessToken = $request->cookies->get('OutSiteJWT');
        $username = $request->cookies->get('Username');

        $username = $data['username'] ?? null;
        $password_login = $data['password_login'] ?? null;

        if (!$username || !$password_login) {
            return new JsonResponse(['message' => 'Username and password are required.'], 400);
        }

        // Find the user by username
        $user = $this->userRepository->findOneBy(['mail' => $username]);

        if (!$user) {
            return new JsonResponse(['message' => 'User not found.'], 404);
        }

        // Check if the password_login matches
        if (password_verify($password_login, $user->getPasswordLogin())) {

            // dd($accessToken, $username);
            if (!$username && !$accessToken) {
                return new JsonResponse(['message' => "Vous devez vous connecter pour obtenir un token d'accès."], 400);
            }
            if(!$username){
                return new JsonResponse(['message' => "Vous devez entrer un mail valide pour obtenir un token d'accès."], 400);
            }
            if(!$accessToken){
                return new JsonResponse(['message' => "Votre token d'accès est invalide."], 400);
            }
            if ($username && $accessToken) {
                // Find the user by username
                $user = $this->userRepository->findOneBy(['mail' => $username]);

                if (!$user) {
                    return new JsonResponse(['message' => 'User not found.'], 404);
                }
                // Entrer le accessToken en BDD comme mot de passe
                $hashedAccessToken = $passwordHasher->hashPassword($user, $accessToken);
                $user->setPassword($hashedAccessToken);
                $em->persist($user);
                $em->flush();
            }
            return new JsonResponse(['message' => "Connecté avec succès, token d'accès créé.", 'access_token' => $accessToken], 200);
        } else {
            return new JsonResponse(['message' => 'Incorrect username or password.'], 401);
        }
    }
}