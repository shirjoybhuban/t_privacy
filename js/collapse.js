let items = document.getElementsByClassName("item");
let i;

for (i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function() {
    //this.classList.toggle("active");
    let sibling = this.nextElementSibling;
    
    if (sibling.classList.contains("d-block")) {
      sibling.classList.remove("d-block");
      sibling.classList.add("d-none");
       //sibling.style.display = "none";
    } else {
      sibling.classList.remove("d-none");
      sibling.classList.add("d-block");
    }
  });
}

//Mobile collapse
var mobileDrop = document.getElementsByClassName("mobile-dropdown");

mobileDrop && mobileDrop[0].addEventListener("click", function() {
  let parent = document.getElementById('aside');
  let nav = document.getElementsByTagName('nav')[0];
  let display = window.getComputedStyle(parent).display;
  
  if (display === "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
});