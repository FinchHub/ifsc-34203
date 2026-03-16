/* In older versions of this repo, this JS was AI generated.i I didn't know how to code in JS
 * and since the code wasn't extremely long, I was indifferent just generating it. Got tired of not 
 * knowing it though, so I spent a couple days learning so I could rebuild it by hand. This is pretty
 * dead simple, but is my first handwritten JS code that's actually going into a site I'm building.*/

const toggle = document.getElementById('nav-toggle');
const menu = document.getElementById('nav-menu');


toggle.addEventListener("click", () =>
    menu.classList.toggle("open"))

/* Had AI help with this one. Needed to put a delay on the cards to show the animation. */
document.querySelectorAll('.content ul li').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.href;
        setTimeout(() => {
            window.location = href;
        }, 200);
    });
});
