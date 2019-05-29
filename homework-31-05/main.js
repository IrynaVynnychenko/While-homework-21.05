let images_big = document.querySelector('#images');
let b = document.querySelectorAll('.subimage');
const c = document.querySelector('#images').src;

for (let i = 0; i < b.length; i++) {
    b[i].addEventListener('mouseover', function() {
        images_big.src = b[i].src;
    });
    b[i].addEventListener('mouseover', function() {
        images_big.style.transform = 'scale(1.1)';
    });

    b[i].addEventListener('mouseout', function() {
        images_big.style.transform = 'scale(1)';
    });
    b[i].addEventListener('mouseout', function() {
        images_big.src = c;
    });
};