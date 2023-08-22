<?php

namespace App\Entity;

use App\Repository\PropertyRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: PropertyRepository::class)]
class Property
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["getProperties", "getImages"])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(["getProperties", "getImages"])]
    #[Assert\NotBlank(message: "Le nom de la propriété est obligatoire")]
    #[Assert\Length(min: 1, max: 255, minMessage: "Le nom de la propriété doit faire au moins {{ limit }} caractères", maxMessage: "Le nom de la propriété ne peut pas faire plus de {{ limit }} caractères")]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank(message: "La ville de la propriété est obligatoire")]
    #[Assert\Length(min: 1, max: 255, minMessage: "La ville de la propriété doit faire au moins {{ limit }} caractères", maxMessage: "La ville de la propriété ne peut pas faire plus de {{ limit }} caractères")]
    #[Groups(["getProperties", "getImages"])]
    private ?string $city = null;

    #[ORM\Column]
    #[Groups(["getProperties", "getImages"])]
    #[Assert\NotBlank(message: "Le prix de la propriété est obligatoire")]
    #[Assert\Range(min: 0, max: 2000000, notInRangeMessage: "Le prix de la propriété doit être compris entre {{ min }} et {{ max }}")]
    private ?int $totalprice = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 4, scale: 2)]
    #[Groups(["getProperties", "getImages"])]
    #[Assert\NotBlank(message: "Le rendement de la propriété est obligatoire")]
    #[Assert\Range(min: 0, max: 30, notInRangeMessage: "Le rendement de la propriété doit être compris entre {{ min }} et {{ max }}")]
    private ?string $yield = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(["getProperties", "getImages"])]
    #[Assert\NotBlank(message: "La description de la propriété est obligatoire")]
    #[Assert\Length(min: 10, minMessage: "La description de la propriété doit faire au moins {{ limit }} caractères")]
    private ?string $description = null;

    #[ORM\OneToMany(mappedBy: 'property', targetEntity: Image::class)]
    #[Groups(["getProperties"])]
    private Collection $property_images;

    #[ORM\ManyToOne(inversedBy: 'properties', cascade: ["persist"])]
    #[Groups(["getProperties"])]
    #[ORM\JoinColumn(nullable: false)]
    #[Assert\NotBlank(message: "Le type de la propriété est obligatoire")]
    private ?Type $type = null;

    #[ORM\OneToMany(mappedBy: 'property', targetEntity: SecurityToken::class)]
    #[Groups(["getProperties"])]
    private Collection $securityTokens;

    #[ORM\ManyToOne(inversedBy: 'properties', cascade: ["persist"])]
    #[Groups(["getProperties"])]
    #[ORM\JoinColumn(nullable: false)]
    #[Assert\NotBlank(message: "Le statut de la propriété est obligatoire")]
    private ?Status $status = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $startingDate = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $endingDate = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    public function __construct()
    {
        $this->property_images = new ArrayCollection();
        $this->securityTokens = new ArrayCollection();
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

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): static
    {
        $this->city = $city;

        return $this;
    }

    public function getTotalprice(): ?int
    {
        return $this->totalprice;
    }

    public function setTotalprice(int $totalprice): static
    {
        $this->totalprice = $totalprice;

        return $this;
    }

    public function getYield(): ?string
    {
        return $this->yield;
    }

    public function setYield(string $yield): static
    {
        $this->yield = $yield;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return Collection<int, Image>
     */
    public function getPropertyImages(): Collection
    {
        return $this->property_images;
    }

    public function addPropertyImages(Image $propertyImages): static
    {
        if (!$this->property_images->contains($propertyImages)) {
            $this->property_images->add($propertyImages);
            $propertyImages->setProperty($this);
        }

        return $this;
    }

    public function removePropertyImages(Image $propertyImages): static
    {
        if ($this->property_images->removeElement($propertyImages)) {
            // set the owning side to null (unless already changed)
            if ($propertyImages->getProperty() === $this) {
                $propertyImages->setProperty(null);
            }
        }

        return $this;
    }

    public function getType(): ?type
    {
        return $this->type;
    }

    public function setType(?type $type): static
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @return Collection<int, SecurityToken>
     */
    public function getSecurityTokens(): Collection
    {
        return $this->securityTokens;
    }

    public function addSecurityToken(SecurityToken $securityToken): static
    {
        if (!$this->securityTokens->contains($securityToken)) {
            $this->securityTokens->add($securityToken);
            $securityToken->setProperty($this);
        }

        return $this;
    }

    public function removeSecurityToken(SecurityToken $securityToken): static
    {
        if ($this->securityTokens->removeElement($securityToken)) {
            // set the owning side to null (unless already changed)
            if ($securityToken->getProperty() === $this) {
                $securityToken->setProperty(null);
            }
        }

        return $this;
    }

    public function getStatus(): ?Status
    {
        return $this->status;
    }

    public function setStatus(?Status $status): static
    {
        $this->status = $status;

        return $this;
    }

    public function getStartingDate(): ?\DateTimeInterface
    {
        return $this->startingDate;
    }

    public function setStartingDate(?\DateTimeInterface $startingDate): static
    {
        $this->startingDate = $startingDate;

        return $this;
    }

    public function getEndingDate(): ?\DateTimeInterface
    {
        return $this->endingDate;
    }

    public function setEndingDate(?\DateTimeInterface $endingDate): static
    {
        $this->endingDate = $endingDate;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }
}
