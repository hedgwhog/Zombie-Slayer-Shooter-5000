<?php
session_start();
if (isset($_SESSION['LOGIN_ERROR'])) { $errors = $_SESSION['LOGIN_ERROR']; }
if (isset($_SESSION['SIGNUP_ERROR'])) { $errors = $_SESSION['SIGNUP_ERROR']; }
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
</head>
<body>
<h1>Log in!</h1>
    <form action="login_verwerk.php" method="post">
        <div>
            <label for="username">Username:</label><br>
            <input type="text" maxlength="50" id="username" name="Username" autofocus required>
        </div><br>
        <div>
            <label for="password">Password:</label><br>
            <input type="password" minlength="8" id="password" name="Password" required>
        </div>
        <p><?= $errors ?? "" ?></p>
        <input type="submit" value="Submit">
    </form>
</body>
</html>
