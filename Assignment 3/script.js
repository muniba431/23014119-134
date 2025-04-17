
  const toggleSidebar = document.getElementById('toggleSidebar');
  const sidebar = document.getElementById('sidebar');
  const closeSidebar = document.getElementById('closeSidebar');

  // Existing Sidebar Open/Close Logic
  toggleSidebar.addEventListener('click', () => {
    sidebar.classList.remove('-translate-x-full');
  });

  closeSidebar.addEventListener('click', () => {
    sidebar.classList.add('-translate-x-full');
  });

  sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.add('-translate-x-full');
    });
  });

  // --------------------------------------
  // 🔟 Useful Functions + View Detection
  // --------------------------------------

  // 1. Show alert when section is clicked
  function alertSectionClick(sectionName) {
    alert(`Navigating to: ${sectionName}`);
  }

  // 2. Scroll to top
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // 3. Toggle sidebar visibility
  function toggleSidebarManually() {
    sidebar.classList.toggle('-translate-x-full');
  }

  // 4. Highlight active section link
  function highlightActiveLink(id) {
    document.querySelectorAll('nav a').forEach(link => {
      link.classList.remove('bg-cyan-200');
    });
    const activeLink = document.querySelector(`a[href="#${id}"]`);
    if (activeLink) activeLink.classList.add('bg-cyan-200');
  }

  // 5. Dark mode toggle
  function toggleDarkMode() {
    document.body.classList.toggle('bg-white');
    document.body.classList.toggle('text-black');
  }

  // 6. Get current scroll position
  function getScrollY() {
    console.log("Scroll position: ", window.scrollY);
  }

  // 7. Log clicked link text
  function logLinkText(event) {
    console.log("Clicked link: ", event.target.textContent);
  }

  // 8. Add a dynamic item to sidebar
  function addSidebarItem(text, targetId) {
    const link = document.createElement('a');
    link.href = `#${targetId}`;
    link.textContent = text;
    link.className = "block text-white hover:bg-cyan-600 p-2 rounded";
    sidebar.appendChild(link);
  }

  // 9. Clear all sidebar items
  function clearSidebar() {
    sidebar.querySelectorAll('a').forEach(a => a.remove());
  }

  // 10. Disable scrolling (useful when sidebar is open)
  function disableScroll() {
    document.body.style.overflow = 'hidden';
  }
  function enableScroll() {
    document.body.style.overflow = 'auto';
  }

  // --------------------------------------
  // 📱 Mobile vs 💻 Laptop View Functions
  // --------------------------------------

  function isMobileView() {
    return window.innerWidth <= 768; // Tailwind md breakpoint
  }

  function isLaptopView() {
    return window.innerWidth > 768;
  }

  // Example usage:
  if (isMobileView()) {
    console.log("📱 Mobile View");
  } else if (isLaptopView()) {
    console.log("💻 Laptop/Desktop View");
  }

  // Optional: Listen to resize and log view changes
  window.addEventListener('resize', () => {
    if (isMobileView()) {
      console.log("Switched to Mobile View");
    } else {
      console.log("Switched to Laptop/Desktop View");
    }
  });


