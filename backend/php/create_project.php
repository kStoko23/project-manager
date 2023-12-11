<?php
// create_project.php

session_start();

if (!isset($_SESSION['user_id'])) {
    header('HTTP/1.1 401 Unauthorized');
    exit("Dostęp zabroniony: Nie jesteś zalogowany.");
}

require_once 'db_config.php';

$projectName = $_POST['project_name'];
$startDate = $_POST['start_date'];
$endDate = $_POST['end_date'];
$status = $_POST['status'];
$description = $_POST['description'];
$managerId = $_SESSION['user_id'];

$query = "INSERT INTO projects (project_name, start_date, end_date, status, description, project_manager_id) VALUES (:projectName, :startDate, :endDate, :status, :description, :managerId)";

$stmt = $pdo->prepare($query);
$stmt->bindParam(':projectName', $projectName);
$stmt->bindParam(':startDate', $startDate);
$stmt->bindParam(':endDate', $endDate);
$stmt->bindParam(':status', $status);
$stmt->bindParam(':description', $description);
$stmt->bindParam(':managerId', $managerId);

header('Content-Type: application/json');

if ($stmt->execute()) {
    echo json_encode(["success" => "Projekt został utworzony."]);
} else {
    echo json_encode(["error" => "Wystąpił błąd podczas tworzenia projektu."]);
}
?>
