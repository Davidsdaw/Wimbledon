alert('David Sánchez Cuadrado \nEl shop está en menu');
document.addEventListener("DOMContentLoaded", function() {
    var images = ['./assets/images/b_559067.jpg', './assets/images/123.jpg', './assets/images/1234.jpg', './assets/images/12345.jpg']; // lista de imágenes
    var currentIndex = 0;
    var backgroundElement = document.querySelector('.carrusel');

    function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length;

        setTimeout(function() {
            backgroundElement.style.backgroundImage = 'url(' + images[currentIndex] + ')';
        }, 1000);
    }

    setInterval(changeBackground, 5000);
});
