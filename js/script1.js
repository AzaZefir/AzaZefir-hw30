// Задание:
// Поменяйте if...else на switch

// let value = +prompt("Введите число 1 или 2");

// if(value == 1)
// {
//     alert("Вы ввели число 1");
// }
// else if(value == 2)
// {
//     alert("Вы ввели число 2");
// }
// else 
// {
//     alert("Вы ввели неправильное значение");
// }

let value = +prompt("Введите число 1 или 2");

switch (value) {
    case 1:
        alert("Вы ввели число 1");
        break;
    case 2:
        alert("Вы ввели число 2");
        break;
    default:
        alert("Вы ввели неправильное значение");
        break;
}