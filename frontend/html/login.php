<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logowanie</title>
    <link rel="stylesheet" href="../../frontend/css/login.css">
</head>
<body>
    <form action="../../backend/php/login.php" method="post">
        Nazwa użytkownika: <input type="text" name="username"><br>
        Hasło: <input type="password" name="password"><br>
        <input type="submit" value="Zaloguj">
        <a href="register.php">Zarejestruj się</a>
    </form>
</body>
</html>
