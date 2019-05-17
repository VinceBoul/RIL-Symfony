<?php

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Client;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\BrowserKit\Cookie;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;

class RecetteControllerTestOld extends WebTestCase
{
	/**
	 * @var Client
	 */
	private $client = null;

	public function setUp()
	{
		$this->client = static::createClient();
	}

	public function testHomePage()
    {
        $crawler = $this->client->request('GET', '/');

        $this->assertSame(200, $this->client->getResponse()->getStatusCode());
        $this->assertContains('Bienvenue', $crawler->filter('h1')->text());
    }

    public function testNewRecette(){
		$this->logIn();

		$crawler = $this->client->request('GET', '/fr/recette/new');

		$this->assertTrue($this->client->getResponse()->isSuccessful());
	}

	private function logIn()
	{
		$session = $this->client->getContainer()->get('session');

		// the firewall context (defaults to the firewall name)
		$firewall = 'main';

		$token = new UsernamePasswordToken('vince', null, $firewall, array('ROLE_USER'));
		$session->set('_security_'.$firewall, serialize($token));
		$session->save();

		$cookie = new Cookie($session->getName(), $session->getId());
		$this->client->getCookieJar()->set($cookie);
	}

/*	public function testRecetteList()
	{
		$client = static::createClient();
		$client->request('GET', '/recette');
		dd($client->getResponse());
		$this->assertSame(200, $client->getResponse()->getStatusCode());
		//$this->assertContains('Toutes les recettes', $crawler->filter('h1')->text());
	}*/
}
