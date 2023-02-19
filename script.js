// Carousel

// 1. Select appropriate elements using variables and querySelector
// -galleryImages - This will create an HTMLcollection we can use to contain and navigate through our images.
//  -previousButton - This button should navigate to the previous image in the gallery when clicked.
//  -nextButton - This button should navigate to the next image in the gallery when clicked.

// 2. Create variables to track our current image, and its two adjacent images.
// -We will use i as our variable.
// -currentImage - This will equal i, and will be the image we display in our carousel
// -previousImage - This will equal i-1, and will create space to the left of the image that will store the previous image in the gallery, and which can be brought forward when the user clicks the 'previous' button.
// --Conditional statement - If previousImage < 0, previousImage should instead equal galleryImages.length - 1. This will create a looping effect in the gallery, taking us from the first image to the last.
// -nextImage - This will equal i+1, and will create space to the right of the image that will store the next image in the gallery, and which can be brought forward when the user clicks the 'next' button.
// --Conditional statement - If nextImage > galleryImages.length, nextImage should instead equal 0. This will create a looping effect in the gallery, taking us from the last image to the first.

// 3. Create two onclick event listeners respective to the previous and next buttons.
// -previousButton
// --onClick - i--. By decrementing the value of i, the previous image in the gallery should become the current image and thus be displayed.
// -nextButton
// --onClick - i++. By incrementing the value of i, the next image in the gallery should become the current image and thus be displayed.