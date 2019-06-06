let kvadrat = document.querySelectorAll(".kvadrat");
let tochka = document.querySelectorAll(".tochka");

for (let i = 0; i < tochka.length; i++) {
    kvadrat[i].addEventListener('mousemove', function(e) {
        for (let j = 0; j < tochka.length; j++) {
            if (i == j) { tochka[j].style.display = 'none' } else { tochka[j].style.display = 'block' }
            tochka[j].style.left = e.layerX + 'px';
            tochka[j].style.top = e.offsetY + 'px';
        }
    });
};