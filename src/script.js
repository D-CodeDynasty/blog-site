
const mobileMenu = document.querySelector('.mobile-menu');

const mobileIcon = document.querySelector('.mobile-icon');


mobileIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
})