<?php
require_once 'db_config.php';

$projectId = $_GET['project_id'];

if ($projectId) {
    $stmt = $pdo->prepare("SELECT * FROM tasks WHERE project_id = :projectId ORDER BY due_date");
    $stmt->bindParam(':projectId', $projectId, PDO::PARAM_INT);
    $stmt->execute();

    $tasks = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($tasks);
} else {
    echo json_encode([]);
}
?>
