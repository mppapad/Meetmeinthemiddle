// Check if the page has already been refreshed
if (!sessionStorage.getItem("reloaded")) {
  sessionStorage.setItem("reloaded", "true"); // Mark as refreshed
  location.reload(); // Refresh the page
}
