<?php
require('database/config.php');
session_start();

$error = "";

try {
    $getnames = "SELECT Username FROM DOFG_Users";

    $statement = $conn->prepare($getnames);
    $statement->execute();

    $namesResult = $statement->fetchAll();

    $names = $namesResult[0];
} catch(PDOException $e) {
    $_SESSION['SIGNUP_ERROR'] = $e->getMessage();
}


if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $username = htmlspecialchars(strtolower(str_replace(" ", "", $_POST['Username'])));
    $displayname = htmlspecialchars($_POST["Displayname"]);

    // Username valideren
    if ($username != "") {
        if (!in_array($username, $names)) {
            if (strlen($username) > 50) { $error = "Something went wrong."; $_SESSION['SIGNUP_ERROR'] = "Username is too long."; header('Location: signup.php'); }
        } else { $error = "Something went wrong."; $_SESSION['SIGNUP_ERROR'] = "This username is already taken."; header('Location: signup.php'); }
    } else { $error = "Something went wrong."; $_SESSION['SIGNUP_ERROR'] = "Please enter a username."; header('Location: signup.php'); }

    // Displayname valideren
    if ($displayname != "") {
        if (strlen($displayname) > 30) { $error = "Something went wrong."; $_SESSION['SIGNUP_ERROR'] = "Displayname is too long."; header('Location: signup.php'); }
    } else { $error = "Something went wrong."; $_SESSION['SIGNUP_ERROR'] = "Please enter a display name."; header('Location: signup.php'); }

    // Password hashen
    $hashedPassword = password_hash($_POST['Password'], PASSWORD_DEFAULT);

    // Profile Picture
    $pfp = $_FILES['Pfp'];
    $pfp_name = $pfp['name'];

    if ($error == "") {
        try {
            $query = "INSERT INTO DOFG_Users (Username, Displayname, Password, ProfilePicture) VALUES (:username, :displayname, :password, :pfp)";

            $stmt = $conn->prepare($query);
            $stmt->execute([
                'username' => $username,
                'displayname' => $displayname,
                'password' => $hashedPassword,
                'pfp' => $username.".jpg"
            ]);

            move_uploaded_file($pfp['tmp_name'], "images/pfp/".$username.".jpg");

            $_SESSION['Username'] = $username;
            unset($_SESSION['SIGNUP_ERROR']);
            header('Location: index.php');
        } catch (PDOException $e) {
            $_SESSION['SIGNUP_ERROR'] = $e->getMessage();
            header('Location: index.php');
        }
    } else {
        header('Location: index.php');
    }
} else {
    $error = "Something went wrong.";
    $_SESSION['SIGNUP_ERROR'] = "Wrong request method.";
    header('Location: index.php');
}