<?php

namespace App\Controller;

use App\DTO\ContactDTO;
use App\Form\ContactType;
use App\Services\FormErrorConverterService;
use Nelmio\ApiDocBundle\Annotation\Model;
use Symfony\Component\HttpFoundation\Request;
use OpenApi\Attributes as OA;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class ContactController extends AbstractController
{
    #[OA\Tag(name: 'Contact')]
    #[Route('/api/contacts', name: 'contacts', methods: ['POST'])]
    #[OA\RequestBody(
        content: new OA\JsonContent(
            ref: new Model(
                type: ContactType::class)))]
    #[OA\Response(
        response: 201,
        description: "Cette réponse renvoie une réponse de succès de l'envoi du formulaire",
        content: new OA\JsonContent(
            type: 'array',
            items: new OA\Items(ref: new Model(type: ContactDTO::class))
        )
    )]
    #[OA\Response(
        response: 400,
        description: "Cette réponse renvoie une réponse d'échec' de l'envoi du formulaire",
        content: new OA\JsonContent(
            ref: new Model(type: ContactDTO::class)
        )
    )]
    public function postContact(Request $request, FormErrorConverterService $errorConverter): JsonResponse
    {

        $contactDTO = new ContactDTO();
        $contactForm = $this->createForm(ContactType::class, $contactDTO);
        $contactForm->submit(json_decode($request->getContent(), true));
        if ($contactForm->isSubmitted() && $contactForm->isValid()) {
            $responseData = [
                'name' => $contactDTO->getName(),
                'surname' => $contactDTO->getSurname(),
                'email' => $contactDTO->getMail(),
                'message' => $contactDTO->getMessage(),
            ];
    
            return new JsonResponse(['message' => 'Formulaire de contact envoyé avec succès.', $responseData], 201);
            
        } elseif (!$contactForm->isSubmitted() || !$contactForm->isValid()) {
            // Convert form errors to the expected structure for your JS function
            $errorData = $errorConverter->convertFormErrors($contactForm);

            return new JsonResponse(['errors' => $errorData], 400);
        }
    }

}