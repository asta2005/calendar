<?php
$host = "mariadb";  // Zorg ervoor dat dit overeenkomt met de naam van je MariaDB container
$dbname = "omarkahouach";
$username = "omar";
$password = "khaled";

$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Verbinding mislukt: " . $conn->connect_error);
}
?>
