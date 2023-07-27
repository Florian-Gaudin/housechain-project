<?php

namespace App\Entity;

use App\Repository\IncomeFrequencyRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: IncomeFrequencyRepository::class)]
class IncomeFrequency
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['getIncomeFrequencies'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['getIncomeFrequencies'])]
    private ?string $frequency = null;

    #[ORM\OneToMany(mappedBy: 'incomeFrequency', targetEntity: SecurityTokenWallet::class)]
    #[Groups(['getWalletsByIncomeFrequency'])]
    private Collection $SecurityTokenWallet;

    public function __construct()
    {
        $this->SecurityTokenWallet = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFrequency(): ?string
    {
        return $this->frequency;
    }

    public function setFrequency(string $frequency): static
    {
        $this->frequency = $frequency;

        return $this;
    }

    /**
     * @return Collection<int, SecurityTokenWallet>
     */
    public function getSecurityTokenWallet(): Collection
    {
        return $this->SecurityTokenWallet;
    }

    public function addSecurityTokenWallet(SecurityTokenWallet $securityTokenWallet): static
    {
        if (!$this->SecurityTokenWallet->contains($securityTokenWallet)) {
            $this->SecurityTokenWallet->add($securityTokenWallet);
            $securityTokenWallet->setIncomeFrequency($this);
        }

        return $this;
    }

    public function removeSecurityTokenWallet(SecurityTokenWallet $securityTokenWallet): static
    {
        if ($this->SecurityTokenWallet->removeElement($securityTokenWallet)) {
            // set the owning side to null (unless already changed)
            if ($securityTokenWallet->getIncomeFrequency() === $this) {
                $securityTokenWallet->setIncomeFrequency(null);
            }
        }

        return $this;
    }
}
