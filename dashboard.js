// Example notification counts. These values could alternatively come from an API.
const counts = {
  dashboard: 3,
  costumers: 0,
  appointment: 0,
  settings: 1
};
// Helper function: If count is more than 9, return "9+"
function formatCount(count) {
  return count > 9 ? '9+' : count;
}

// Updates badge content and visibility.
function updateBadge(badgeId, count) {
  const badge = document.getElementById(badgeId);
  if (badge){
    if (count > 0) {
      badge.textContent = formatCount(count);
      badge.style.display = 'flex';
    } else {
      badge.style.display = 'none';
    }
  }
}
// Update each badge with its corresponding count.
document.addEventListener("DOMContentLoaded", () => {
  updateBadge('dashboardBadge', counts.dashboard);
  updateBadge('costumersBadge', counts.costumers);
  updateBadge('appointmentBadge', counts.appointment);
  updateBadge('settingsBadge', counts.settings);
  loadEvents();
  loadActivity();
});

// Simulated server response for meetings/events data.
function loadEvents() {
  const events = [
    {
      meetingTitle: "Initial Consultation",
      client: "Client A",
      date: "2025-04-05",
      time: "10:00 AM",
      location: "Conference Room 1",
      description: "Discussion of Q2 targets and potential upsell opportunities."
    },
    {
      meetingTitle: "Follow-up Call",
      client: "Client B",
      date: "2025-04-06",
      time: "02:00 PM",
      location: "Online",
      description: "Follow up call regarding new contract proposals."
    },
    {
      meetingTitle: "Project Scoping",
      client: "Client C",
      date: "2025-04-07",
      time: "11:30 AM",
      location: "Client's Office",
      description: "Initial consultation and project scoping."
    }
  ];

  const eventsContainer = document.querySelector('.events');
  eventsContainer.innerHTML = ""; // Clear container

  events.forEach(event => {
    const eventCard = document.createElement('div');
    // (Optional) Use your styling class if still needed:
    eventCard.className = "events-card";
    eventCard.innerHTML = `<h3>
      ${event.meetingTitle} with 
      <a href="costumers.html?client=${encodeURIComponent(event.client)}">${event.client}</a>
      </h3>
      <p>Date:<span class="eventDetails"> ${event.date}</span></p>
      <p>Time:<span class="eventDetails"> ${event.time}</span></p>
      <p>Location:<span class="eventDetails"> ${event.location}</span></p>
      <p>Description:<span class="eventDetails"> ${event.description}</span></p>`;
    eventsContainer.appendChild(eventCard);
  });
}
function loadActivity() {
  // Simulated server response with a separate client property.
  const events = [
    {
      meetingTitle: "Project Kickoff",
      client: "Client A",
      date: "2025-03-11",
      time: "10:00 AM",
      location: "Conference Room 1",
      sumUp: "Initial consultation and project scoping. We have advised the client to use our new software for better project management."
    },
    {
      meetingTitle: "Cooperation Call",
      client: "Client B",
      date: "2025-03-06",
      time: "02:00 PM",
      location: "Online",
      sumUp: "Follow up call regarding new contract proposals."
    },
    {
      meetingTitle: "Helpdesk Meeting",
      client: "Client C",
      date: "2025-02-03",
      time: "11:30 AM",
      location: "Client's Office",
      sumUp: "Client had a problem with the new software update."
    }
  ];

  const eventsContainer = document.querySelector('.activity');
  eventsContainer.innerHTML = ""; // Clear container

  events.forEach(event => {
    const eventCard = document.createElement('div');
    // (Optional) Use your styling class if still needed:
    eventCard.className = "events-card";
    eventCard.innerHTML = `<h3>
      ${event.meetingTitle} with 
      <a href="costumers.html?client=${encodeURIComponent(event.client)}">${event.client}</a>
      </h3>
      <p>Date:<span class="eventDetails">${event.date} </span></p>
      <p>Time:<span class="eventDetails">${event.time}</span></p>
      <p>Location:<span class="eventDetails"> ${event.location}</span></p>
      <p>Description: <span class="eventDetails">${event.sumUp}</span></p>`;
    eventsContainer.appendChild(eventCard);
  });
}