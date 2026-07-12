document.addEventListener("DOMContentLoaded", () => {
  const headerPlaceholder = document.getElementById("header-placeholder");

  if (!headerPlaceholder) {
    console.error("header-placeholder element not found!");
    return;
  }

  const headerPath =
    headerPlaceholder.dataset.headerUrl ||
    (typeof headerUrl !== "undefined" ? headerUrl : "/header/");

  fetch(headerPath)
    .then((response) => response.text())
    .then((data) => {
      headerPlaceholder.innerHTML = data;

      const header = document.getElementById("header");
      const menuBtn = document.getElementById("menuBtn");
      const sideMenu = document.getElementById("sideMenu");
      const overlay = document.getElementById("overlay");

      if (!header || !menuBtn || !sideMenu || !overlay) return;

      let menuOpen = false;

      // Hover Effect

      menuBtn.addEventListener("mousemove", (e) => {
        if (menuOpen) return;

        const rect = menuBtn.getBoundingClientRect();

        const moveX = (e.clientX - rect.left - rect.width / 2) / 4;
        const moveY = (e.clientY - rect.top - rect.height / 2) / 4;

        menuBtn.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px)) scale(1.05)`;
      });

      menuBtn.addEventListener("mouseleave", () => {
        if (menuOpen) return;
        menuBtn.style.transform = 'translate(-50%,-50%) scale(1)';
      });

      // Open Menu

      function openMenu() {
        menuOpen = true;

        header.classList.add("expanded");
        header.classList.add("menu-open");

        sideMenu.classList.add("open");
        overlay.classList.add("show");
        menuBtn.classList.add("open");

        menuBtn.setAttribute("aria-expanded", "true");
        menuBtn.style.transform = "";
      }

      // Close Menu

      function closeMenu() {
        menuOpen = false;

        header.classList.remove("expanded");
        header.classList.remove("menu-open");

        sideMenu.classList.remove("open");
        overlay.classList.remove("show");
        menuBtn.classList.remove("open");

        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.style.transform = "";
      }

      // Toggle

      function toggleMenu() {
        menuOpen ? closeMenu() : openMenu();
      }

      // Events
      menuBtn.addEventListener("click", toggleMenu);

      overlay.addEventListener("click", closeMenu);

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && menuOpen) {
          closeMenu();
        }
      });

      window.addEventListener("resize", () => {
        if (window.innerWidth <= 1024 && menuOpen) {
          closeMenu();
        }
      });
    })
    .catch((error) => console.error("Error loading header:", error));
});