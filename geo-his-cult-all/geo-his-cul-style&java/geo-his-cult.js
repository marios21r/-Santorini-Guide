document.addEventListener("DOMContentLoaded", function() {
    const parts = document.querySelectorAll('.parts');

    parts.forEach(part => {
        part.addEventListener('mouseenter', function() {
            part.querySelector('.text-information').style.opacity = '1'; // On hover, set opacity of text to 1
            part.querySelector('.img-geo').style.opacity = '1'; // On hover, set opacity of image to 1
        });

        part.addEventListener('mouseleave', function() {
            part.querySelector('.text-information').style.opacity = '0'; // On mouse leave, set opacity of text back to 0
            part.querySelector('.img-geo').style.opacity = '0'; // On mouse leave, set opacity of image back to 0
        });
    });
});
