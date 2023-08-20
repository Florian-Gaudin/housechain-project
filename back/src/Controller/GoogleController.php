<?php
namespace App\Controller;

use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
use League\OAuth2\Client\Provider\Exception\IdentityProviderException;
use League\OAuth2\Client\Provider\Google;

class GoogleController extends AbstractController
{
    #[Route('/api/connect/google', name: 'connect_google')]
    // @param mixed $name
    public function connectGoogle(ClientRegistry $clientRegistry)
    {
        // on Symfony 3.3 or lower, $clientRegistry = $this->get('knpu.oauth2.registry');

        // will redirect to Facebook!
        return $clientRegistry
            ->getClient('google') // key used in config/packages/knpu_oauth2_client.yaml
            ->redirect([
                'public_profile', 'email' // the scopes you want to access
            ]);
    }

    #[Route('/api/auth/callback/google', name: 'connect_google_check')]
    public function googleConnectCheck(Request $request, ClientRegistry $clientRegistry)
    {
        $client = $clientRegistry->getClient('google');
        $provider = $client->getOAuth2Provider();
        
        if (!empty($_GET['error'])) {

            // Got an error, probably user denied access
            exit('Got error: ' . htmlspecialchars($_GET['error'], ENT_QUOTES, 'UTF-8'));
            
        } elseif (empty($_GET['code'])) {
            
            // If we don't have an authorization code then get one
            $authUrl = $provider->getAuthorizationUrl();
            $oauthState = $provider->getState();
            header('Location: ' . $authUrl);
            exit;
            
        } elseif (empty($_GET['state'])) {
            
            exit('Invalid statesdfqsd');
            
        } else {

            $actualState = $request->query->get('state');
            // dd($actualState);



            $authorizationCode = $request->query->get('code');
            $accessToken = $client->getAccessToken(['code' => $_GET['code']]);
            $ownerDetails = $provider->getResourceOwner($authorizationCode);
            dd("hello", $client, $provider);


    // dd('authorizationCode', $authorizationCode);

    // Try to get an access token (using the authorization code grant)
    // $token = $provider->getAccessToken('authorization_code', [
    //     'code' => $authorizationCode
    // ]);

    // Optional: Now you have a token you can look up a users profile data
    try {

        // We got an access token, let's now get the owner details

        // Use these details to create a new profile
        printf('Hello %s!', $ownerDetails->getFirstName());

    } catch (Exception $e) {

        // Failed to get user details
        exit('Something went wrong: ' . $e->getMessage());

    }
}

        // $user = $client->fetchUserFromToken($accessToken);






        // Try to get an access token (using the authorization code grant)
        // $token = $provider->getAccessToken('authorization_code', [
        //     'code' => $_GET['code']
        // ]);

        //     // We got an access token, let's now get the owner details
        //     $ownerDetails = $provider->getResourceOwner($token);

        //     // Use these details to create a new profile
        //     printf('Hello %s!', $ownerDetails->getFirstName());





        // // Échanger le code contre un jeton d'accès et un jeton de rafraîchissement
        // $accessToken = $this->exchangeAuthorizationCodeForAccessToken($authorizationCode);

        // // Obtenir les informations de l'utilisateur depuis Google
        // $userData = $this->getUserDataFromGoogle($accessToken);

        // // Vérifier si l'utilisateur existe déjà dans la base de données
        // $user = $this->userRepository->findOneBy(['email' => $userData['email']]);

        // if (!$user) {
        //     // Créer un nouvel utilisateur dans la base de données
        //     $user = new User();
        //     $user->setEmail($userData['email']);
        //     // ... autres attributs de l'utilisateur ...
        //     $entityManager->persist($user);
        //     $entityManager->flush();
        // }

        // // Authentifier l'utilisateur dans Symfony
        // $this->authenticateUser($user);

        // // Rediriger l'utilisateur vers la page souhaitée
        // return $this->redirectToRoute('home');
    }
}

        // $client = $clientRegistry->getClient('google');

        // dd("client", $client);

        //  try {
        //      // the exact class depends on which provider you're using
        //      /** @var \League\OAuth2\Client\Provider\GoogleUser $user */
        //      $user = $client->fetchUser();

        //      // do something with all this new power!
        //      // e.g. $name = $user->getFirstName();
        //      var_dump($user); die;
        //      // ...
        //  } catch (IdentityProviderException $e) {
        //      // something went wrong!
        //      // probably you should return the reason to the user
        //      var_dump($e->getMessage()); die;
        //  }