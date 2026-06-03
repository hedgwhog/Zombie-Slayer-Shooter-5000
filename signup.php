<?php
session_start();
if (isset($_SESSION['SIGNUP_ERROR'])) { $errors = $_SESSION['SIGNUP_ERROR']; }
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sign up!</title>
</head>
<body>
<h1>Sign up!</h1>
<form action="signup_verwerk.php" method="post" enctype="multipart/form-data">
    <div>
        <label for="username">Username: </label>
        <input type="text" id="username" name="Username" maxlength="50" autofocus required>
    </div><br>
    <div>
        <label for="displayname">Displayname: </label>
        <input type="text" id="displayname" name="Displayname" maxlength="30" required>
    </div><br>
    <div>
        <label for="password">Password: </label>
        <input type="password" id="password" name="Password" minlength="8" required>
    </div><br>
    <div>
        <label for="pfp">Profile Picture: </label>
        <input type="file" id="pfp" name="Pfp" required>
    </div><br>
    <p><?= $errors ?? '' ?></p>
    <input type="submit" value="Add a account">
</form>
</body>
</html>
