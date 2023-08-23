<?php

namespace App\Controller\Admin;

use App\Entity\Property;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class PropertyCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Property::class;
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
    // public function configureFields(string $pageName): iterable
    // {
    //     return [
    //         IdField::new('id')->hideOnForm()
    //         ->hideOnDetail(),
    //         TextareaField::new('description'),
    //         TextField::new('link'),
    //         TextField::new('video_link'),
    //         ImageField::new('poster')->setUploadDir('public/uploads/forums/posters/')
    //         ->setBasePath('uploads/forums/posters/'),
    //         ImageField::new('video')->setUploadDir('public/uploads/forums/videos/')
    //         ->setBasePath('uploads/forums/videos/'),
    //         ChoiceField::new('status')->setChoices([
    //             'A venir' => 'A venir',
    //             'Retrospective' => 'Retrospective']),
    //         DateField::new('Date'),
    //         // AssociationField::new('User'),
    //     ];
    // }
}
