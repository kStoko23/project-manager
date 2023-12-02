<?php
require_once 'db_config.php'; 

$username = $_POST['username'];
$password = $_POST['password'];
$repeat_password = $_POST['repeat_password'];
$email = $_POST['email'];
$role_id = 2;

if ($password !== $repeat_password) {
    header('Location: ../../frontend/html/register.php?error=password_mismatch');
    exit();
}

try {


    $stmt = $pdo->prepare("INSERT INTO 
        users (username, password, email, role_id) 
        VALUES 
        (:username, :password, :email, :role_id)");
    $stmt->bindParam(':username', $username, PDO::PARAM_STR);
    $stmt->bindParam(':password', $password, PDO::PARAM_STR);
    $stmt->bindParam(':email', $email, PDO::PARAM_STR);
    $stmt->bindParam(':role_id', $role_id, PDO::PARAM_INT);

    $stmt->execute();

    header('Location: ../../frontend/html/login.php?registration=success');
    exit();
} catch (PDOException $e) {
    die("Błąd rejestracji: " . $e->getMessage());
}
?>