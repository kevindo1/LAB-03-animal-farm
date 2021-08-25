// import functions
const dogSound = document.getElementById('dogSound');
const dogImage = document.getElementById('dogImage');

const catSound = document.getElementById('catSound');
const catImage = document.getElementById('catImage');

const horseSound = document.getElementById('horseSound');
const horseImage = document.getElementById('horseImage');
// reference needed DOM elements


// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)

dogImage.addEventListener('click', () => {
    dogSound.play();
});

catImage.addEventListener('click', () => {
    catSound.play();
});

horseImage.addEventListener('click', () => {
    horseSound.play();
});