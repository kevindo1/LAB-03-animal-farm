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

document.getElementById('dogImage').addEventListener('click', updateCounter, false);
let count = 0;
function updateCounter() {
    count++;
    document.getElementById('counted').innerHTML = 'The dog has been clicked ' + count + ' times.';
}

document.getElementById('catImage').addEventListener('click', updateCatCounter, false);
let catCount = 0;
function updateCatCounter() {
    catCount++;
    document.getElementById('catCounted').innerHTML = 'The cat has been clicked ' + catCount + ' times.';
}

document.getElementById('horseImage').addEventListener('click', updateHorseCounter, false);
let horseCount = 0;
function updateHorseCounter() {
    horseCount++;
    document.getElementById('horseCounted').innerHTML = 'The horse has been clicked ' + horseCount + ' times.';
}