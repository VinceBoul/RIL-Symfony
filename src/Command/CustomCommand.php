<?php

namespace App\Command;

use App\Entity\Recette;
use App\Repository\RecetteRepository;
use Psr\Container\ContainerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class CustomCommand extends Command
{
	private $container;
	// the name of the command (the part after "bin/console")
	protected static $defaultName = 'ril:custom';

	public function __construct(ContainerInterface $container)
	{
		parent::__construct();
		$this->container = $container;
	}

	protected function configure(){
		$this
			// the short description shown while running "php bin/console list"
			->setDescription('Fait quelque chose - mais on sait pas quoi encore.')

			// the "--help" option
			->setHelp('Cette command fera quelque chose...')
			->addArgument('minDuration', InputArgument::REQUIRED, 'Durée min de la recette')
		;
	}

	protected function execute(InputInterface $input, OutputInterface $output)
	{
		$doctrine = $this->container
			->get('doctrine');

		/**
		 * @var RecetteRepository $repo
		 */
		$repo = $doctrine
			->getRepository(Recette::class);
		$result = $repo
			->findByDuration($input->getArgument('minDuration'));

		foreach ($result as $r){
			echo $r;
		}

	}
}
