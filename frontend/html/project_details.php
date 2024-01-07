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
    <title>Projekt</title>
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
    <div id="deleteConfirmationModal" class="modal">
        <div class="modal-content">
            <p>Czy na pewno chcesz usunąć ten projekt?</p>
            <button onclick="confirmDelete()">Usuń</button>
            <button onclick="closeModal()">Anuluj</button>
        </div>
    </div>
    <div id="project_container">

    </div>
    <div id="task_container">

    </div>
    <div id="edit_project_form" style="display: none;">
        <form id="editForm">
            <input type="text" id="edit_project_name" name="project_name"><br>
            <input type="date" id="edit_start_date" name="start_date"><br>
            <input type="date" id="edit_end_date" name="end_date"><br>
            <select id="edit_status" name="status">
                <option value="Ongoing">Trwający</option>
                <option value="Suspended">Zawieszony</option>
                <option value="Completed">Zrobiony</option>
            </select><br>
            <textarea id="edit_description" name="description"></textarea><br>
            <button type="button" onclick="submitEditForm()">Zapisz zmiany</button>
        </form>
    </div>
    <script>
        window.userId = <?php echo json_encode($_SESSION['user_id']); ?>;
    </script>
    <script src="../../frontend/js/project_details.js"></script>   
    <script src="../../frontend/js/tasks.js"></script>
</body>
</html>
