//While (факториал 5)

let a = +prompt('Введите число для возведения факториала', '');
let i = 0;
let b = 1;

while (i < a) {
    i++;
    console.log(i);
    b = b * i;
}
alert(b);

//5!=1*2*3*4*5