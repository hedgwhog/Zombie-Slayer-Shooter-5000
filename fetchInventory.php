<?php
header('Content-type: application/json');
require('./database/config.php');

$username = $_GET['username'];

try {
    $query = "SELECT Inventory FROM DOFG_Users WHERE Username = :username";

    $stmt = $conn->prepare($query);
    $stmt->execute(['username' => $username]);

    $result = $stmt->fetch();
} catch (PDOException $e) {
    $error = $e->getMessage();
}
?><?= json_encode($result) ?>