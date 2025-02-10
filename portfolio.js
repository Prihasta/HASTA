const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active'); 
});


document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll(".grid-item video");
    const overlay = document.getElementById("fullscreenOverlay");
    let activeOverlay = null;
    
    videos.forEach(video => {
        video.addEventListener("click", function () {
            if (activeOverlay) return;
            
            const wrapper = document.createElement("div");
            wrapper.style.position = "fixed";
            wrapper.style.top = "0";
            wrapper.style.left = "0";
            wrapper.style.width = "100vw";
            wrapper.style.height = "100vh";
            wrapper.style.background = "rgba(0, 0, 0, 0.9)";
            wrapper.style.zIndex = "1000";
            wrapper.style.display = "flex";
            wrapper.style.justifyContent = "center";
            wrapper.style.alignItems = "center";
            
            const clonedVideo = video.cloneNode(true);
            clonedVideo.style.maxWidth = "90vw";
            clonedVideo.style.maxHeight = "80vh";
            clonedVideo.controls = true;
            clonedVideo.autoplay = true;
            
            wrapper.appendChild(clonedVideo);
            document.body.appendChild(wrapper);
            activeOverlay = wrapper;

            // Close when clicking outside video
            wrapper.addEventListener("click", function (event) {
                if (event.target === wrapper) {
                    document.body.removeChild(wrapper);
                    activeOverlay = null;
                }
            });
        });
    });

    document.querySelectorAll(".grid-item img").forEach(img => {
        img.addEventListener("click", function () {
            if (activeOverlay) return;
            
            const fullscreenImage = document.getElementById("fullscreenImage");
            fullscreenImage.src = this.src;
            overlay.style.display = "flex";
            setTimeout(() => {
                overlay.classList.add("active");
            }, 10);
            activeOverlay = overlay;
        });
    });

    overlay.addEventListener("click", function (event) {
        if (event.target === overlay) {
            overlay.classList.remove("active");
            setTimeout(() => {
                overlay.style.display = "none";
                activeOverlay = null;
            }, 300);
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && activeOverlay) {
            if (activeOverlay !== overlay) {
                document.body.removeChild(activeOverlay);
            } else {
                overlay.classList.remove("active");
                setTimeout(() => {
                    overlay.style.display = "none";
                }, 300);
            }
            activeOverlay = null;
        }
    });
});
