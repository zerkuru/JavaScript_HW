"use strict";
/*Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
и возвращать результат.
Обязательно использовать оператор return.*/

function Addition(num1, num2) {
    return (num1 + num2);
};

function Substraction(num1, num2) {
    return (num1 - num2);
};

function Multiplication(num1, num2) {
    return (num1 * num2);
};

function Division(num1, num2) {
    return (num1 / num2);
};


let a = +(prompt("Введите первое число:"));
let b = +(prompt("Введите второе число:"));

if (isNaN(a * b)) {
    alert("Не получилось ввести числа");
}
else {
    alert("Сумма " + Addition(a, b));
    alert("Разность " + Substraction(a, b));
    alert("Произведение " + Multiplication(a, b));
    alert("Частное " + Division(a, b));
}

