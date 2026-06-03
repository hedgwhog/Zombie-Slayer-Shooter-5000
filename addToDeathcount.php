<?php
require('database/config.php');

$username = $_GET['username'];

try {
    $query = "UPDATE DOFG_Users SET Deathcount = Deathcount + 1 WHERE Username = :username";

    $stmt = $conn->prepare($query);
    $stmt->execute(['username' => $username]);
} catch (PDOException $e) {
    $error = $e->getMessage();
}