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
    <div id="menu">
        <div id="menu-left">
            <div id="logo">
                <img src="frontend/assets/icons/icon.png" alt="logo">
            </div>
            <div id="menu-links">
                <a href="index.php">Strona główna</a>
                <a href="frontend/html/projects.php">Wszystkie projekty</a>
                <a href="frontend/html/my_projects.php">Moje projekty</a>
            </div>
        </div>
        <div id="menu-right">
            <div id="user">
                <div id="user-name">
                    <?php echo $_SESSION['username']; ?>
                </div>
            </div>
            <div id="menu-links">
                <a href="backend/php/logout.php">Wyloguj</a>
            </div>
        </div>
    </div>
    <div id="all-projects">
        
    </div>

    <div id="my-projects">
        
    </div>
    <div id="new-project">
        <button id="new-project-button" onclick="createProject()">Nowy projekt</button>
    </div>
    <script>
        window.userRoleId = <?php echo json_encode($_SESSION['role_id']); ?>;
    </script>
    <script src="frontend/js/dashboard.js"></script>
</body>
</html>
