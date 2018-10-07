
let mainHeading = document.querySelector('.header__hero-heading');
let mainHeadingLastChar = document.querySelector('.header__hero-heading span:last-of-type');
let elementsUnderMainHeading = document.querySelectorAll('.header__hero-heading-secondary, .header__hero-list, .header__hero-btn-wrap');
let heroBtnsWrap = document.querySelector('.header__hero-btn-wrap');
let heroImages = document.querySelectorAll('.header__hero-img');


window.addEventListener('load', (e) => {
    mainHeading.classList.add('loaded');
});

mainHeadingLastChar.addEventListener('animationend', (e) => {
    elementsUnderMainHeading.forEach((el) => {
        el.classList.add('fade-in');
    });
});

heroBtnsWrap.addEventListener('transitionend', (e) => {
    heroImages.forEach((el) => {
        el.classList.add('transform-in');
    });
});




/******  Stats numbers increasing fast  *******/
let statOne = document.querySelector('.stats__number--one');
let numOne = 1; 
let clearOne = setInterval(() => { 
    numOne++;
    statOne.textContent = numOne;
    if (numOne === 35) {
        clearInterval(clearOne);
    } 
}, 40);
    
let statTwo = document.querySelector('.stats__number--two');
let numTwo = 1; 
let clearTwo = setInterval(() => { 
    numTwo++;
    statTwo.textContent = numTwo;
    if (numTwo === 12) {
        clearInterval(clearTwo);
    } 
}, 120);
    
let statThree = document.querySelector('.stats__number--three');
let numThree = 1; 
let clearThree = setInterval(() => { 
    numThree++;
    statThree.textContent = numThree;
    if (numThree === 100) {
        clearInterval(clearThree);
    } 
}, 15);

let statFour = document.querySelector('.stats__number--four');
let numFour = 1; 
let clearFour = setInterval(() => { 
    numFour++;
    statFour.textContent = numFour;
    if (numFour === 140) {
        clearInterval(clearFour);
    } 
}, 10);




