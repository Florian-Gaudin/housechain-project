<?php

namespace App\Controller\Admin;

use App\Entity\Image;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class ImageCrudController extends AbstractCrudController
{
    public const IMAGES_BASE_PATH = "/upload/images/property";
    public const IMAGES_UPLOAD_DIR = "/public/upload/images/property";

    public static function getEntityFqcn(): string
    {
        return Image::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            ChoiceField::new('type')
                ->setChoices([
                    'Principale' => 'main',
                    'Secondaire' => 'secondary']),
            TextEditorField::new('description'),
            ImageField::new('url')
                ->setBasePath(self::IMAGES_BASE_PATH)
                ->setUploadDir(self::IMAGES_UPLOAD_DIR)
                ->setSortable(false),
            AssociationField::new('property'),
        ];
    }

}
