function scrollToSection(event, sectionId) {
    event.preventDefault();
    
    const targetSection = document.getElementById(sectionId);
    const yOffset = -60; // Offset for fixed navigation bar, adjust according to your layout
    
    const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    window.scrollTo({ top: y, behavior: 'smooth' });
}


const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when user scrolls down
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Scroll to top when the button is clicked
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
