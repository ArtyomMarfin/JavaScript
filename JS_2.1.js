// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

// for (let a = 2, i = 1; i < 11; i++) {
//     console.log(a ** i);
//   }
// три часа на выполнение. Артём, долго. Затык - писал "let" перед "i". 


// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

// const pow = function (counter ){
//   for (let i = 1; i <= counter; i++) {
//   console.log(2 ** i);
//   }
// }
// pow(10)

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

// let smile = ':)'
// for (let i = 1; i < 6; i++) {
//   console.log (smile.repeat(i))
// }

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

// function sm (str, numberOfRows) {
//   for (let i = 1; i <= numberOfRows; i++)
//   console.log (str.repeat(i))
// }

// sm (':)', 10)

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'