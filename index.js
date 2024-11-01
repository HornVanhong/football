function loadPage(page) {
  fetch(page)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Page not found");
      }
      return response.text();
    })
    .then((content) => {
      document.getElementById("content").innerHTML = content;

      // Load specific CSS for the About page
      if (page === "./Page/about.html") {
        const aboutStyle = document.createElement("link");
        aboutStyle.rel = "stylesheet";
        aboutStyle.href = "Page/about.css";
        document.head.appendChild(aboutStyle);
      }
      if (page === "./Page/home.html") {
        const homeStyle = document.createElement("link");
        homeStyle.rel = "stylesheet";
        homeStyle.href = "Page/home.css";
        document.head.appendChild(homeStyle);
      }
    })
    .catch((error) => console.error("Error loading page:", error));
}
