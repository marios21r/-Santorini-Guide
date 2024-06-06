// JavaScript for interactivity

// Example of adding a hover effect to the main picture
const mainPicture = document.querySelector('.main-picture');

mainPicture.addEventListener('mouseenter', function() {
    mainPicture.style.opacity = '0.7';
});

mainPicture.addEventListener('mouseleave', function() {
    mainPicture.style.opacity = '1';
});
