let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const controls = document.querySelectorAll('.control');

function showSlide(index) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
    updateControls(index);
}

function updateControls(index) {
    controls.forEach((control, i) => {
        control.classList.remove('active');
        if (i === index) {
            control.classList.add('active');
        }
    });
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
}

function autoSlide() {
    setInterval(nextSlide, 10000);
}

showSlide(currentSlide);
autoSlide();
