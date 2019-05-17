<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2019-05-17
 * Time: 10:55
 */

namespace App\Tests;


use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class RecetteControllerTest extends WebTestCase
{

	public function testHomePage(){

		$client = static::createClient();

		$crawler = $client->request('GET', "/");

		$this->assertSame(200,
			$client->getResponse()->getStatusCode(), "Page d'accueil OK"	);

		$this->assertContains("Bienvenue",
			$crawler->filter('h1')->text(),
			"Message d'accueil OK");
	}

	public function testCreateRecette(){

		$client = static::createClient();

		$localLanguage = $client->getKernel()->getContainer()
			->getParameter('locale');
		echo $localLanguage;

		$crawler = $client->request('GET', "/fr/recette/new");

		$this->assertSame(200,
			$client->getResponse()->getStatusCode(),
			"Test d'affichage de la page"	);
/*
		$form = $crawler->selectButton('submit')->form();

		// set some values
		$form['name'] = 'Crêpes bretonnes';

// submit the form
		$crawler = $client->submit($form);*/
	}


}
