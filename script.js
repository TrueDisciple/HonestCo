let moon = document.getElementById('moon');
let stars = document.getElementById('stars');
let gradi = document.getElementById('gradi');
let mount_back = document.getElementById('mount_back');
let mount_front = document.getElementById('mount_front');
let text = document.getElementById('center_text');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = (value) * 0.25 + 'px';
    moon.style.top = (value) * 1.05 + 'px';
    mount_back.style.top = (value) * 0.5 + 'px';
    text.style.top = (value+100) * 0.6 + 'px';
})