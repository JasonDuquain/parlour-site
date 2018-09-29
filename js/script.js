
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





