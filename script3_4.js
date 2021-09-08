"use strict";

/*Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
2. Отсортируйте товары по цене (от низкой цены к высокой)*/

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let new_prod = products;
const photos_prod = new_prod.filter(elem => "photos" in elem && elem.photos.length > 0);
console.log(photos_prod);

const sorted_price_low_to_high = products.sort(function (elem1, elem2) {
    if (elem1.price > elem2.price)
        return 1;
    if (elem1.price < elem2.price)
        return -1;
    return 0
});
console.log(sorted_price_low_to_high);