<?php

namespace App\Repository;

use App\Entity\Recette;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query\Expr;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Recette|null find($id, $lockMode = null, $lockVersion = null)
 * @method Recette|null findOneBy(array $criteria, array $orderBy = null)
 * @method Recette[]    findAll()
 * @method Recette[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RecetteRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Recette::class);
    }

    /**
     * @return Recette[] Returns an array of Recette objects
     */
    public function findByDuration($value)
    {
		$qb = $this->createQueryBuilder('r');

		// SELECT toutes les colonnes
		$query  = $qb->select('u')
				->innerJoin('App\Entity\User', 'u', Expr\Join::WITH,
					'r.author = u')
				// Instruction WHERE
/*				->where(
					$qb->expr()
						// gt = Greater Than
						->gt('r.prepDuration', $value) // = durée recette > $value
				)*/
				->getQuery();

		echo $query->getSQL();

		return $query->getResult();
    }

    /*
    public function findOneBySomeField($value): ?Recette
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
