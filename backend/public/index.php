<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use Tuupola\Middleware\CorsMiddleware;

require __DIR__ . '/../vendor/autoload.php'; 

$app = AppFactory::create();

$cors = new CorsMiddleware([
    "origin" => ["*"],
    "methods" => ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    "headers.allow" => ["Authorization", "Content-Type", "Accept", "Origin"],
    "headers.expose" => [],
    "credentials" => true,
    "cache" => 86400
]);

$app->add($cors);

// Incluir rotas
(require __DIR__ . '/../src/routes.php')($app);

$app->run();
