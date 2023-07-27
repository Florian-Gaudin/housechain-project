<?php

namespace App\Entity;

use App\Repository\SecurityTokenWalletRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: SecurityTokenWalletRepository::class)]
class SecurityTokenWallet
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['getSecurityTokenWallets',"getUsers",'getUserSecurityTokenWallets', 'getWalletsByIncomeFrequency'])]
    private ?int $id = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2, nullable: true)]
    #[Groups(['getSecurityTokenWallets', "getUsers",'getUserSecurityTokenWallets', 'getWalletsByIncomeFrequency'])]
    private ?string $stQuantity = null;

    #[ORM\Column]
    #[Groups(['getSecurityTokenWallets',"getUsers",'getUserSecurityTokenWallets', 'getWalletsByIncomeFrequency'])]
    private ?\DateTimeImmutable $created_at = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2, nullable: true)]
    #[Groups(['getSecurityTokenWallets', "getUsers",'getUserSecurityTokenWallets','getWalletsByIncomeFrequency'])]
    private ?string $utilityTokenIncome = null;

    #[ORM\ManyToOne(inversedBy: 'securityTokenWallets')]
    #[Groups(['getSecurityTokenWallets', 'getWalletsByIncomeFrequency'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?user $user = null;

    #[ORM\ManyToOne(inversedBy: 'securityTokenWallets')]
    #[Groups(['getSecurityTokenWallets','getUserSecurityTokenWallets'])]
    private ?SecurityToken $securityToken = null;

    #[ORM\ManyToOne(inversedBy: 'SecurityTokenWallet')]
    #[ORM\JoinColumn(nullable: false)]
    private ?IncomeFrequency $incomeFrequency = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStQuantity(): ?string
    {
        return $this->stQuantity;
    }

    public function setStQuantity(?string $stQuantity): static
    {
        $this->stQuantity = $stQuantity;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeImmutable $created_at): static
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getUtilityTokenIncome(): ?string
    {
        return $this->utilityTokenIncome;
    }

    public function setUtilityTokenIncome(?string $utilityTokenIncome): static
    {
        $this->utilityTokenIncome = $utilityTokenIncome;

        return $this;
    }

    public function getUser(): ?user
    {
        return $this->user;
    }

    public function setUser(?user $user): static
    {
        $this->user = $user;

        return $this;
    }

    public function getSecurityToken(): ?SecurityToken
    {
        return $this->securityToken;
    }

    public function setSecurityToken(?SecurityToken $securityToken): static
    {
        $this->securityToken = $securityToken;

        return $this;
    }

    public function getIncomeFrequency(): ?IncomeFrequency
    {
        return $this->incomeFrequency;
    }

    public function setIncomeFrequency(?IncomeFrequency $incomeFrequency): static
    {
        $this->incomeFrequency = $incomeFrequency;

        return $this;
    }
}
