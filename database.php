<?php
$server = 'hnc353.encs.concordia.ca';
$username = 'hnc353_1';
$password = 'tess1969';
$database = 'hnc353_1';

try {
    //MySQL connection
    $conn = new PDO("mysql:host=$server;dbname=$database;", $username, $password);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

// $mysqli = new mysqli($server, $username, $password, $database);

// if ($mysqli->connect_error) {
//     die('Connect Error (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);
// }

?>