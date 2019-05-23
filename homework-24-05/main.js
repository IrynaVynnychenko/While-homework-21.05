let c;
let str = 0;
let number = 0;

let array = [
  7,
  "привет",
  10 < 15,
  null,
  c,
  { color: "red" },
  [10, 20, 30],
  26.98
];

for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === "number") {
    number++;
  } else if (typeof array[i] === "string") {
    str++;
  } else if (Array.isArray(array[i])) {
    for (let j = 0; j < array[i].length; j++) {
      if (typeof array[i][j] === "number") {
        number++;
      }
    }
  }
}

console.log(`str: ${str}\nnumber: ${number}`);
