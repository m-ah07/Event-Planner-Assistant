/*******************************************
 * Event Planner Assistant - Main Script
 *******************************************/

// استخدام localStorage للاحتفاظ بالبيانات
let eventsData = JSON.parse(localStorage.getItem("eventsData")) || [];

// عناصر DOM
const eventList = document.getElementById("event-list");
const newEventForm = document.getElementById("new-event-form");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventDescription = document.getElementById("eventDescription");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

// عرض الفعاليات في القائمة
function renderEvents(filter = "") {
  eventList.innerHTML = "";

  // إن وجدت قيمة بحث، نقوم بالتصفية
  let filteredEvents = eventsData.filter((evt) =>
    evt.title.toLowerCase().includes(filter.toLowerCase())
  );

  // فرز الفعاليات حسب التاريخ (تصاعدي)
  filteredEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

  // عرض الفعاليات
  filteredEvents.forEach((event, index) => {
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

// حفظ الفعاليات في localStorage
function saveEvents() {
  localStorage.setItem("eventsData", JSON.stringify(eventsData));
}

// حذف فعالية
function deleteEvent(index) {
  eventsData.splice(index, 1);
  saveEvents();
  renderEvents();
}

// إضافة حدث جديد
if (newEventForm) {
  newEventForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newEvent = {
      title: eventTitle.value.trim(),
      date: eventDate.value,
      description: eventDescription.value.trim(),
    };

    eventsData.push(newEvent);
    saveEvents();
    renderEvents();
    newEventForm.reset();
  });
}

// البحث عن فعالية
if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    renderEvents(query);
  });
}

// الاستماع للنقرات على زر الحذف
if (eventList) {
  eventList.addEventListener("click", (e) => {
    if (e.target.closest(".delete-btn")) {
      const index = e.target.closest(".delete-btn").getAttribute("data-index");
      deleteEvent(index);
    }
  });
}

// عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  renderEvents();
});
