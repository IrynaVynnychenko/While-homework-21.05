let kvadrat = document.querySelectorAll(".kvadrat");
let tochka = document.querySelectorAll(".tochka");


for (let i = 0; i < tochka.length; i++) {
    kvadrat[i].addEventListener('mousemove', function(e) {
        for (let j = 0; j < tochka.length; j++) {
            if (i == j) { tochka[j].style.display = 'none' } else { tochka[j].style.display = 'block' }
            if (e.layerX < 4) {
                tochka[j].style.left = '4px';
            } else if (e.layerX < (kvadrat[i].offsetWidth - 4)) {
                tochka[j].style.left = e.layerX + 'px';
            }
            if (e.layerY < 4) {
                tochka[j].style.top = '4px';
            } else if (e.layerY < (kvadrat[i].offsetHeight - 4)) {
                tochka[j].style.top = e.layerY + 'px';
            }
        }
    });
};