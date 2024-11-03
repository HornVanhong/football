// pages.js
function loadCSS(fileName) {
  // Remove any existing page-specific CSS
  const existingLink = document.getElementById("page-style");
  if (existingLink) existingLink.remove();

  // Add new page-specific CSS
  const link = document.createElement("link");
  link.id = "page-style";
  link.rel = "stylesheet";
  link.href = `./styles/${fileName}.css`; // Adjust path as needed
  document.head.appendChild(link);
}
export function HomeComponent() {
  return fetch("./page/home.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("content-container").innerHTML = html;
      // Call function to handle form submission
    });
}

export function AboutComponent() {
  return fetch("./page/about.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("content-container").innerHTML = html;
    });
}
export function ContactComponent() {
  loadCSS("contact");
  return fetch("./page/contact.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("content-container").innerHTML = html;
      addFormHandler();
    });
}

// Function to handle form submission on the Home page
function addFormHandler() {
  const form = document.getElementById("contact-form"); // Updated ID to match your form's ID
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevents page reload

      // Get values from form fields
      const name = form.elements["name"].value;
      const email = form.elements["email"].value;
      const request = form.elements["request"].value;
      const feedback = form.elements["feedback"].value;

      // Log the form data to the console
      console.log(
        `Form submitted. Name: ${name}, Email: ${email}, Request: ${request}, Feedback: ${feedback}`
      );

      // Display a response message
      // document.getElementById(
      //   "form-response"
      // ).textContent = `Thank you, ${name}! We have received your request: "${request}" and feedback: "${feedback}". We will reach out to you at ${email}.`;

      // Optionally clear form fields
      form.reset();
    });
  }
}