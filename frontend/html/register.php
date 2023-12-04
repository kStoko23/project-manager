<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rejestracja</title>
    <link rel="stylesheet" href="../../frontend/css/login.css">
</head>
<body>
    <form action="../../backend/php/register.php" method="post" id="register_form">
        <label for="username">Nazwa użytkownika:</label>
        <input type="text" name="username" id="username">
        <br>
        <label for="email">Adres e-mail:</label>
        <input type="email" name="email" id="email">
        <br>
        <label for="password">Hasło:</label>
        <input type="password" name="password" id="password">
        <br>
        <label for="repeat_password">Powtórz hasło:</label>
        <input type="password" name="repeat_password" id="repeat_password">
        <br>
        <input type="submit" value="Zarejestruj">
</body>
</html>