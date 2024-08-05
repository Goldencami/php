<?php
$host = 'hnc353.encs.concordia.ca';
$username = 'hnc353_1';
$password = 'tess1969';
$database = 'hnc353_1';

try {
    //MySQL connection
    $conn = new PDO("mysql:host=$server;dbname=$database;", $username, $password);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

echo "MySQL connected successfully.";
?>