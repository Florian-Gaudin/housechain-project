<?php

namespace App\Entity;

use App\Repository\ImageRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ImageRepository::class)]
class Image
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["getProperties", "getImages"])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(["getProperties", "getImages"])]
    private ?string $url = null;

    #[ORM\ManyToOne(inversedBy: 'property_images', targetEntity: Property::class)]
    #[Groups(["getImages"])]
    private ?property $property = null;

    #[ORM\Column(length: 50)]
    #[Groups(["getProperties", "getImages"])]
    private ?string $type = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["getProperties", "getImages"])]
    private ?string $description = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(string $url): static
    {
        $this->url = $url;

        return $this;
    }

    public function getProperty(): ?property
    {
        return $this->property;
    }

    public function setProperty(?property $property): static
    {
        $this->property = $property;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): static
    {
        $this->type = $type;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }
}
