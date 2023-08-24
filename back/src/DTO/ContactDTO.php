<?php

namespace App\DTO;

use OpenApi\Attributes as OA;

class ContactDTO
{
    #[OA\Property(example: 3)]
    public int $id;

    #[OA\Property(example: "Jean")]
    public string $name;

    #[OA\Property(example: "Dupont")]
    public string $surname;

    #[OA\Property(example: "exemple@housechain.com")]
    public string $mail;

    #[OA\Property(example: "Message")]
    public string $message;

    public function setName($name): void
    {
        $this->name = $name;
    }
    
    public function getName()
    {
        return $this->name;
    }

    public function setSurname($surname): void
    {
        $this->surname = $surname;
    }
    
    public function getSurname()
    {
        return $this->surname;
    }

    public function setMail($mail): void
    {
        $this->mail = $mail;
    }
    
    public function getMail()
    {
        return $this->mail;
    }

    public function setMessage($message): void
    {
        $this->message = $message;
    }
    
    public function getMessage()
    {
        return $this->message;
    }
}