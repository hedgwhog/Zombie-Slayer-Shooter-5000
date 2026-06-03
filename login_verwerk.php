<?php
require('database/config.php');
session_start();

$error = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = htmlspecialchars(strtolower(str_replace(" ", "", $_POST['Username'])));
    $password = htmlspecialchars($_POST['Password']);

    try {
        $query = "SELECT Password FROM DOFG_Users WHERE Username = :username";

        $stmt = $conn->prepare($query);
        $stmt->execute(['username' => $username]);

        $result = $stmt->fetch();

        if ($result) {
            $HashedPassword = $result['Password'];

            if(password_verify($password, $HashedPassword)) {
                $_SESSION['Username'] = $username;
                unset($_SESSION['LOGIN_ERROR']);
                header('Location: index.php');
            } else {
                $_SESSION['LOGIN_ERROR'] = "Het wachtwoord is onjuist!";
                header('Location: index.php');
            }
        } else {
            $_SESSION['LOGIN_ERROR'] = "Username does not exist";
            header('Location: index.php');
        }
    } catch(PDOException $e) {
        $_SESSION['LOGIN_ERROR'] = $e->getMessage();
        header('Location: index.php');
    }

} else {
    $_SESSION['ERROR'] = "Wrong request method.";
    header('Location: index.php');
}