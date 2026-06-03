<?php
header('Content-type: application/json');
require('./database/config.php');

$username = $_GET['username'];

$request_raw = file_get_contents('php://input');
$json_object = json_decode($request_raw);

$newBalance = $json_object->balance;

try {
    $query = "UPDATE DOFG_Users SET Balance = :balance WHERE Username = :username";

    $stmt = $conn->prepare($query);
    $stmt->execute([
        "balance" => $newBalance,
        "username" => $username
    ]);
} catch(PDOException $e) {
    $error = $e->getMessage();
}