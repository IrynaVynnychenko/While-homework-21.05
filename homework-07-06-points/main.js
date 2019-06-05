let kvadrat = document.querySelectorAll(".kvadrat");
let tochka = document.querySelectorAll(".tochka");

for (let i = 0; i < tochka.length; i++) {
    kvadrat[i].addEventListener('mousemove', function(e) {
        for (let j = 0; j < tochka.length; j++) {
            if (j < tochka.length / 2) {
                tochka[j].style.left = e.layerX + 'px';
                tochka[j].style.top = e.offsetY + 'px';
            } else {
                tochka[j].style.right = e.layerX + 'px';
                tochka[j].style.bottom = e.offsetY + 'px';
            }
        }
    })
};