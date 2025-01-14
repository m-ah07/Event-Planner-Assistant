let eventsData = [
  {
    title: "Wedding Ceremony",
    date: "2025-01-20",
    description: "A beautiful wedding ceremony for John and Jane.",
  },
  {
    title: "Corporate Meeting",
    date: "2025-02-10",
    description: "Annual corporate meeting for company stakeholders.",
  },
  {
    title: "Birthday Party",
    date: "2025-03-15",
    description: "Surprise birthday party for a dear friend.",
  },
];

const eventList = document.getElementById("event-list");
const newEventForm = document.getElementById("new-event-form");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventDescription = document.getElementById("eventDescription");

function renderEvents() {
  eventList.innerHTML = "";

  eventsData.forEach((event, index) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = `
        <strong>${event.title}</strong> - ${event.date}
        <br>
        <small>${event.description}</small>
        <span class="delete-btn" data-index="${index}">
          <i class="fas fa-trash"></i>
        </span>
      `;
    eventList.appendChild(li);
  });
}

function deleteEvent(index) {
  eventsData.splice(index, 1);
  renderEvents();
}

newEventForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newEvent = {
    title: eventTitle.value.trim(),
    date: eventDate.value,
    description: eventDescription.value.trim(),
  };

  eventsData.push(newEvent);

  renderEvents();

  newEventForm.reset();
});

eventList.addEventListener("click", (e) => {
  if (e.target.closest(".delete-btn")) {
    const index = e.target.closest(".delete-btn").getAttribute("data-index");
    deleteEvent(index);
  }
});

document.addEventListener("DOMContentLoaded", renderEvents);
