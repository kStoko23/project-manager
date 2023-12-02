<?php
session_start();
require_once 'db_config.php';

$userId = $_SESSION['user_id'];

// All projects query
$stmtAllProjects = $pdo->query("SELECT * FROM projects");
$allProjects = $stmtAllProjects->fetchAll(PDO::FETCH_ASSOC);

// User's projects query
$stmtMyProjects = $pdo->prepare("SELECT * FROM projects WHERE project_manager_id = :userId");
$stmtMyProjects->execute(['userId' => $userId]);
$myProjects = $stmtMyProjects->fetchAll(PDO::FETCH_ASSOC);

echo json_encode([
    'allProjects' => $allProjects,
    'myProjects' => $myProjects])
?>
