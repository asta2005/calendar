<?php
require 'database.php';

$data = json_decode(file_get_contents("php://input"), true);
$title = $data["title"];
$start = $data["start"];

$sql = "INSERT INTO events (title, start) VALUES ('$title', '$start')";
$conn->query($sql);

$conn->close();
?>
