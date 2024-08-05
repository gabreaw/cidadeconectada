<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use App\Controller\UserController;
use Slim\App;

return function (App $app) {
    $app->get('/', function (Request $request, Response $response, $args) {
        $response->getBody()->write("Hello, world!");
        return $response;
    });

    $app->post('/api/register', UserController::class . ':register');
};
