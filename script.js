
document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');
            const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
            
            // Mobile menu toggle
            hamburger.addEventListener('click', function() {
                this.classList.toggle('open');
                navLinks.classList.toggle('active');
            });
            
            // Dropdown functionality
            dropdownToggles.forEach(toggle => {
                toggle.addEventListener('click', function(e) {
                    e.preventDefault();
                    const dropdown = this.nextElementSibling;
                    
                    if (window.innerWidth <= 768) {
                        // Mobile behavior
                        dropdown.classList.toggle('active');
                    } else {
                        // Desktop behavior
                        document.querySelectorAll('.dropdown').forEach(d => {
                            if (d !== dropdown) d.classList.remove('active');
                        });
                        dropdown.classList.toggle('active');
                    }
                });
            });
            
            // Close dropdowns when clicking outside
            document.addEventListener('click', function(e) {
                if (!e.target.matches('.dropdown-toggle') && !e.target.matches('.dropdown-link')) {
                    document.querySelectorAll('.dropdown').forEach(dropdown => {
                        dropdown.classList.remove('active');
                    });
                }
            });
            
            // Responsive adjustments
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    hamburger.classList.remove('open');
                    navLinks.classList.remove('active');
                    document.querySelectorAll('.dropdown').forEach(dropdown => {
                        dropdown.classList.remove('active');
                    });
                }
            });
        });


// Animate skill bars
  const fills = document.querySelectorAll(".skill-bar-fill");
  fills.forEach((fill) => {
    const width = fill.getAttribute("data-fill");
    setTimeout(() => {
      fill.style.width = width;
    }, 200);
  });

  // Tab navigation (Projects page)
  const tabs = document.querySelectorAll('[role="tab"]');
  const tabPanels = document.querySelectorAll('[role="tabpanel"]');

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const selectedPanel = tab.getAttribute("aria-controls");

      tabs.forEach((t) => {
        t.setAttribute("aria-selected", "false");
        t.tabIndex = -1;
      });
      tab.setAttribute("aria-selected", "true");
      tab.tabIndex = 0;

      tabPanels.forEach((panel) => {
        panel.hidden = panel.id !== selectedPanel;
      });
    });

    tab.addEventListener("keydown", (e) => {
      const index = Array.prototype.indexOf.call(tabs, e.currentTarget);
      if (e.key === "ArrowLeft") {
        const prevIndex = (index - 1 + tabs.length) % tabs.length;
        tabs[prevIndex].click();
        tabs[prevIndex].focus();
        e.preventDefault();
      } else if (e.key === "ArrowRight") {
        const nextIndex = (index + 1) % tabs.length;
        tabs[nextIndex].click();
        tabs[nextIndex].focus();
        e.preventDefault();
      }
    });
  });

  // Contact form validation
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");
  if (form && feedback) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!form.checkValidity()) {
        feedback.textContent = "Please fill out all required fields correctly.";
        feedback.style.color = "red";
        return;
      }

      feedback.style.color = "#FB6F92";
      feedback.textContent = "Sending message...";

      setTimeout(() => {
        feedback.textContent =
          "Thank you for your message! I will get back to you soon.";
        form.reset();
      }, 1600);
    });
  }