<?php

namespace App\Controller\Admin;

use App\Entity\News;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class NewsCrudController extends AbstractCrudController
{
    public const IMAGES_BASE_PATH = "/upload/images/news";
    public const IMAGES_UPLOAD_DIR = "/public/upload/images/news";
    public static function getEntityFqcn(): string
    {
        return News::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('title', 'Titre'),
            TextareaField::new('text', 'Texte'),
            // DateField::new('createdAt', 'Date de création'),
            ImageField::new('image')
                ->setBasePath(self::IMAGES_BASE_PATH)
                ->setUploadDir(self::IMAGES_UPLOAD_DIR)
        ];
    }

    public function persistEntity(EntityManagerInterface $em, $entityInstance): void
    {
        if(!$entityInstance instanceof News) return;
        $entityInstance->setCreatedAt(new \DateTimeImmutable());

        parent::persistEntity($em, $entityInstance);
    }
    
}
