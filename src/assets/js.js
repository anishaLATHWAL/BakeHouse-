const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

// grab all panel classes
const panels = document.querySelectorAll(".panel");

// loop through the node list
panels.forEach((panel) => {
  // listen for a click
  panel.addEventListener("click", () => {
    removeActive();
    // if clicked -> add a class of active (so also flex = 5)
    panel.classList.add("active");
  });
});

// function to remove active class from elements
function removeActive() {
  // loop through panels
  panels.forEach((panel) => {
    // remove active classes from panel objects
    panel.classList.remove("active");
  });
}
