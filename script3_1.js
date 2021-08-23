"use strict";

//С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль, с помощью console.log) от 0 до 10 
//включительно

for (let i = 0; i <= 10; i += 1) {
    switch (i) {
        case (0):
            console.log(i + " - это ноль");
            break;
        default:
            switch (i % 2) {
                case (0):
                    console.log(i + " - это четное число");
                    break;
                default:
                    console.log(i + " - это нечетное число");
            };

    };
};
