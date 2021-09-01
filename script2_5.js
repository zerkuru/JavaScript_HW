"use strict";
/*. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических
операций
(использовать функции из задания 4) и вернуть полученное значение.*/

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

function mathOperation(arg1, arg2, oper_name) {
    switch (oper_name) {
        case "Addition":
            alert("Сумма " + Addition(arg1, arg2));
            break;
        case "Substraction":
            alert("Разность " + Substraction(arg1, arg2));
            break;
        case "Multiplication":
            alert("Произведение " + Multiplication(arg1, arg2));
            break;
        case "Division":
            alert("Частное " + Division(arg1, arg2));
            break;
        default:
            alert("Не вышло посчитать");
    };
};

let a = +(prompt("Введите первое число:"));
let b = +(prompt("Введите второе число:"));

if (isNaN(a * b)) {
    alert("Не получилось ввести числа");
}
else {
    let sign_operation = prompt("Введите знак операции (+ - * /)");
    let opertion_name = "";
    if (sign_operation == "+") {
        opertion_name = "Addition";
    }
    else if (sign_operation == "-") {
        opertion_name = "Substraction";
    }
    else if (sign_operation == "*") {
        opertion_name = "Multiplication";
    }
    else if (sign_operation == "/") {
        opertion_name = "Division";
    }
    else {
        alert("Не получилось ввести операцию! ")
    };

    if (opertion_name != "") {
        mathOperation(a, b, opertion_name);
    };
};
