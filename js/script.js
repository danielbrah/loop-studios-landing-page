const navOpen = document.getElementById('nav-open')
const navClose = document.getElementById('nav-close')
const navMenu = document.getElementById('hero__nav__menu__mobile')
navOpen.addEventListener('click', () =>{
    navMenu.style.left = '0px'
    navMenu.style.opacity = '1'
    navMenu.style.visibility = 'visible'
})

navClose.addEventListener('click', () =>{
    navMenu.style.left = '-5px'
    navMenu.style.opacity = '0'
    navMenu.style.visibility = 'hidden'
})