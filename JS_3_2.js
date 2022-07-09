// Task 2*

// Откройте в VSCode task2.json файл. Скопируйте из него JSONку, вставьте в свой код (присвоив в переменную).

// Дан массив объектов. Каждый объект является идентификационной карточкой человека. Нам нужно хранить только уникальные значения в этом массиве. Реализуйте функцию, которая будет выполнять эту работу.

// решение 1

const fs = require("fs");
let user = JSON.parse(fs.readFileSync("task2.json"))

function uniqueFunc1() {
    let unique1 = [];
    user.forEach(el => {
        if (!unique1.includes(JSON.stringify(el))) unique1.push(JSON.stringify(el))
    });
    return unique1.map(el => JSON.parse(el))
}
console.log(uniqueFunc1())

// решение 2

// let unique = Array.from(new Set(user.map((item) => JSON.stringify(item)))).map((item) => JSON.parse(item));
// console.log(unique)