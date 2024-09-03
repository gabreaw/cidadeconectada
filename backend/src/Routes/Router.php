<?php

namespace Src\Routes;

use Slim\App;
use Src\Controllers\UserController;

class Router
{
    private $app;

    public function __construct(App $app)
    {
        $this->app = $app;
        $this->setupRoutes();
    }

    private function setupRoutes()
    {
        // Grupo de rotas para API
        $this->app->group('/api', function ($group) {
            // Autenticação
            $group->post('/login', UserController::class . ':login');

            // Exemplar
            //   $group->group('/posts', function ($group) {
            //     $group->post('/create', PostController::class . ':savePost');
            //     $group->get('', PostController::class . ':getAllPosts');
            //     $group->get('/draft', PostController::class . ':getDraftPosts');
            //     $group->get('/{postId}', PostController::class . ':getPost');
            //     $group->put('/update/{postId}', PostController::class . ':editPost');
            //     $group->delete('/delete/{postId}', PostController::class . ':deletePost');
            //     $group->get('/tag/{tagName}', PostController::class . ':getPostsByTag');
            //   });
        })->add(function ($request, $handler) {
            $response = $handler->handle($request);
            return $response->withHeader('Content-Type', 'application/json');
        });
    }

    public function run()
    {
        $this->app->run();
    }
}
