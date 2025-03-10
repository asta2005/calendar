<?php
include 'includes/db.php';

$query = "SELECT * FROM events";
$result = $conn->query($query);
$events = [];

while ($row = $result->fetch_assoc()) {
    $events[] = [
        'id' => $row['id'],
        'title' => $row['title'],
        'start' => $row['start_datetime'],
        'end' => $row['end_datetime']
    ];
}

echo json_encode($events);
?>
