<?php

namespace App\Controller\Admin;

use App\Entity\SecurityToken;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class SecurityTokenCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return SecurityToken::class;
    }

    /*
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id'),
            TextField::new('title'),
            TextEditorField::new('description'),
        ];
    }
    */
}
