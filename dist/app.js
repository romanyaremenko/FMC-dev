(() => {
  // src/app.js
  window.addEventListener("load", function(event) {
    let hamburgerOpen = document.querySelector(".hamburger_open_js");
    let hamburgerClose = document.querySelector(".hamburger_close_js");
    let hamburger = document.querySelector(".hamburger");
    let hoverMenu = document.querySelector(".hover_menu-js");
    let hoverMenuOpen = document.querySelectorAll(".hover_menu_open-js");
    hamburgerOpen.addEventListener("click", () => {
      hamburger.classList.add("hamburger__active");
      console.log("test");
    });
    hamburgerClose.addEventListener("click", () => {
      hamburger.classList.remove("hamburger__active");
      console.log("test");
    });
    hoverMenuOpen.forEach((item) => {
      item.addEventListener("mouseover", () => {
        hoverMenu.classList.add("hover_menu__active");
        console.log("test2");
      });
    });
    hoverMenuOpen.forEach((item) => {
      item.addEventListener("mouseout", () => {
        hoverMenu.classList.remove("hover_menu__active");
        console.log("test2");
      });
    });
    const anchors = document.querySelectorAll("a.scroll-to");
    for (let anchor of anchors) {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const blockID = anchor.getAttribute("href");
        document.querySelector(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    }
  });
})();
//# sourceMappingURL=app.js.map
