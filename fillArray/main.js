"use strict";
const log = console.log;

// random number
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

let arr = [];

// заполняем рандомное число в пустой массив
const fillArray = () => {
  for (let i = 0; i < 20; i++) {
    arr.push(randomInteger(-20, 20));
  }
  log(arr);
};

fillArray();

// заменяем все отрицательные числа нулем;
const replaceFromArray = () => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
      arr[i] = 0;
    }
  }
};
replaceFromArray();
log(arr);

// четный игдекс равен 0;
// === 0 && arr[i + 1] !== (arr[i+1] % 2 !== 1)
const evenNumber = () => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      if (i % 2 !== 0) {
        arr[i] = arr[i];
      } else {
        arr[i + 1] = -1;
      }
    }
  }
  return arr;
};

log(evenNumber());
