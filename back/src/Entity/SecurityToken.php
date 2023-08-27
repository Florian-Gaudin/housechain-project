<?php

namespace App\Entity;

use App\Repository\SecurityTokenRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: SecurityTokenRepository::class)]
class SecurityToken
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['getProperties', 'getSecurityTokenWallets','getUserSecurityTokenWallets'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank(message: "The stName cannot be blank.")]
    #[Assert\Length(max: 255, maxMessage: "The stName cannot be longer than {{ limit }} characters.")]
    #[Groups(['getProperties', 'getSecurityTokenWallets','getUserSecurityTokenWallets'])]
    private ?string $stName = null;
    
    #[ORM\Column]
    #[Assert\NotNull(message: "The stPrice cannot be null.")]
    #[Assert\GreaterThanOrEqual(value: 0, message: "The stPrice must be greater than or equal to 0.")]
    #[Groups(['getProperties', 'getSecurityTokenWallets','getUserSecurityTokenWallets'])]
    private ?int $stPrice = null;

    #[ORM\Column(nullable: true)]
    #[Assert\NotNull(message: "The stTotalQuantity cannot be null.")]
    #[Assert\GreaterThanOrEqual(value: 0, message: "The stTotalQuantity must be greater than or equal to 0.")]
    #[Groups(["getProperties", 'getSecurityTokenWallets','getUserSecurityTokenWallets'])]
    private ?int $stTotalQuantity = null;

    #[ORM\Column(nullable: true)]
    #[Assert\NotNull(message: "The stActualQuantity cannot be null.")]
    #[Assert\GreaterThanOrEqual(value: 0, message: "The stActualQuantity must be greater than or equal to 0.")]
    #[Groups(["getProperties", 'getSecurityTokenWallets','getUserSecurityTokenWallets'])]
    private ?int $stActualQuantity = null;

    #[ORM\ManyToOne(inversedBy: 'securityTokens')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Property $property = null;

    #[ORM\OneToMany(mappedBy: 'securityToken', targetEntity: SecurityTokenWallet::class)]
    private Collection $securityTokenWallets;

    public function __construct()
    {
        $this->securityTokenWallets = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStName(): ?string
    {
        return $this->stName;
    }

    public function setStName(string $stName): static
    {
        $this->stName = $stName;

        return $this;
    }

    public function getStPrice(): ?int
    {
        return $this->stPrice;
    }

    public function setStPrice(int $stPrice): static
    {
        $this->stPrice = $stPrice;

        return $this;
    }

    public function getStTotalQuantity(): ?int
    {
        return $this->stTotalQuantity;
    }

    public function setStTotalQuantity(?int $stTotalQuantity): static
    {
        $this->stTotalQuantity = $stTotalQuantity;

        return $this;
    }

    public function getStActualQuantity(): ?int
    {
        return $this->stActualQuantity;
    }

    public function setStActualQuantity(?int $stActualQuantity): static
    {
        $this->stActualQuantity = $stActualQuantity;

        return $this;
    }

    public function getProperty(): ?Property
    {
        return $this->property;
    }

    public function setProperty(?Property $property): static
    {
        $this->property = $property;

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
            $securityTokenWallet->setSecurityToken($this);
        }

        return $this;
    }

    public function removeSecurityTokenWallet(SecurityTokenWallet $securityTokenWallet): static
    {
        if ($this->securityTokenWallets->removeElement($securityTokenWallet)) {
            // set the owning side to null (unless already changed)
            if ($securityTokenWallet->getSecurityToken() === $this) {
                $securityTokenWallet->setSecurityToken(null);
            }
        }

        return $this;
    }

    public function __toString()
    {
    return $this->getStName();
    }
}
