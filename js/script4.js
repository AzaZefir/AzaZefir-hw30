// Задание:
// Доработайте сценарий. Добавьте расчет скидки. 
// Если заказ от 500, скидка 5%, если заказ от 1000 скидка 10%, если заказ от 1500 скидка 15% и доставка бесплатная.
// Выведите пользователю стоимость заказа с учётом скидки и сумму скидки, которую он получил. Также информацию о стоимости доставки, если она была заказана.
// Используйте подходящую условную конструкцию.

let product1 = "Бумага офисная А4, 80 г/м2, 500 л";
let product2 = "Биндеры для бумаги 51 мм";
let product3 = "Ручка шариковая синяя";

let productPrice1 = 280.25;
let productPrice2 = 56;
let productPrice3 = 12.50;

let productQuantity1 = prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, 0);
let productQuantity2 = prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, 0);
let productQuantity3 = prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, 0);

let totalPriceProduct1 = productPrice1 * productQuantity1;
let totalPriceProduct2 = productPrice2 * productQuantity2;
let totalPriceProduct3 = productPrice3 * productQuantity3;

let total = totalPriceProduct1 + totalPriceProduct2 + totalPriceProduct3;
console.log(`Общая сумма по продукту '${product1}' составляет ${totalPriceProduct1}`);
console.log(`Общая сумма по продукту '${product2}' составляет ${totalPriceProduct2}`);
console.log(`Общая сумма по продукту '${product3}' составляет ${totalPriceProduct3}`);

let dicsountPercent = 0;
let isFreeShipping = false;
if (total > 500 && total < 1000) {
    dicsountPercent = 0.05;
}
else if (total > 1000 & total < 1500) {
    dicsountPercent = 0.1;
}
else if (total > 1500) {
    dicsountPercent = 0.15;
    isFreeShipping = true;
}

let sheepingPrice = 0;
let totalWithShipping = 0;
let discount = 0;

if (!isFreeShipping) {
    let shipping = confirm("Доставка курьером?");
    if (shipping) {
        sheepingPrice = 40;
    }
}

discount = total * dicsountPercent;
totalWithShipping = total - discount + sheepingPrice;

alert(`Сумма - ${total}\r\nСкидка (${dicsountPercent * 100}%) - ${discount}\r\nДоставка - ${sheepingPrice}\r\nК оплате - ${totalWithShipping}`);
