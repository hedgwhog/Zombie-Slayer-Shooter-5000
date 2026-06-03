<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

$db = './database/DOFG.sqlite';

try {
    $conn = new PDO("sqlite:$db");
//    echo 'Connected to the SQLite database successfully!';
}   catch (PDOException $e) {
    echo $e->getMessage();
}