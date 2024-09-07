let items = document.getElementsByClassName("item");
let i;

for (i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    let sibling = this.nextElementSibling;
    let icon = this.querySelector("i");
    if (sibling.classList.contains("d-block")) {
      sibling.classList.remove("d-block");
      sibling.classList.add("d-none");
      icon.classList.remove("fa-chevron-up");
      icon.classList.add("fa-chevron-down");
    } else {
      sibling.classList.remove("d-none");
      sibling.classList.add("d-block");
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-up");
    }
  });
}

//Mobile collapse
var mobileDrop = document.getElementsByClassName("mobile-dropdown");

mobileDrop &&
  mobileDrop[0].addEventListener("click", function () {
    let parent = document.getElementById("aside");
    let nav = document.getElementsByTagName("nav")[0];
    let display = window.getComputedStyle(parent).display;
    if (display === "none") {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
  });
