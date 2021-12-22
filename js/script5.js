// Задание:
// Замените условные конструкции на тернарный оператор, где это возможно.

let age = +prompt("Введите ваш возраст");
let technology = prompt("Ведите 1 или 2. 1 - JavaScript. 2 - C#");
let expirience = prompt("Введите опыт работы в годах.");

let adult, specialization, position;

adult = age > 18 ? "adult" : "not adult";
specialization = technology == 1 ? "webd" : "ui";

if (expirience == 0) {
    position = "Без опыта работы";
}
else if (expirience > 0 && expirience < 1.5) {
    position = "Junior";
}
else if (expirience > 1.5 && expirience < 3) {
    position = "Middle";
}
else if (expirience > 3) {
    position = "Senior";
}
else {
    position = "another";
}

let result = `Возраст: ${adult}\r\nСпециализация: ${specialization}\r\nПозиция: ${position}`;
alert(result);