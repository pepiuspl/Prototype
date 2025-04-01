document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded");

  const menu = document.getElementById("burgerMenu");
  const toggleBtn = document.querySelector(".toggle2");
  const pageOverlay = document.createElement("div");

  if (!menu || !toggleBtn) {
      console.error("Menu or toggle button not found!");
      return;
  }

  // Create and style overlay for dimming effect
  pageOverlay.classList.add("page-overlay");
  document.body.appendChild(pageOverlay);

  toggleBtn.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevents menu from closing immediately
      menu.classList.toggle("open");
      pageOverlay.classList.toggle("active");
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
      if (!menu.contains(event.target) && !toggleBtn.contains(event.target)) {
          menu.classList.remove("open");
          pageOverlay.classList.remove("active");
      }
  });
});
function toggleBurgerMenu() {
  const menu = document.getElementById("burgerMenu");
  const body = document.body;

  if (!menu) {
      console.error("Menu not found!");
      return;
  }

  // Toggle the burger menu visibility and dimming effect
  if (menu.style.display === "block") {
      menu.style.display = "none"; // Hide the menu
      body.classList.remove("dimmed"); // Remove dimming from the body
  } else {
      menu.style.display = "block"; // Show the menu
      body.classList.add("dimmed"); // Apply dimming effect to the body
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(".toggle2").addEventListener("click", toggleBurgerMenu);
});

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
let currentSlide = {}; 
let autoSlideTimers = {}; 

function setupCarousel(carouselId) {
    let carousel = document.getElementById(carouselId);
    if (!carousel) return;

    let slidesWrapper = carousel.querySelector(".events, .activity"); // Select slides container
    if (!slidesWrapper) return;
    
    let slides = Array.from(slidesWrapper.children);
    if (slides.length === 0) return;

    // Clone first and last slide for seamless transition
    let firstClone = slides[0].cloneNode(true);
    let lastClone = slides[slides.length - 1].cloneNode(true);

    firstClone.classList.add("clone");
    lastClone.classList.add("clone");

    slidesWrapper.appendChild(firstClone);
    slidesWrapper.insertBefore(lastClone, slides[0]);

    // Reset the current slide index
    currentSlide[carouselId] = 1; 
    slidesWrapper.style.transform = `translateX(-${slides[0].offsetWidth}px)`;

    // Attach event listeners to arrows inside each carousel
    let leftArrow = carousel.querySelector(".arrow-left");
    let rightArrow = carousel.querySelector(".arrow-right");

    if (leftArrow) leftArrow.addEventListener("click", () => updateSlide(carouselId, -1));
    if (rightArrow) rightArrow.addEventListener("click", () => updateSlide(carouselId, 1));

    startAutoSlide(carouselId);
}

function updateSlide(carouselId, direction) {
    let carousel = document.getElementById(carouselId);
    if (!carousel) return;

    let slidesWrapper = carousel.querySelector(".events, .activity");
    let slides = Array.from(slidesWrapper.children);
    let totalSlides = slides.length;
    let slideWidth = slides[0].offsetWidth;

    currentSlide[carouselId] += direction;
    slidesWrapper.style.transition = "transform 0.5s ease-in-out";
    slidesWrapper.style.transform = `translateX(-${currentSlide[carouselId] * slideWidth}px)`;

    // Restart the timer to 20s if user interacts
    resetAutoSlide(carouselId, 20000);

    // Handle seamless infinite loop
    setTimeout(() => {
        if (slides[currentSlide[carouselId]]?.classList.contains("clone")) {
            slidesWrapper.style.transition = "none";
            currentSlide[carouselId] = direction > 0 ? 1 : totalSlides - 2;
            slidesWrapper.style.transform = `translateX(-${currentSlide[carouselId] * slideWidth}px)`;
        }
    }, 500);
}

function startAutoSlide(carouselId) {
    autoSlideTimers[carouselId] = setInterval(() => {
        updateSlide(carouselId, 1);
    }, 10000); // Change slide every 10s
}

function resetAutoSlide(carouselId, delay) {
    clearInterval(autoSlideTimers[carouselId]);
    autoSlideTimers[carouselId] = setTimeout(() => {
        startAutoSlide(carouselId);
    }, delay);
}

// Initialize both carousels
document.addEventListener("DOMContentLoaded", () => {
    setupCarousel("eventsCarousel");
    setupCarousel("activitiesCarousel");
});