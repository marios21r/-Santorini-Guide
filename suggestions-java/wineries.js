let currentIndex = 0;
const images = ["geo-his-cult-pictures/1084px-Santorini_78.jpg", "geo-his-cult-pictures/vecteezy_vineyard-on-lava-at-santorini-island-greece_3407968.jpg", "image3.jpg", "image4.jpg", "image5.jpg"]; // Add paths to your images

function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    document.getElementById("slider-image").src = images[currentIndex];
}


document.querySelectorAll('.winery').forEach(winery => {
    winery.addEventListener('click', (event) => {
        const infoBox = document.getElementById('winery-info');
        const infoText = winery.getAttribute('data-info');
        const currentText = infoBox.querySelector('p').textContent;

        if (currentText !== infoText || infoBox.style.display === 'none') {
            infoBox.querySelector('p').textContent = infoText;
            infoBox.style.display = 'block';
        } else {
            infoBox.style.display = 'none';
        }
        
        event.stopPropagation();
    });
});

document.addEventListener('click', (event) => {
    const infoBox = document.getElementById('winery-info');
    if (!infoBox.contains(event.target)) {
        infoBox.style.display = 'none';
    }
});
