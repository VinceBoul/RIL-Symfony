<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="App\Repository\RecetteRepository")
 */
class Recette
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $teaser;

    /**
     * @ORM\Column(type="text")
     */
    private $body;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $heating_duration;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $prepDuration;


    /**
     * @ORM\Column(type="string", length=255, nullable=true)
	 *
	 * @Assert\NotBlank(message="Please, sélectionnez une image pour cette recette.")
	 * @Assert\File(mimeTypes={ "image/jpeg" })
     */
    private $image;

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $ingredients = [];

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $difficulty;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getTeaser(): ?string
    {
        return $this->teaser;
    }

    public function setTeaser(?string $teaser): self
    {
        $this->teaser = $teaser;

        return $this;
    }

    public function getBody(): ?string
    {
        return $this->body;
    }

    public function setBody(string $body): self
    {
        $this->body = $body;

        return $this;
    }

    public function getHeatingDuration(): ?int
    {
        return $this->heating_duration;
    }

    public function setHeatingDuration(?int $heating_duration): self
    {
        $this->heating_duration = $heating_duration;

        return $this;
    }

    public function getPrepDuration(): ?int
    {
        return $this->prepDuration;
    }

    public function setPrepDuration(int $prepDuration): self
    {
        $this->prepDuration = $prepDuration;

        return $this;
    }

    public function getImage()
    {
        return $this->image;
    }

    public function setImage($image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getIngredients(): ?array
    {
        return $this->ingredients;
    }

    public function setIngredients(?array $ingredients): self
    {
        $this->ingredients = $ingredients;

        return $this;
    }

    public function getDifficulty(): ?int
    {
        return $this->difficulty;
    }

    public function setDifficulty(?int $difficulty): self
    {
        $this->difficulty = $difficulty;

        return $this;
    }

}
