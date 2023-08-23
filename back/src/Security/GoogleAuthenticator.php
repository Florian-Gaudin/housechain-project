<?php
namespace App\Security;

use App\Entity\User; // your user entity
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
use KnpU\OAuth2ClientBundle\Security\Authenticator\OAuth2Authenticator;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\UserBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Passport;
use Symfony\Component\Security\Http\Authenticator\Passport\SelfValidatingPassport;
use Symfony\Component\Security\Http\EntryPoint\AuthenticationEntryPointInterface;


class GoogleAuthenticator extends OAuth2Authenticator implements AuthenticationEntrypointInterface
{
    private $clientRegistry;
    private $em;
    private $router;

    public function __construct(ClientRegistry $clientRegistry, EntityManagerInterface $em, RouterInterface $router)
    {
        $this->clientRegistry = $clientRegistry;
        $this->em = $em;
        $this->router = $router;
    }

    public function supports(Request $request): ?bool
    {
        // dd("hello googleauth supports" . ($request->attributes->get('_route') === 'connect_google_check') );
        return $request->attributes->get('_route') === 'connect_google_check';
        // continue ONLY if the current ROUTE matches the check ROUTE
    }

    public function getCredentials(Request $request)
    {
        dd("hello googleauth getcredentials");
        return $this->fetchAccessToken($this->getGoogleClient());
    }

    public function getUser($credentials, UserRepository $userRepo)
    {
        dd("hello googleauth getuser");
        /** @var GoogleUser $googleUser */
        $googleUser = $this->getGoogleClient()
            ->fetchUserFromToken($credentials);

        $email = $googleUser->getEmail();

        // 1) have they logged in with Google before? Easy!
        $existingUser = $this->em->getRepository(User::class)
            ->findOneBy(['mail' => $email]);
        if ($existingUser) {
            return $existingUser;
        }
        if (!$existingUser){
            $user = new User();
            $user->setMail($googleUser->getEmail());
            $user->setName($googleUser->getName());
            $this->em->persist($user);
            $this->em->flush();
        }

        return $user;
    }

    public function getGoogleClient()
    {
        return $this->clientRegistry->getClient('google');
    }

    public function authenticate(Request $request): Passport
    {
        dd("google auth authenticate à refaire");
        $client = $this->clientRegistry->getClient('google');
        $accessToken = $this->fetchAccessToken($client);

        return new SelfValidatingPassport(
            new UserBadge($accessToken->getToken(), function() use ($accessToken, $client) {
                /** @var GoogleUser $googleUser */
                $googleUser = $client->fetchUserFromToken($accessToken);

                $email = $googleUser->getEmail();

                // 1) have they logged in with Facebook before? Easy!
                $existingUser = $this->em->getRepository(User::class)->findOneBy(['mail' => $googleUser->getEmail()]);

                if ($existingUser) {
                    return $existingUser;
                }

                // 2) do we have a matching user by email?
                $user = $this->em->getRepository(User::class)->findOneBy(['email' => $email]);
                // 3) Maybe you just want to "register" them by creating
                // a User object
                $user->setFacebookId($googleUser->getId());
                $this->em->persist($user);
                $this->em->flush();

                return $user;
            })
        );
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?Response
    {
        // change "app_homepage" to some route in your app
        $targetUrl = $this->router->generate('connect_google_check');

        return new RedirectResponse($targetUrl);
    
        // or, on success, let the request continue to be handled by the controller
        //return null;
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception): ?Response
    {
        // dd($exception);
        $message = strtr($exception->getMessageKey(), $exception->getMessageData());

        return new Response($message, Response::HTTP_FORBIDDEN);
    }
    
   /**
     * Called when authentication is needed, but it's not sent.
     * This redirects to the 'login'.
     */
    public function start(Request $request, AuthenticationException $authException = null): Response
    {
        return new RedirectResponse(
            '/login', // might be the site, where users choose their oauth provider --------------------   Essayer /login !!!!!
            Response::HTTP_TEMPORARY_REDIRECT
        );
    }
}
