<?php

namespace Src\Models;

use PDOStatement;
use PDO;

class User
{
    private PDO $conn;
    private string $table_name = "users";

    public ?int $id = null;
    public ?string $username = null;
    public ?string $password = null;
    public ?bool $is_admin = null;

    public function __construct(PDO $db)
    {
        $this->conn = $db;
    }

    public function login(): ?array
    {
        $query = "SELECT id, username, password, is_admin FROM {$this->table_name} WHERE username = :username";
        $stmt = $this->prepareAndExecute($query, [':username' => $this->username]);

        if ($stmt->rowCount() > 0) {
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }

        return null;
    }

    private function prepareAndExecute(string $query, array $params): PDOStatement
    {
        try {
            $stmt = $this->conn->prepare($query);
            foreach ($params as $key => &$val) {
                $stmt->bindParam($key, $val);
            }
            $stmt->execute();
            return $stmt;
        } catch (\PDOException $e) {
            throw new \Exception("Database error occurred: " . $e->getMessage());
        }
    }
}
