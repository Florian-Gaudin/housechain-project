<?php
namespace App\Services;

use Symfony\Component\Form\FormInterface;

class FormErrorConverterService
{
    public function convertFormErrors(FormInterface $form): array
    {
        $errors = [];

        foreach ($form->getErrors(true, true) as $error) {
            $field = $error->getOrigin()?->getName() ?: '_global';
            $errors[$field][] = $error->getMessage();
        }

        return $errors;
    }
}