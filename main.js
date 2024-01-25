var hamburger = document.querySelector('.hamburger');

var nav = document.querySelector('nav');

var navLinks = document.querySelectorAll('nav a');

hamburger.onclick = function () {
    nav.classList.toggle('active');
}

navLinks.forEach(function (links) {
    links.addEventListener('click', function () {
        nav.classList.remove('active');
    });
})

var tog = document.querySelector('.toggle');

var body = document.querySelector('body');

var sun = document.querySelector('.bi-brightness-high');

var moon = document.querySelector('.bi-moon-stars');

tog.onclick = function () {
    tog.classList.toggle('active');
    body.classList.toggle('active');
    sun.classList.toggle('active');
    moon.classList.toggle('active');
}