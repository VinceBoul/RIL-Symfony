<?php

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class RecetteControllerTest extends WebTestCase
{
    public function testHomePage()
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/');

        $this->assertSame(200, $client->getResponse()->getStatusCode());
        $this->assertContains('Bienvenue', $crawler->filter('h1')->text());
    }

	public function testRecetteList()
	{
		$client = static::createClient();
		$client->request('GET', '/recette');
		dd($client->getResponse());
		$this->assertSame(200, $client->getResponse()->getStatusCode());
		//$this->assertContains('Toutes les recettes', $crawler->filter('h1')->text());
	}
}
