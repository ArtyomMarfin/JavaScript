// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

for (let a = 2, i = 1; i < 11; i++) {
    console.log(a ** i);
  }


// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

const pow = function (counter ){
  for (let i = 1; i <= counter; i++) {
  console.log(2 ** i);
  }
}
pow(10)

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let smile = ':)'
for (let i = 1; i < 6; i++) {
  console.log (smile.repeat(i))
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

function printSmile (stroka, numberOfRows) {
  for (let i = 1; i <= numberOfRows; i++)
  console.log (stroka.repeat(i))
}

printSmile (':)', 10)

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'

function getWordStructure(word) {
  const vowels = 'aeiouy'.split('');
  const consonants = 'bcdfghjklmnpqrstvwxz'.split('');

let vowelsCount = 0;
let consonantsCount = 0;

for (const char of word.toLowerCase()) {
   if(vowels.includes(char)) vowelsCount++
    else if (consonants.includes(char)) consonantsCount++
}
console.log (`В слове ${word} : ${vowelsCount} гласных и ${consonantsCount} согласных букв`)
}

getWordStructure("Check-list")

// function getWordStructure2 (word) {
//   console.log(`В слове ${word} содержится 
//   ${(word.match(/[aeiouy]/gi)) ? (word.match(/[aeiouy]/gi)).lenght : 0} гласных и ${(word.match(/[bcdfghjklmnpqrstvwxz]/gi)) ? (word.match(/[bcdfghjklmnpqrstvwxz]/gi)).lenght : 0} согласных букв`)
// }

// getWordStructure2 ('llll')

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'

function isPalindrom(word) {
  word = word.length
    for(let i=0, j=word.length-1; i<word.length, j>=0; i++, j--) {
      if (word [i] !==word[j]) {
        return false
      }
    } 
    return true
    }

console.log(isPalindrom('Abba'))