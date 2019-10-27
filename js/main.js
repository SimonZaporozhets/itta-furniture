var btn = document.querySelector(".btn-scrollTop");
var bodyy = document.querySelector("body,html");

btn.addEventListener('click', function() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
});


var burger = document.querySelector(".menu-burger");
var burgerMenu = document.querySelector(".side-menu");
var closeMenu = document.querySelector(".close-menu");

burger.addEventListener('click', function() {
    
    burgerMenu.classList.toggle("translate-menu");
    
})
closeMenu.addEventListener('click', function() {
    
    burgerMenu.classList.toggle("translate-menu");
    
});


$('.about-slider').slick({
    infinite: true,
    slidesToShow: 3,
    nextArrow: $('.next-slide'),
    prevArrow: $('.prev-slide'),
    dots: false
});