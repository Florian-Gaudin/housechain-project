<?php

namespace App\Controller\Admin;

use App\Entity\IncomeFrequency;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class IncomeFrequencyCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return IncomeFrequency::class;
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
