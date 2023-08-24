<?php // src/Controller/MailerController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;
use OpenApi\Attributes as OA;

class EmailController extends AbstractController
{
    #[OA\Tag(name: 'Contact')]
    #[Route('/email', name: 'email')]
    public function sendEmail(MailerInterface $mailer): Response
    {
        $email = (new Email())
            ->from("floriangaudin13@gmail.com")
            ->to('floriangaudin13@gmail.com')
            ->subject('Time for Symfony Mailer!')
            ->text('Sending emails is fun again!')
            ->html("egehteryjytjrtujetgrh");

        $mailer->send($email);

        return new Response('success');
    }
}