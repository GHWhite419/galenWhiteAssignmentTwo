
const galleryImages = document.querySelectorAll('.galleryImages li')
const previousButton = document.getElementById('previousButton')
const nextButton = document.getElementById('nextButton')

let i = 0;
let currentImage;
let previousImage;
let nextImage;

const imgDisplay = () => {
    currentImage = galleryImages[i];
    currentImage.classList.toggle('currentImage')
    if (i === 0) {
        previousImage = galleryImages[galleryImages.length - 1];
    }
    else {
        previousImage = galleryImages[i - 1];
    }
    previousImage.classList.toggle('previousImage')
    if (i === galleryImages.length - 1) {
        nextImage = galleryImages[0];
    }
    else {
        nextImage = galleryImages[i + 1];
    }
    nextImage.classList.toggle('nextImage')
}
imgDisplay();

previousButton.addEventListener('click', () => {
    currentImage.classList.toggle('currentImage');
    previousImage.classList.toggle('previousImage');
    nextImage.classList.toggle('nextImage');
    if (i === 0) {
        i = galleryImages.length - 1;
        imgDisplay();
    }
    else {
        i--;
        imgDisplay();
    }
})
nextButton.addEventListener('click', () => {
    currentImage.classList.toggle('currentImage');
    previousImage.classList.toggle('previousImage');
    nextImage.classList.toggle('nextImage');
    if (i === galleryImages.length - 1) {
        i = 0;
        imgDisplay();
    }
    else {
        i++;
        imgDisplay();
    }
})