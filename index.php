<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header('Location: frontend/html/login.php');
    exit();
}
?>
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zarządzanie Projektami</title>
    <link rel="stylesheet" href="frontend/css/dashboard.css">
</head>
<body>

    <div id="all-projects">
        
    </div>

    <div id="my-projects">
        
    </div>

    <script src="frontend/js/dashboard.js"></script>
</body>
</html>
