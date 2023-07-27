<?php

namespace App\Repository;

use App\Entity\SecurityTokenWallet;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<SecurityTokenWallet>
 *
 * @method SecurityTokenWallet|null find($id, $lockMode = null, $lockVersion = null)
 * @method SecurityTokenWallet|null findOneBy(array $criteria, array $orderBy = null)
 * @method SecurityTokenWallet[]    findAll()
 * @method SecurityTokenWallet[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SecurityTokenWalletRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SecurityTokenWallet::class);
    }

//    /**
//     * @return SecurityTokenWallet[] Returns an array of SecurityTokenWallet objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('s.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?SecurityTokenWallet
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
