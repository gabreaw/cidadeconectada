<?php

namespace App\Controller;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use App\Model\User;

class UserController
{
    public function register(Request $request, Response $response, $args)
    {
        $data = $request->getParsedBody();
        
        $userModel = new User();
        $result = $userModel->createUser($data);
        
        $response->getBody()->write(json_encode($result));
        return $response->withHeader('Content-Type', 'application/json');
    }
}
