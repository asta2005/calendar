<?php
include 'includes/db.php';
?>

<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Calendar</title>

    <!-- FullCalendar CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.10.2/fullcalendar.min.css" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">

    <!-- jQuery, Moment.js & FullCalendar JS -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.10.2/fullcalendar.min.js"></script>
    <script src="script.js" defer></script>
</head>
<body>
    <div class="container">
        <h1>Kalender</h1>
        <div id="calendar"></div>
    </div>

    <!-- Modal -->
    <div class="modal" id="eventModal">
        <div class="modal-content">
            <h2>Afspraak</h2>
            <form id="eventForm">
                <input type="hidden" id="eventId">
                <label>Titel:</label>
                <input type="text" id="eventTitle" required>
                <label>Starttijd:</label>
                <input type="datetime-local" id="startTime" required>
                <label>Eindtijd:</label>
                <input type="datetime-local" id="endTime" required>
                <button type="submit">Opslaan</button>
                <button type="button" id="deleteEvent">Verwijderen</button>
                <button type="button" onclick="closeModal()">Annuleren</button>
            </form>
        </div>
    </div>
</body>
</html>
