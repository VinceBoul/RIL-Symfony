<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
	/**
	 * @Route("/user", name="user_list")
	 * @param UserRepository $userRepository
	 * @return \Symfony\Component\HttpFoundation\Response
	 */
    public function index(UserRepository $userRepository)
    {
        return $this->render('user/index.html.twig', [
            'controller_name' => 'UserController',
			'users' => $userRepository->findAll()
        ]);
    }

	/**
	 * @Route("user/{id}", name="user_show")
	 * @param $id
	 * @return \Symfony\Component\HttpFoundation\Response
	 */
	public function show($id)
	{
		$user = $this->getDoctrine()
			->getRepository(User::class)
			->find($id);

		return $this->render('user/show.html.twig', [
			'user' => $user
		]);
	}
}
