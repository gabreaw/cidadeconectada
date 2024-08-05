<?php

namespace App\Model;

class User
{
    private $db;

    public function __construct()
    {
        $this->db = new \PDO('mysql:host=localhost;dbname=seu_banco_de_dados', 'usuario', 'senha');
    }

    public function createUser($data)
    {
        $sql = "INSERT INTO users (nome, email, cpf, senha) VALUES (:nome, :email, :cpf, :senha)";
        $stmt = $this->db->prepare($sql);
        
        $stmt->bindParam(':nome', $data['nome']);
        $stmt->bindParam(':email', $data['email']);
        $stmt->bindParam(':cpf', $data['cpf']);
        $stmt->bindParam(':senha', password_hash($data['senha'], PASSWORD_BCRYPT));
        
        if ($stmt->execute()) {
            return ["status" => "success", "message" => "User created successfully."];
        } else {
            return ["status" => "error", "message" => "Failed to create user."];
        }
    }
}
