<?php
// update_project.php

session_start();

// Sprawdzanie, czy użytkownik jest zalogowany
if (!isset($_SESSION['user_id'])) {
    header('HTTP/1.1 401 Unauthorized');
    exit("Dostęp zabroniony: Nie jesteś zalogowany.");
}

require_once 'db_config.php'; // Plik z konfiguracją połączenia z bazą danych

// Pobieranie danych przesłanych metodą POST
$projectId = $_POST['project_id'];
$projectName = $_POST['project_name'];
$startDate = $_POST['start_date'];
$endDate = $_POST['end_date'];
$status = $_POST['status'];
$description = $_POST['description'];

// Przygotowanie zapytania do aktualizacji danych projektu
$query = "UPDATE projects SET project_name = :projectName, start_date = :startDate, end_date = :endDate, status = :status, description = :description WHERE id = :projectId";

$stmt = $pdo->prepare($query);
$stmt->bindParam(':projectName', $projectName);
$stmt->bindParam(':startDate', $startDate);
$stmt->bindParam(':endDate', $endDate);
$stmt->bindParam(':status', $status);
$stmt->bindParam(':description', $description);
$stmt->bindParam(':projectId', $projectId);

// Wykonanie zapytania
if ($stmt->execute()) {
    echo json_encode(["message" => "Projekt został zaktualizowany."]);
} else {
    echo json_encode(["error" => "Wystąpił błąd podczas aktualizacji projektu."]);
}

?>
