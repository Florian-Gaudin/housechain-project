<?php

namespace App\Repository;

use App\Entity\IncomeFrequency;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<IncomeFrequency>
 *
 * @method IncomeFrequency|null find($id, $lockMode = null, $lockVersion = null)
 * @method IncomeFrequency|null findOneBy(array $criteria, array $orderBy = null)
 * @method IncomeFrequency[]    findAll()
 * @method IncomeFrequency[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class IncomeFrequencyRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, IncomeFrequency::class);
    }

//    /**
//     * @return IncomeFrequency[] Returns an array of IncomeFrequency objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('i')
//            ->andWhere('i.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('i.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?IncomeFrequency
//    {
//        return $this->createQueryBuilder('i')
//            ->andWhere('i.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
