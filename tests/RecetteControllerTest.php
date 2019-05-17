<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2019-05-17
 * Time: 10:55
 */

namespace App\Tests;


use Symfony\Bundle\FrameworkBundle\Client;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\BrowserKit\Cookie;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;

class RecetteControllerTest extends WebTestCase
{
	/**
	 * @var Client
	 */
	private $client = null;

	public function setUp()
	{
		$this->client = static::createClient();
	}

	public function testHomePage(){

		$crawler = $this->client->request('GET', "/");

		$this->assertSame(200,
			$this->client->getResponse()->getStatusCode(), "Page d'accueil OK"	);

		$this->assertContains("Bienvenue",
			$crawler->filter('h1')->text(),
			"Message d'accueil OK");
	}

	public function testNewRecette(){
		$this->logIn();

		$crawler = $this->client->request('GET', '/fr/recette/new');

		$this->assertTrue($this->client->getResponse()->isSuccessful());
	}

	private function logIn()
	{
		$session = $this->client->getContainer()->get('session');

		// Nom du firewall ( voir config/packages/security.yaml
		$firewall = 'main';

		$token = new UsernamePasswordToken('vince', null, $firewall, array('ROLE_USER'));
		$session->set('_security_'.$firewall, serialize($token));
		$session->save();

		$cookie = new Cookie($session->getName(), $session->getId());
		$this->client->getCookieJar()->set($cookie);
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
