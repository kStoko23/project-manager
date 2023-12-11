<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header('HTTP/1.1 401 Unauthorized');
    exit("Dostęp zabroniony: Nie jesteś zalogowany.");
}

require_once 'db_config.php';

$projectId = $_GET['id'];

$query = "DELETE FROM projects WHERE id = :projectId";
$stmt = $pdo->prepare($query);
$stmt->bindParam(':projectId', $projectId);

header('Content-Type: application/json');

if ($stmt->execute()) {
    echo json_encode(["message" => "Projekt został usunięty."]);
} else {
    echo json_encode(["error" => "Wystąpił błąd podczas usuwania projektu."]);
}
?>
