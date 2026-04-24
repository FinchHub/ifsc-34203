// Reused from my homepage nav, just changed class names and added a toggle to
// minimize the nav when the DOM itself is tapped/clicked. without stopPropagation,
// it'll just immediately open and close the nav since it's technically clicking the
// DOM.

const toggle = document.getElementById('nav-btn');
const menu = document.getElementById('nav-link-items');

toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('open');
});

document.addEventListener('click', (e) => {
    if (!menu.contains(e.target)) {
        menu.classList.remove('open');
    }
});
