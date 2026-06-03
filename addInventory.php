<?php
header('Content-type: application/json');
require('./database/config.php');

$username = $_GET['username'];

$request_raw = file_get_contents('php://input');
$json_object = json_decode($request_raw);

$inventory =  implode(';', $json_object);

try {
    $query = "UPDATE DOFG_Users SET Inventory = :inventory WHERE Username = :username";

    $stmt = $conn->prepare($query);
    $stmt->execute([
        "inventory" => $inventory,
        "username" => $username
    ]);
} catch (PDOException $e) {
    $error = $e->getMessage();
}