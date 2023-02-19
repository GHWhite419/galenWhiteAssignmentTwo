// Carousel

// 1. Select appropriate elements using variables and querySelector
// -galleryImages - This will create an HTMLcollection we can use to contain and navigate through our images.
const galleryImages = document.querySelectorAll('.galleryImages li')
//  -previousButton - This button should navigate to the previous image in the gallery when clicked.
const previousButton = document.getElementById('previousButton')
//  -nextButton - This button should navigate to the next image in the gallery when clicked.
const nextButton = document.getElementById('nextButton')

// 2. Create variables to track our current image, and its two adjacent images.
// -We will use i as our variable.
let i = 0;
// -currentImage - This will equal i, and will be the image we display in our carousel. It should be given a CSS class of currentImage.
const currentImage = galleryImages[i];
currentImage.classList.toggle('currentImage')
// -previousImage - This will equal i-1, and will create space to the left of the image that will store the previous image in the gallery, and which can be brought forward when the user clicks the 'previous' button. It should be given a CSS class of previousImage.
let previousImage;
if (i === 0) {
    previousImage = galleryImages[galleryImages.length - 1];
}
else {
    previousImage = galleryImages[i - 1];
}
previousImage.classList.toggle('previousImage')
// --Conditional statement - If previousImage < 0, previousImage should instead equal galleryImages.length - 1. This will create a looping effect in the gallery, taking us from the first image to the last.
// -nextImage - This will equal i+1, and will create space to the right of the image that will store the next image in the gallery, and which can be brought forward when the user clicks the 'next' button. It should be given a CSS class of nextImage.
let nextImage;
if (i === galleryImages[galleryImages.length - 1]) {
    nextImage = galleryImages[0];
}
else {
    nextImage = galleryImages[i + 1];
}
nextImage.classList.toggle('nextImage')
// --Conditional statement - If nextImage > galleryImages.length, nextImage should instead equal 0. This will create a looping effect in the gallery, taking us from the last image to the first.

// 3. Create two onclick event listeners respective to the previous and next buttons.
// -previousButton
// --onClick - i--. By decrementing the value of i, the previous image in the gallery should become the current image and thus be displayed.
previousButton.addEventListener('click', () => {
    console.log('Previous image');
    currentImage.classList.toggle('currentImage');
    previousImage.classList.toggle('previousImage');
    nextImage.classList.toggle('nextImage');
    if (i === 0) {
        i = galleryImages.length - 1;
    }
    else {
        i--;
    }
    currentImage.classList.toggle('currentImage');
    previousImage.classList.toggle('previousImage');
    nextImage.classList.toggle('nextImage');
})
// -nextButton
// --onClick - i++. By incrementing the value of i, the next image in the gallery should become the current image and thus be displayed.
nextButton.addEventListener('click', () => {
    console.log('Next image');
    i++;
})