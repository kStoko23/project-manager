<?php
require_once 'db_config.php';

$projectId = $_GET['id'];

if ($projectId) {
    $stmt = $pdo->prepare("SELECT * FROM projects WHERE id = :projectId");
    $stmt->bindParam(':projectId', $projectId, PDO::PARAM_INT);
    $stmt->execute();

    $projectDetails = $stmt->fetch(PDO::FETCH_ASSOC);
    
    echo json_encode($projectDetails);
} else {
    echo json_encode([]);
}
?>