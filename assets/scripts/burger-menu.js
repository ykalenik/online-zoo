const hamburger = document.querySelector('.burger-menu');
const header = document.querySelector('.header');
const logoImage = document.querySelector('.logo a img');
const nav = document.querySelector('.nav');


hamburger.addEventListener('click', () => {
    let isOpened = !hamburger.classList.contains('active');
    if (isOpened) {
        // Update logo and change background for burger-menu
        logoImage.setAttribute('src', '../../assets/images/logo_active.png');
        document.querySelectorAll('.bar').forEach((bar) => bar.setAttribute('style', 'background-color: black;'));
    } else {
        // Reset changes from above
        logoImage.setAttribute('src', '../../assets/images/logo_footer.png');
        document.querySelectorAll('.bar').forEach((bar) => bar.removeAttribute('style'));
    }
    hamburger.classList.toggle('active');
    nav.classList.toggle('nav-burger-active');
    header.classList.toggle('header-active');
});