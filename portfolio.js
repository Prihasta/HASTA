const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active'); 
});

const videos = document.querySelectorAll('.card-video');

videos.forEach(video => {
  video.addEventListener('mouseover', () => {
    video.play();
  });
  video.addEventListener('mouseout', () => {
    video.pause();
    video.currentTime = 0;  // Reset video to the start when hover ends
  });
});