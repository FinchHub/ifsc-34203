// Reused from my homepage nav, just changed class names and added a toggle to
// minimize the nav when the DOM itself is tapped/clicked. without stopPropagation,
// it'll just immediately open and close the nav since it's technically clicking the
// DOM.
//
// The more I tested the site the more I had to go back and add, like when previewing
// the site on mobile, I noticed the menu didn't go away if the user slid the screen
// rather than tapping, so that was added via touchmove.

const toggle = document.getElementById('nav-btn');
const navMenu = document.getElementById('nav-link-items');
const navbar = document.getElementById('navbar-top');

toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('open');
    navbar.classList.toggle('open');
});

document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target)) {
        navMenu.classList.remove('open');
        navbar.classList.remove('open');
    }
});

document.addEventListener('touchmove', (e) => {
    if (!navMenu.contains(e.target)) {
        navMenu.classList.remove('open');
        navbar.classList.remove('open');
    }
});

