document.addEventListener("DOMContentLoaded", function () {
    const calendarDiv = document.getElementById("calendar");
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    function generateCalendar(year, month) {
        calendarDiv.innerHTML = "";

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        let calendarHTML = "<table><tr>";
        const days = ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"];
        days.forEach(day => calendarHTML += `<th>${day}</th>`);
        calendarHTML += "</tr><tr>";

        for (let i = 0; i < firstDay; i++) {
            calendarHTML += "<td></td>";
        }

        for (let day = 1; day <= daysInMonth; day++) {
            calendarHTML += `<td class="day" data-date="${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}">${day}</td>`;
            if ((day + firstDay) % 7 === 0) {
                calendarHTML += "</tr><tr>";
            }
        }

        calendarHTML += "</tr></table>";
        calendarDiv.innerHTML = calendarHTML;
        loadEvents();
    }

    function loadEvents() {
        fetch("events.php")
            .then(response => response.json())
            .then(events => {
                events.forEach(event => {
                    let eventDay = document.querySelector(`.day[data-date="${event.event_date}"]`);
                    if (eventDay) {
                        eventDay.classList.add("event");
                        eventDay.title = event.event_name;
                    }
                });
            });
    }

    generateCalendar(currentYear, currentMonth);
});
