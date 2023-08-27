<?php

namespace App\Controller;

use App\Entity\News;
use App\Repository\NewsRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Nelmio\ApiDocBundle\Annotation\Model;
use OpenApi\Attributes as OA;

class NewsController extends AbstractController
{

    #[OA\Response(
        response: 200,
        description: "Retourne la liste des actualités",
        content: new OA\JsonContent(
            type: "array",
            items: new OA\Items(ref: new Model(type: News::class, groups: ["getNews"]))
        )
    )]
    #[OA\Tag(name: 'News')]
    #[Route('/api/news', name: 'news', methods: ['GET'])]
    public function getNewsList(NewsRepository $newsRepo): JsonResponse
{
    $allNews = $newsRepo->findAll();
    foreach ($allNews as $news) {
        $news->setImage("http://localhost:8000/upload/images/news/" . $news->getImage());
    }

    return $this->json($allNews, 200, [], ['groups' => ['getNews']]);
}
}