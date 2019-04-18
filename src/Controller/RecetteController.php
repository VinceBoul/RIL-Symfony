<?php

namespace App\Controller;

use App\Entity\Recette;
use App\Form\RecetteType;
use App\Repository\RecetteRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/recette")
 */
class RecetteController extends AbstractController
{

	/**
     * @Route("/", name="recette_index", methods={"GET"})
     */
    public function index(RecetteRepository $recetteRepository): Response
    {
        return $this->render('recette/index.html.twig', [
            'recettes' => $recetteRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="recette_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $recette = new Recette();
        $form = $this->createForm(RecetteType::class, $recette);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

			// $file stores the uploaded PDF file
			/** @var UploadedFile $file */
			$file = $recette->getImage();
			if ($file) {

				$fileName = $this->generateUniqueFileName() . '.' . $file->guessExtension();

				// Move the file to the directory where brochures are stored
				try {
					$file->move(
						$this->getParameter('recettes_img_dir'),
						$fileName
					);
				} catch (FileException $e) {
					// ... handle exception if something happens during file upload
				}

				$recette->setImage($fileName);
			}

			$entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($recette);
            $entityManager->flush();

            return $this->redirectToRoute('recette_index');
        }



        return $this->render('recette/new.html.twig', [
            'recette' => $recette,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="recette_show", methods={"GET"})
     */
    public function show(Recette $recette): Response
    {
        return $this->render('recette/show.html.twig', [
            'recette' => $recette,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="recette_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Recette $recette): Response
    {
		$originalTags = new ArrayCollection();
		$entityManager = $this->getDoctrine()->getManager();
		// Create an ArrayCollection of the current Tag objects in the database
		foreach ($recette->getIngredients() as $tag) {
			$originalTags->add($tag);
		}

		$originalImageName = null;
		if (strlen($recette->getImage()) > 0){
			$originalImageName = $recette->getImage();
			$originalFile = new File($this->getParameter('recettes_img_dir').'/'.$recette->getImage());

			$recette->setImage($originalFile->getBasename());
		}

        $form = $this->createForm(RecetteType::class, $recette);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
			// $file stores the uploaded PDF file
			/** @var UploadedFile $file */
			$file = $recette->getImage();

			if ($file){
				$fileName = $this->generateUniqueFileName().'.'.$file->guessExtension();
				// Move the file to the directory where brochures are stored
				try {
					$file->move(
						$this->getParameter('recettes_img_dir'),
						$fileName
					);
				} catch (FileException $e) {
					// ... handle exception if something happens during file upload
				}

				$recette->setImage($fileName);
			}elseif($originalImageName){
				$recette->setImage($originalImageName);
			}

			// Création des ingrédients
			foreach ($originalTags as $tag) {
				if (false === $recette->getIngredients()->contains($tag)) {
					// remove the Task from the Tag
					$entityManager->persist($tag);
				}
			}

            $entityManager->persist($recette);
            $entityManager->flush();

            return $this->redirectToRoute('recette_index', [
                'id' => $recette->getId(),
            ]);
        }

        return $this->render('recette/edit.html.twig', [
            'recette' => $recette,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="recette_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Recette $recette): Response
    {
        if ($this->isCsrfTokenValid('delete'.$recette->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($recette);
            $entityManager->flush();
        }

        return $this->redirectToRoute('recette_index');
    }

	/**
	 * @return string
	 */
	private function generateUniqueFileName()
	{
		// md5() reduces the similarity of the file names generated by
		// uniqid(), which is based on timestamps
		return md5(uniqid());
	}
}
