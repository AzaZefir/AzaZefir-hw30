// Задание:
// Переменная season может принимать 4 значения: 1, 2, 3 или 4. Если значение переменной 1 в переменную result запишите значение "зима",
// если значение 2 - "весна" и т.д. Выведите значение переменной result на экран. Решите задачу используя конструкцию switch.


let season = prompt("Введите значение 1, 2, 3 или 4");
let result;

switch (season) {
    case "1":
        result = "Зима";
        break;
    case "2":
        result = "Весна";
        break;
    case "3":
        result = "Лето";
        break;
    case "4":
        result = "Осень";
        break;
    default:
        result = "Введите правильное значение";
        break;
}

alert(result);