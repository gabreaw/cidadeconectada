<?php

namespace Src\Controllers;

use Firebase\JWT\JWT;
use Src\Models\User;
use Psr\Http\Message\ResponseInterface as Response;
use Src\Config\Database;
use Psr\Http\Message\ServerRequestInterface as Request;

/**
 * Class AuthController
 * @package Src\Controllers
 */
class UserController
{
    /**
     * @var User
     */
    private $userModel;

    /**
     * @param User $userModel
     */
    public function __construct()
    {
        $database = (new Database())->getConnection();
        $this->userModel = new User($database);
    }

    /**
     * Handle user login
     * @param Request $request
     * @param Response $response
     * @param array $args
     * @return Response
     */
    public function login(Request $request, Response $response, array $args): Response
    {
        $data = json_decode($request->getBody()->getContents(), true);
        $username = $data['username'] ?? '';
        $password = $data['password'] ?? '';

        $user = $this->userModel;
        $user->username = $username;

        $userData = $user->login();

        if ($userData && password_verify($password, $userData['password'])) {
            $key = $_ENV['JWT_SECRET'];
            $payload = [
                "user_id" => $userData['id'],
                "username" => $username,
                "is_admin" => $userData['is_admin']
            ];

            $jwt = JWT::encode($payload, $key, 'HS256');
            return $this->jsonResponse($response, ['token' => $jwt], 200);
        }

        return $this->jsonResponse($response, ['message' => 'Login falhou. Usuário ou senha incorretos.'], 401);
    }

    /**
     * @param Response $response
     * @param array $data
     * @param int $status
     * @return Response
     */
    private function jsonResponse(Response $response, array $data, int $status): Response
    {
        $response->getBody()->write(json_encode($data));
        return $response->withHeader('Content-Type', 'application/json')->withStatus($status);
    }
}
