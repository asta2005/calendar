<?php
require 'database.php';

$data = json_decode(file_get_contents("php://input"), true);
$id = $data["id"];

$sql = "DELETE FROM events WHERE id=$id";
$conn->query($sql);

$conn->close();
?>
