document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');

    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target)) {
            menu.classList.remove('open');
        }
    });
});
