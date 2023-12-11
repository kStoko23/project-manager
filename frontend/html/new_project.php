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
    <title>Moje projekty</title>
    <link rel="stylesheet" href="../../frontend/css/dashboard.css">
</head>
<body>
    <div id="menu">
        <div id="menu-left">
            <div id="logo">
                <img src="../../frontend/assets/icons/icon.png" alt="logo">
            </div>
            <div id="menu-links">
                <a href="../../index.php">Strona główna</a>
                <a href="../../frontend/html/projects.php">Wszystkie projekty</a>
                <a href="../../frontend/html/my_projects.php">Moje projekty</a>
            </div>
        </div>
        <div id="menu-right">
            <div id="user">
                <div id="user-name">
                    <?php echo $_SESSION['username']; ?>
                </div>
            </div>
            <div id="menu-links">
                <a href="../../backend/php/logout.php">Wyloguj</a>
            </div>
        </div>
    </div>
    <div id="new-project-form">
        <form id="create_project_form">
            <input type="text" id="new_project_name" name="project_name" placeholder="Nazwa projektu"><br>
            <input type="date" id="new_start_date" name="start_date" placeholder="Data rozpoczęcia"><br>
            <input type="date" id="new_end_date" name="end_date" placeholder="Data zakończenia"><br>
            <select id="new_status" name="status">
                <option value="Ongoing">Trwający</option>
                <option value="Suspended">Zawieszony</option>
                <option value="Completed">Zrobiony</option>
            </select><br>
            <textarea id="new_description" name="description" placeholder="Opis projektu"></textarea><br>
            <button type="button" onclick="createProject()">Utwórz projekt</button>
        </form>
    </div>
    <script src="../../frontend/js/new_project.js"></script>   
</body>
</html>
