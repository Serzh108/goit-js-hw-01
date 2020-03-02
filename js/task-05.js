"use strict";

let price;

let countryName = prompt("Введите страну:");

countryName = countryName.toUpperCase();

switch (countryName) {
  case "КИТАЙ":
    price = 100;
    break;

  case "ЧИЛИ":
    price = 250;
    break;

  case "АВСТРАЛИЯ":
    price = 170;
    break;

  case "ИНДИЯ":
    price = 80;
    break;

  case "ЯМАЙКА":
    price = 120;
    break;

    default: 
    alert('В вашей стране доставка недоступна!');
}

console.log(`Доставка в ${countryName} будет стоить ${price} кредитов.`);