"use strict";

const credits = 23580;

const pricePerDroid = 3000;

let amountDroid = prompt('Введите количество покупаемых дроидов:');

if (amountDroid === null) {
  console.log('Отменено пользователем!');
} else {
  while (Number.isNaN(Number(amountDroid))) {
    amountDroid = prompt('Введите количество покупаемых дроидов(число!):');
  }

  const totalPrice = amountDroid * pricePerDroid;
  if (credits < totalPrice) {
    console.log('Недостаточно средств на счету!');
  } else {
    const restCredits = credits - totalPrice;
    console.log(`Вы купили ${amountDroid} дроидов, на счету осталось ${restCredits} кредитов.`);
  }
}
