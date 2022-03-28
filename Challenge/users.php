<?php
require_once "db_connect.php";

$email = $_GET["email"];
$sql = "SELECT * FROM users WHERE email = '$email'";
$result = mysqli_query($connect, $sql);


if ($result->num_rows != 0) {
    echo "E-Mail already exists!";
}
?>