// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});


// EVENT DASHBOARD LOGIC
const eventform = document.getElementById("eventForm");
const eventContainer = document.getElementById("eventContainer");
const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");

let events = [];

function renderEvents() {
    eventContainer.innerHTML = "";

    if (events.length === 0) {
        eventContainer.innerHTML = '<div class="empty-state">No events yet. Add your first event!</div>';
        return;
    }

    events.forEach((event, index) => {
        const div = document.createElement("div");
        div.className = "event-card";

        div.innerHTML = `
            <h3>${event.title}</h3>
            <p><b>Date:</b> ${event.date}</p>
            <p><b>Category:</b> ${event.category}</p>
            <p>${event.description}</p>
            <button onclick="deleteEvent(${index})">Delete</button>
        `;

        eventContainer.appendChild(div);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newEvent = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    };

    events.push(newEvent);
    renderEvents();
    form.reset();
});

function deleteEvent(index) {
    events.splice(index, 1);
    renderEvents();
}

clearAllBtn.addEventListener("click", () => {
    events = [];
    renderEvents();
});

addSampleBtn.addEventListener("click", () => {
    events.push(
        {title: "Tech Conference", date: "2026-03-10", category: "Conference", description: "AI & ML event"},
        {title: "Workshop", date: "2026-04-12", category: "Workshop", description: "Web dev hands-on"}
    );
    renderEvents();
});


// DOM DEMO
const demoContent = document.getElementById("demoContent");

document.addEventListener("keydown", (e) => {
    demoContent.textContent = "You pressed: " + e.key;
});






let sampleEvent = {
    title : "Web dev2",
    date : "11-02-2026",
    category : "conference",
    description : "hasvhuno oadshdbf dfgh cvbn ertyui xvb"
}


// create event card
function createEventCard(eventData) {
    const card = document.createElement("div");
    card.innerHTML =`
    <button class=delete-btn>X</button>
    <h3>${eventData.title}</h3>
    <div>${eventData.date}</div>
    <span>${eventData.category}</span>
    <p>${eventData.description}</p>
    `

    return card;
}


function createEventCard(eventCard) {
    card.innerHTML =`
    <button class=delete-btn>X</button>
    <h3>${eventData.title}</h3>
    <div>${eventData.date}</div>
    <span>${eventData.category}</span>
    <p>${eventData.description}</p>
    `
    return card;
}

function addEvent(eventData) {
    const emptyState = document.querySelector(".empty-state");

    eventContainer.appendChild(createEventCard(eventData))
}

// const eventData = {
//     title: eventTitle.value,
//     date : eventCategory.value,
//     category : eventCategory.value,
//     description : eventDescription.value,
// }

eventform.addEventListener("submit", (event) => {
    event.preventDefault();
    const eventData = {
        title: eventTitle.value,
        date : eventCategory.value,
        category : eventCategory.value,
        description : eventDescription.value,
    }

    addEvent(eventData);
    eventform.reset();
})

// clear all event

clearAllBtn.addEventListener("click", ()=> {
    eventContainer.innerHTML = `<div class="empty-state"> Noevents yet. Add your first event!</div>`
})


