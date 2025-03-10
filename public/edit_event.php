<?php
require 'database.php';

$data = json_decode(file_get_contents("php://input"), true);
$id = $data["id"];
$title = $data["title"];
$start = $data["start"];

$sql = "UPDATE events SET title='$title', start='$start' WHERE id=$id";
$conn->query($sql);

$conn->close();
?>
