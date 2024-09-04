// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 400;
    let sectionId = current.getAttribute("id");
    let menuId = sectionId.split("-")[0];

    if (menuId && menuId != "") {
      let hyperlink = document.querySelector(
        ".navigation ul li[id*=" + menuId + "] div a"
      );

      let parent = document.querySelector(
        ".navigation ul li[id*=" + menuId + "]"
      );
      let secondChild = parent?.childNodes[3];
      let icon = parent.querySelector("div i");
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        hyperlink.classList.add("active-parent");
        if (secondChild && secondChild.classList.contains("d-none")) {
          secondChild.classList.remove("d-none");
          secondChild.classList.add("d-block");
          if (icon) {
            icon.classList.remove("fa-chevron-down");
            icon.classList.add("fa-chevron-up");
          }
        }
        childNvHighlighter(current, parent);
      } else {
        hyperlink.classList.remove("active-parent");
        if (secondChild && secondChild.classList.contains("d-block")) {
          secondChild.classList.remove("d-block");
          secondChild.classList.add("d-none");
          if (icon) {
            icon.classList.remove("fa-chevron-up");
            icon.classList.add("fa-chevron-down");
          }
        }
      }
    } else {
      alert("Something went wrong.");
    }
  });
}

function childNvHighlighter(current, menu) {
  let scrollVertical = window.scrollY;

  //Menu
  let childMenu = menu.children[1];
  let childMenuList = childMenu.children;
  //Section
  let child = current.querySelectorAll(".inner-section");
  let childList = child[0]?.children;

  childList &&
    childList?.length > 0 &&
    Object.keys(childList).forEach((key) => {
      let childSectionId = childList[key].getAttribute("id");
      let childMenuIndex = parseInt(childSectionId.split("-")[1]) - 1;
      const childSectionHeight = childList[key].offsetHeight;
      const childSectionTop = childList[key].offsetTop - 550;
      let singleChild = childMenuList[childMenuIndex];
      if (
        singleChild &&
        scrollVertical > childSectionTop &&
        scrollVertical <= childSectionTop + childSectionHeight
      ) {
        singleChild.children[0].classList.add("active-child");
      } else {
        singleChild.children[0].classList.remove("active-child");
      }
    });
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  const headerRect = document.querySelector(".header").getBoundingClientRect();
  const headerHeight = headerRect.height;

  if (section) {
    window.scrollTo({
      top: section.offsetTop - headerHeight,
      behavior: "smooth",
    });
  }
}
