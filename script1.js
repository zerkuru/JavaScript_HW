/*задать температуру по Цельсию, вывести
по Фаренгейту в alert Tf = (9 / 5) * Tc + 32;*/

let cels_temp;
let far_temp;
far_temp = 0;
cels_temp = prompt("Введите температуру по Цельсию");
cels_temp = String(cels_temp);
cels_temp = Number(cels_temp);
if (cels_temp) {
    far_temp = (9 / 5) * cels_temp + 32;
    alert("Температура по Фаренгейту " + far_temp);
} else {
    alert("Введено не число!");
};

