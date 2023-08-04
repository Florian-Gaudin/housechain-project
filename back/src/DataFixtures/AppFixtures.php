<?php

namespace App\DataFixtures;

use App\Entity\Image;
use App\Entity\IncomeFrequency;
use App\Entity\Property;
use App\Entity\Role;
use App\Entity\SecurityToken;
use App\Entity\SecurityTokenWallet;
use App\Entity\Type;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory as Faker;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    private UserPasswordHasherInterface $passwordHasher;

    public function __construct(UserPasswordHasherInterface $passwordHasher)
    {
        $this->passwordHasher = $passwordHasher;
    }

    public function load(ObjectManager $manager): void
    {
        $faker = Faker::create('fr_FR');

        // Create and persist the "Maison" type
        $maisonType = new Type();
        $maisonType->setTypeName('Maison');
        $manager->persist($maisonType);

        // Create and persist the "Appartement" type
        $appartementType = new Type();
        $appartementType->setTypeName('Appartement');
        $manager->persist($appartementType);

        $types = [$maisonType, $appartementType];

        $properties = [];
        for ($i=0; $i < 20; $i++) {
            $property = new Property();
            $property->setName($faker->name);
            $property->setCity($faker->city);
            $property->setDescription($faker->sentence(5));
            $property->setType($faker->randomElement($types));
            $property->setTotalprice($faker->numberBetween(100000, 400000));
            $property->setYield($faker->numberBetween(4.01, 15.99));
            $manager->persist($property);
            $properties[] = $property;
        }

        $images = [];
        for ($i=0; $i < 100; $i++) {
            $image = new Image();
            $image->setUrl($faker->imageUrl(200,300));
            $image->setProperty($faker->randomElement($properties));
            $image->setType("secondary");
            $image->setDescription($faker->sentence(5));
            $manager->persist($image);
            $images[] = $image;
        }

        // Create and persist the "Hebdomadaire" income frequency
        $hebdomadaireFrequency = new IncomeFrequency();
        $hebdomadaireFrequency->setFrequency('Hebdomadaire');
        $manager->persist($hebdomadaireFrequency);

        // Create and persist the "Mensuel" income frequency
        $mensuelFrequency = new IncomeFrequency();
        $mensuelFrequency->setFrequency('Mensuel');
        $manager->persist($mensuelFrequency);

        $incomeFrequencies = [$hebdomadaireFrequency, $mensuelFrequency];

        $securityTokens = [];
        foreach ($properties as $property) {
            $securityToken = new SecurityToken();
            $securityToken->setStName('Token for ' . $property->getName());
            $securityToken->setStPrice(mt_rand(0, 100));
            $securityToken->setStTotalQuantity(mt_rand(0, 100000));
            $securityToken->setStActualQuantity(mt_rand(0, 100000));

            // Associate the SecurityToken with the Property using its ID
            $securityToken->setProperty($property);
            $securityTokens[] = $securityToken;

            $manager->persist($securityToken);
        }

        // Create and persist a role "ROLE_ADMIN"
        $adminRole = new Role();
        $adminRole->setName('ROLE_ADMIN');
        $manager->persist($adminRole);

        // Create and persist a role "ROLE_USER"
        $userRole = new Role();
        $userRole->setName('ROLE_USER');
        $manager->persist($userRole);

        // Create and persist a role "ROLE_EDITOR"
        $editorRole = new Role();
        $editorRole->setName('ROLE_EDITOR');
        $manager->persist($editorRole);

        // Create and persist 100 users and associate them with different roles
        $users = [];
        for ($i = 0; $i < 100; $i++) {
            $user = new User();
            $user->setName('User' . $i);
            $user->setSurname('Surname' . $i);
            $user->setMail('user' . $i . '@example.com');
            $user->setAuthenticated(true);
            $user->setUtilityTokenTotalAmount('1000.00');

            // Encode and set the password for each user
            $password = 'password'; // You can set your desired password here
            $hashedPassword = $this->passwordHasher->hashPassword($user, $password);
            $user->setPassword($hashedPassword);

            // Randomly assign a role to the user
            $randomRole = rand(1, 3);
            if ($randomRole === 1) {
                $user->setRole($adminRole);
            } elseif ($randomRole === 2) {
                $user->setRole($userRole);
            } else {
                $user->setRole($editorRole);
            }
            $users[] = $user;

            $manager->persist($user);
        }

        $securityTokenWallets = [];
        foreach ($users as $user) {
            for ($i = 0; $i < 5; $i++) {
                $securityTokenWallet = new SecurityTokenWallet();
                $securityTokenWallet->setStQuantity(mt_rand(0, 100));
                $securityTokenWallet->setCreatedAt(new \DateTimeImmutable());
                $securityTokenWallet->setUtilityTokenIncome(mt_rand(0, 100));
                $securityTokenWallet->setUser($user);

                // $securityToken = $securityTokens[array_rand($securityTokens)];
                $securityTokenWallet->setSecurityToken($faker->randomElement($securityTokens));
                
                // Assign a random income frequency to each security token wallet
                $randomIncomeFrequency = $incomeFrequencies[array_rand($incomeFrequencies)];
                $securityTokenWallet->setIncomeFrequency($randomIncomeFrequency);
                
                $securityTokenWallets[] = $securityTokenWallet;
                
                $manager->persist($securityTokenWallet);
            }
        }

        $manager->flush();
    }
}
