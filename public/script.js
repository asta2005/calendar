$(document).ready(function () {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        events: 'fetch_events.php', // Haalt afspraken op vanuit de database
        selectable: true,
        selectHelper: true,
        select: function (start, end) {
            $('#eventId').val('');
            $('#eventTitle').val('');
            $('#startTime').val(moment(start).format("YYYY-MM-DDTHH:mm")); // Formatteer datum correct
            $('#endTime').val(moment(end).format("YYYY-MM-DDTHH:mm"));
            $('#eventModal').show(); // Toon de modal
        },
        editable: true,
        eventDrop: function (event) {
            var start = moment(event.start).format("YYYY-MM-DD HH:mm:ss");
            var end = moment(event.end).format("YYYY-MM-DD HH:mm:ss");

            $.ajax({
                url: 'edit_event.php',
                type: 'POST',
                data: { id: event.id, start: start, end: end },
                success: function () {
                    alert("Evenement bijgewerkt!");
                }
            });
        },
        eventClick: function (event) {
            $('#eventId').val(event.id);
            $('#eventTitle').val(event.title);
            $('#startTime').val(moment(event.start).format("YYYY-MM-DDTHH:mm"));
            $('#endTime').val(moment(event.end).format("YYYY-MM-DDTHH:mm"));
            $('#eventModal').show();
        }
    });

    $('#eventForm').on('submit', function (e) {
        e.preventDefault();
        var id = $('#eventId').val();
        var title = $('#eventTitle').val();
        var start = $('#startTime').val();
        var end = $('#endTime').val();
        var url = id ? 'edit_event.php' : 'add_event.php';

        $.ajax({
            url: url,
            type: "POST",
            data: { id: id, title: title, start: start, end: end },
            success: function () {
                $('#calendar').fullCalendar('refetchEvents');
                $('#eventModal').hide();
                alert(id ? 'Afspraak bijgewerkt' : 'Afspraak toegevoegd');
            }
        });
    });

    $('#deleteEvent').on('click', function () {
        var id = $('#eventId').val();
        if (id && confirm("Wil je deze afspraak verwijderen?")) {
            $.ajax({
                url: 'delete_event.php',
                type: "POST",
                data: { id: id },
                success: function () {
                    $('#calendar').fullCalendar('removeEvents', id);
                    $('#eventModal').hide();
                    alert("Afspraak verwijderd");
                }
            });
        }
    });
});

function closeModal() {
    $('#eventModal').hide();
}
