const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")
const menuHamburgerClose = document.querySelector(".menu-hamburger-close")
const opacity = document.querySelector(".opacity")

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
    opacity.style.display = "block"
    menuHamburger.style.display = "none"
    menuHamburgerClose.style.display = "block"
});

menuHamburgerClose.addEventListener('click', () => {
    navLinks.classList.remove('mobile-menu')
    opacity.style.display = "none"
    menuHamburger.style.display = "block"
    menuHamburgerClose.style.display = "none"
});