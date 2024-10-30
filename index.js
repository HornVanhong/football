function loadPage(page) {
  fetch(page)
    .then((response) => response.text())
    .then((content) => {
      document.getElementById("content").innerHTML = content;
    })
    .catch((error) => console.error("Error loading page:", error));
}
