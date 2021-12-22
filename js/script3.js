// Задание:
// Поменяйте switch на if...else. Поведение сценария, после изменений, должно остаться прежним (обратите внимание на значения USA и Great Britain).

/*
let country = prompt("введите название страны");

switch (country)
{
    case "USA":
    case "Great Britain":
        alert("Английский язык");
        break;
    case "Germany":
        alert("Немецкий язык");
        break;
    case "France":
        alert("Французский язык");
        break;

    default:
        alert("Указанной страны нет в списке");
        break;

} */

let country = prompt("введите название страны");

if (country == "USA" || country == "Great Britain") {
    alert("Английский язык");
}
else if (country == "Germany") {
    alert("Немецкий язык");
}
else if (country == "France") {
    alert("Французский язык");
}
else {
    alert("Указанной страны нет в списке");
}