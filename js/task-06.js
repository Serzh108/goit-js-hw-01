"use strict";

let input;
let total = 0;

// input = 0;

do {
  input = prompt("Введите число:");
  if (!Number.isNaN(Number(input))) {
    total += Number(input);
  }  
} while (input !== null);

alert(`Общая сумма чисел равна ${total}.`);