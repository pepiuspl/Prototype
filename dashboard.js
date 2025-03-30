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
});