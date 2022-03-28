<?php
$hostname     = "127.0.0.1";
$username     = "root";
$password     = "";
$databasename = "ajaxtest";
// Create connection
$connect = new mysqli($hostname, $username, $password,$databasename);
// Check connection
if ($connect->connect_error) {
    die("Unable to Connect database: " . $connect->connect_error);
} else {
    // echo "Success";
}
?>