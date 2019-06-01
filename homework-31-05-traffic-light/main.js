// for (let i = 0; i < red_lights.length; i++) {

//     red_lights[i].addEventListener('mouseover', function() {
//         for (let i = 0; i < red_lights.length; i++) {
//             red_lights[i].style.backgroundColor = green_color;
//             green_lights[i].style.backgroundColor = red_color;
//         }
//     });

//     red_lights[i].addEventListener('mouseout', function() {
//         for (let i = 0; i < red_lights.length; i++) {
//             red_lights[i].style.backgroundColor = red_color;
//             green_lights[i].style.backgroundColor = green_color;
//         }
//     });

// }


// for (let i = 0; i < green_lights.length; i++) {

//     green_lights[i].addEventListener('mouseover', function() {
//         for (let i = 0; i < green_lights.length; i++) {
//             red_lights[i].style.backgroundColor = green_color;
//             green_lights[i].style.backgroundColor = red_color;
//         }
//     });

//     green_lights[i].addEventListener('mouseout', function() {
//         for (let i = 0; i < green_lights.length; i++) {
//             red_lights[i].style.backgroundColor = red_color;
//             green_lights[i].style.backgroundColor = green_color;
//         }
//     });
// }

let green_lights = document.querySelectorAll('.green_light');
let red_lights = document.querySelectorAll('.red_light');
const green_color = "rgb(0, 255, 0)";
const red_color = "rgb(220, 20, 60)";
let change = document.querySelector('button');

change.addEventListener('click', function() {

    for (let j = 0; j < green_lights.length; j++) {
        if (window.getComputedStyle(green_lights[j]).getPropertyValue("background-color") == green_color) {
            red_lights[j].style.backgroundColor = green_color;
            green_lights[j].style.backgroundColor = red_color;
        } else {
            red_lights[j].style.backgroundColor = red_color;
            green_lights[j].style.backgroundColor = green_color;
        }
        console.log(green_lights[j]);
    }
});