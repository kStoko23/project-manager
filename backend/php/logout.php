<?php
// Start the session
session_start();
if (isset($_SESSION["username"])) {
    // Unset all of the session variables
    $_SESSION = array();
    // Destroy the session
    session_destroy();
    // Redirect to login page
    header('Location: ../../frontend/html/login.php');
    exit();
} else {
    // Redirect to login page
    header('Location: ../../frontend/html/login.php');
    exit();
}
?>