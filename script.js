// script.js

let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showImage(currentIndex);
    
    // Automatically move to the next image every 3 seconds
    setInterval(nextImage, 3000);
});
