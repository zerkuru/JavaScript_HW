"use strict";

/*Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name
и price, сохраните их как свойства объекта. */

//s5
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - (this.price / 100 * 25);
};

const new_prod = new Product('Toy car', 124);
new_prod.make25PercentDiscount();

console.log(new_prod);



//s6


class Products6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price - (this.price / 100 * 25);
    }
}

const prod_new = new Products6('Toy bear', 345);
prod_new.make25PercentDiscount();

console.log(prod_new);