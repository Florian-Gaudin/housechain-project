<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: UserRepository::class)]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["getUsers", "getSecurityTokenWallets",'getWalletsByIncomeFrequency'])]
    private int $id;

    #[ORM\Column(length: 255)]
    #[Groups(["getUsers", "getSecurityTokenWallets", 'getWalletsByIncomeFrequency'])]
    #[Assert\NotBlank(message: "Le nom est obligatoire")]
    private string $name;

    #[ORM\Column(length: 255)]
    #[Groups(["getUsers", "getSecurityTokenWallets", 'getWalletsByIncomeFrequency'])]
    #[Assert\NotBlank(message: "Le prénom est obligatoire")]
    private string $surname;

    #[ORM\Column(length: 255)]
    #[Groups(["getUsers", "getSecurityTokenWallets", 'getWalletsByIncomeFrequency'])]
    #[Assert\NotBlank(message: "L'email est obligatoire")]
    #[Assert\Email(message: "L'email n'est pas valide")]
    private string $mail;

    #[ORM\Column(length: 255)]
    #[Groups(["getUsers", "getSecurityTokenWallets"])]
    #[Assert\NotBlank(message: "Le mot de passe est obligatoire")]
    private string $password;

    #[ORM\Column]
    #[Groups(["getUsers", "getSecurityTokenWallets"])]
    private bool $authenticated;

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2, nullable: true)]
    #[Groups(["getUsers", "getSecurityTokenWallets"])]
    private ?string $utility_token_total_amount = null;

    #[ORM\ManyToOne(inversedBy: 'users')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(["getUsers"])]
    #[Assert\NotNull(message: "Le rôle est obligatoire")]
    private ?role $role = null;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: SecurityTokenWallet::class)]
    #[Groups(["getUsers"])]
    private Collection $securityTokenWallets;

    public function __construct()
    {
        $this->securityTokenWallets = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getSurname(): ?string
    {
        return $this->surname;
    }

    public function setSurname(string $surname): static
    {
        $this->surname = $surname;

        return $this;
    }

    public function getMail(): ?string
    {
        return $this->mail;
    }

    public function setMail(string $mail): static
    {
        $this->mail = $mail;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    public function isAuthenticated(): ?bool
    {
        return $this->authenticated;
    }

    public function setAuthenticated(bool $authenticated): static
    {
        $this->authenticated = $authenticated;

        return $this;
    }

    public function getUtilityTokenTotalAmount(): ?string
    {
        return $this->utility_token_total_amount;
    }

    public function setUtilityTokenTotalAmount(?string $utility_token_total_amount): static
    {
        $this->utility_token_total_amount = $utility_token_total_amount;

        return $this;
    }

    public function getRoles(): array
    {
        // Récupérer les rôles de l'utilisateur depuis la propriété "role"
        $roles = [];
        if ($this->role instanceof Role) {
            $roles[] = $this->role->getName();
        }

        return $roles;
    }
    
    public function eraseCredentials()
    {
        // Supprimer les données sensibles de l'utilisateur (s'il y en a)
    }
    
    public function getSalt()
    {
        // Vous n'avez pas besoin de sel pour le hachage des mots de passe dans Symfony
        // Laissez simplement cette méthode vide (ou retournez null)
    }
    
    public function getUserIdentifier(): string
    {
        // Retourner l'identifiant unique de l'utilisateur
        return (string) $this->mail;
    }
    
    /**
     * Méthode getUsername qui permet de retourner le champ qui est utilisé pour l'authentification.
     *
     * @return string
     */
    public function getUsername(): string {
        return $this->getUserIdentifier();
    }

    public function getRole(): ?role
    {
        return $this->role;
    }

    public function setRole(?role $role): static
    {
        $this->role = $role;

        return $this;
    }

    /**
     * @return Collection<int, SecurityTokenWallet>
     */
    public function getSecurityTokenWallets(): Collection
    {
        return $this->securityTokenWallets;
    }

    public function addSecurityTokenWallet(SecurityTokenWallet $securityTokenWallet): static
    {
        if (!$this->securityTokenWallets->contains($securityTokenWallet)) {
            $this->securityTokenWallets->add($securityTokenWallet);
            $securityTokenWallet->setUser($this);
        }

        return $this;
    }

    public function removeSecurityTokenWallet(SecurityTokenWallet $securityTokenWallet): static
    {
        if ($this->securityTokenWallets->removeElement($securityTokenWallet)) {
            // set the owning side to null (unless already changed)
            if ($securityTokenWallet->getUser() === $this) {
                $securityTokenWallet->setUser(null);
            }
        }

        return $this;
    }
}
