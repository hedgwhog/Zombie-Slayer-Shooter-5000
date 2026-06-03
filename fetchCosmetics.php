<?php
header('Content-type: application/json');
require('./database/config.php');

$name = $_GET['name'];

try {
    $query = "SELECT * FROM DOFG_Cosmetics WHERE Name = :name";

    $stmt = $conn->prepare($query);
    $stmt->execute(['name' => $name]);

    $result = $stmt->fetch();
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?><?= json_encode($result) ?>