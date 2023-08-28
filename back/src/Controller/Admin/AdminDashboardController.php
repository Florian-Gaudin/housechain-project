<?php

namespace App\Controller\Admin;

use App\Entity\Image;
use App\Entity\IncomeFrequency;
use App\Entity\News;
use App\Entity\Property;
use App\Entity\Role;
use App\Entity\SecurityToken;
use App\Entity\SecurityTokenWallet;
use App\Entity\Status;
use App\Entity\Type;
use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use Symfony\Component\Security\Core\User\UserInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\UserMenu;

class AdminDashboardController extends AbstractDashboardController
{

    #[Route('/admin', name: 'admin')]
    public function index(): Response
    {
        $adminUrlGenerator = $this->container->get(AdminUrlGenerator::class);

        return $this->redirect($adminUrlGenerator->setController(PropertyCrudController::class)->generateUrl());
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Housechain Admin Dashboard')
            ->setFaviconPath('front\public\favicon.ico');
            // ->setLocales([
            //     'fr' => 'Français',
            // ]);
    }

    public function configureUserMenu(UserInterface $user): UserMenu
    {
        // Usually it's better to call the parent method because that gives you a
        // user menu with some menu items already created ("sign out", "exit impersonation", etc.)
        // if you prefer to create the user menu from scratch, use: return UserMenu::new()->...
        return parent::configureUserMenu($user)
            // ->setName($user->getName())
            // ->displayUserName(true)
            // ->setGravatarEmail($user->getMail())
            // you can use any type of menu item, except submenus
            ->addMenuItems([
                MenuItem::section(),
            ]);
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToLogout('Se déconnecter', 'fa fa-exit');
        yield MenuItem::linkToUrl('Retour sur Housechain', 'fa fa-home', 'http://localhost:3000/');
        yield MenuItem::section('Propriétés');
        yield MenuItem::subMenu('Actions', 'fa fa-bar')->setSubItems(
            [
                MenuItem::linkToCrud('Créer une nouvelle propriété', 'fa fa-plus', Property::class)->setAction(Crud::PAGE_NEW),
                MenuItem::linkToCrud('Gérer les propriétés', 'fa fa-eye', Property::class),
                MenuItem::linkToCrud('Gérer les images', 'fa fa-eye', Image::class),
                MenuItem::linkToCrud('Gérer les statuts des propriétés', 'fa fa-eye', Status::class),
                MenuItem::linkToCrud('Gérer les types de propriété', 'fa fa-eye', Type::class),
            ]
            );
        yield MenuItem::section('Utilisateurs');
        yield MenuItem::subMenu('Actions', 'fa fa-bar')->setSubItems(
            [
                MenuItem::linkToCrud('Créer un nouvel utilisateur', 'fa fa-plus', User::class)->setAction(Crud::PAGE_NEW),
                MenuItem::linkToCrud('Gérer les utilisateurs', 'fa fa-eye', User::class),
                MenuItem::linkToCrud('Gérer les portefeuilles des utilisateurs', 'fa fa-eye', SecurityTokenWallet::class),
                MenuItem::linkToCrud('Gérer les rôles', 'fa fa-eye', Role::class),
            ]
            );
        yield MenuItem::section('Security Token');
        yield MenuItem::subMenu('Actions', 'fa fa-bar')->setSubItems(
        [
            MenuItem::linkToCrud('Créer un nouveau security token', 'fa fa-plus', SecurityToken::class)->setAction(Crud::PAGE_NEW),
            MenuItem::linkToCrud('Gérer les security tokens', 'fa fa-eye', SecurityToken::class),
            MenuItem::linkToCrud('Gérer les fréquences des revenus', 'fa fa-eye', IncomeFrequency::class),
        ]
        );
        yield MenuItem::section('Actualités');
        yield MenuItem::subMenu('Actions', 'fa fa-bar')->setSubItems(
        [
            MenuItem::linkToCrud('Créer une actualité', 'fa fa-plus', News::class)->setAction(Crud::PAGE_NEW),
            MenuItem::linkToCrud('Gérer les actualités', 'fa fa-eye', News::class),
        ]
        );
    }
}
