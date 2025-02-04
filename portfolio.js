const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active'); 
});

// Get overlay elements
const overlay = document.getElementById("fullscreenOverlay");
const fullscreenImage = document.getElementById("fullscreenImage");

// Open fullscreen image on click
document.querySelectorAll(".grid-item img").forEach(img => {
    img.addEventListener("click", function () {
        fullscreenImage.src = this.src;
        overlay.style.display = "flex"; // Ensure overlay is visible
        setTimeout(() => {
            overlay.classList.add("active"); // Add fade-in effect
        }, 10); // Small delay for smooth effect
    });
});

// Close when clicking outside the image
overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
        overlay.classList.remove("active"); // Remove animation
        setTimeout(() => {
            overlay.style.display = "none"; // Hide after animation ends
        }, 300);
    }
});

// Close with "Escape" key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        overlay.classList.remove("active");
        setTimeout(() => {
            overlay.style.display = "none";
        }, 300);
    }
});
