<?php
require 'database.php';

header('Content-Type: application/json');

$sql = "SELECT id, title, start FROM events";
$result = $conn->query($sql);

$events = [];
while ($row = $result->fetch_assoc()) {
    $events[] = $row;
}

echo json_encode($events);
$conn->close();
?>
