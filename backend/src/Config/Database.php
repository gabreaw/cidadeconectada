<?php

namespace Src\Config;

use PDO;
use PDOException;
use Dotenv\Dotenv;

class Database
{
    private $host;
    private $db_name;
    private $username;
    private $password;
    private $port;
    public $conn;

    public function __construct()
    {
        $appEnv = getenv('APP_ENV') ?: 'local';

        $envFilename = '.env.' . $appEnv;
        if ($appEnv === 'local') {
            $envFilename = '.env.local';
        } elseif ($appEnv === 'prod') {
            $envFilename = '.env.prod';
        }
        $dotenv = Dotenv::createImmutable(__DIR__ . '/../../', $envFilename);
        $dotenv->load();
        $this->host = $_ENV['DB_HOST'];
        $this->db_name = $_ENV['DB_NAME'];
        $this->username = $_ENV['DB_USER'];
        $this->password = $_ENV['DB_PASS'];
        $this->port = $_ENV['DB_PORT'];
    }

    public function getConnection(): ?PDO
    {
        if ($this->conn === null) {
            try {
                $dsn = "pgsql:host={$this->host};port={$this->port};dbname={$this->db_name}";
                $this->conn = new PDO($dsn, $this->username, $this->password, [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
                ]);
            } catch (PDOException $exception) {
                echo "Erro de conexão: " . $exception->getMessage();
                $this->conn = null;
            }
        }

        return $this->conn;
    }
}
