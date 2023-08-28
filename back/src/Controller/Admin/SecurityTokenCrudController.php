<?php

namespace App\Controller\Admin;

use App\Entity\SecurityToken;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class SecurityTokenCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return SecurityToken::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('stName', "Nom du token"),
            NumberField::new('stPrice', "Prix du token"),
            NumberField::new('stTotalQuantity', "Quantité totale de tokens"),
            NumberField::new('stActualQuantity', "Quantité restante de tokens"),
            AssociationField::new('property', 'Propriété associée'),
        ];
    }
    
}
