let moon = document.getElementById('moon');
let stars = document.getElementById('stars');
let gradi = document.getElementById('gradi');
let trees = document.getElementById('trees');
let clouds = document.getElementById('clouds');
let logo = document.getElementById('logo');
let frontTrees = document.getElementById('frontTrees');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    if (value < 900){
        stars.style.left = (value) * 0.25 + 'px';
        moon.style.left = (value) * .2 + 'px';
        moon.style.top = (value) * 1 + 'px';
        gradi.style.top = (value) * 0.1 + 'px';
        trees.style.top = (value) * 0.6 + 'px';
        clouds.style.top = (value) * 0.8 + 'px';
        clouds.style.left = (value) * 0.05 + 'px';
        logo.style.top = (value) * 1 + 'px';
    }
})

