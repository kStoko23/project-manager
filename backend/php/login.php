<?php
// Start the session
session_start();
require_once 'db_config.php'; 

// Retrieve username and password from POST request
$username = $_POST['username'];
$password = $_POST['password'];

try {
    // Prepare a statement to select a user from the database where the username matches
    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username");
    // Bind the username parameter to the prepared statement
    $stmt->bindParam(':username', $username, PDO::PARAM_STR);
    // Execute the statement
    $stmt->execute();

    // Check if any user was found
    if ($stmt->rowCount() > 0) {
        // Fetch the user data
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        // Check if the provided password matches the one in the database
        if ($user['password'] === $password) {
            // Set the user's ID in the session
            $_SESSION['user_id'] = $user['id'];
            // Redirect to the main page
            header('Location: ../../index.php');
            exit();
        } else {
            // Redirect to login page with an invalid password error
            header('Location: ../../frontend/html/login.php?error=invalid_password');
            exit();
        }

    } else {
        // Redirect to login page with a user not found error
        header('Location: ../../frontend/html/login.php?error=user_not_found');
        exit();
    }
} catch (PDOException $e) {
    // If connection fails, display the error message
    die("Connection error: " . $e->getMessage());
}
?>
