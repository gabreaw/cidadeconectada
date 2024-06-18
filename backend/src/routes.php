<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App;

return function (App $app) {
    $app->get('/', function (Request $request, Response $response, $args) {
        $response->getBody()->write("Hello, world!");
        return $response;
    });
    $app->post('/api/register', function (Request $request, Response $response, $args) {
        return $response;
    });
};
