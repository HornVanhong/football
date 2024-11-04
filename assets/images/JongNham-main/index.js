// // Import components
// import { HomeComponent, AboutComponent, ContactComponent} from "./components/page.js";

// // Function to load the selected component
// function loadComponent(component) {
//   component(); // Call the component function to fetch and display HTML
// }

// // Event listeners for buttons
// document
//   .getElementById("home-button")
//   .addEventListener("click", () => loadComponent(HomeComponent));
// document
//   .getElementById("about-button")
//   .addEventListener("click", () => loadComponent(AboutComponent));
//   document
//   .getElementById("contact-button")
//   .addEventListener("click", () => loadComponent(ContactComponent));
// Import components
import { HomeComponent, AboutComponent, ContactComponent } from "./components/page.js";

// Function to load the selected component
function loadComponent(component) {
  component(); // Call the component function to fetch and display HTML
}

// Event listeners for buttons
document
  .getElementById("home-button")
  .addEventListener("click", () => loadComponent(HomeComponent));
document
  .getElementById("about-button")
  .addEventListener("click", () => loadComponent(AboutComponent));
document
  .getElementById("contact-button")
  .addEventListener("click", () => loadComponent(ContactComponent));

// Load the homepage by default when the document is ready
document.addEventListener("DOMContentLoaded", () => {
  loadComponent(HomeComponent);
});

