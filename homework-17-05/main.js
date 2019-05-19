let year = 2016;
let message;

if (year < 2013) {
    message = 'Курс 8 грн / 1$';
} else if (year == 2013) {
    message = 'Курс 7,99 грн / 1$';
} else if (year >= 2014 && year <= 2015) {
    message = 'Курс 15,76 грн / 1$';
} else if (year <= 2006) {
    message = 'Курс 5,05 грн / 1$';
} else if (typeof year != 'number') {
    message = 'Какой-то неправильный курс';
} else {
    message = 'Прекрасный год с чудесной погодой';
}

console.log(message);

// массив с разными типами данных: число «number», строка «string», булевый (логический) тип «boolean», специальное значение «null», специальное значение «undefined», объекты« object», массив

let number = 7;
let a = "привет";
let boolean = 10 < 15;
let b = null;
let c;
let d = { color: "red" };
let e = [10, 20, 30];

let Array = [number, a, boolean, b, c, d, e];

console.log(Array);