let green_lights = document.querySelectorAll('.green_light');
let red_lights = document.querySelectorAll('.red_light');
const green_color = "#00FF00";
const red_color = "#DC143C";

for (let i = 0; i < red_lights.length; i++) {

    red_lights[i].addEventListener('mouseover', function() {
        red_lights[i].style.backgroundColor = green_color;
        green_lights[i].style.backgroundColor = red_color;
    });

    red_lights[i].addEventListener('mouseout', function() {
        red_lights[i].style.backgroundColor = red_color;
        green_lights[i].style.backgroundColor = green_color;
    });
}