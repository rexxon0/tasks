// Напиши функцию reverseString, которая принимает строку как аргумент и возвращает её перевёрнутую версию.
//     Пример:
// javascript
// Копировать код
// reverseString("hello"); // должно вернуть "olleh"
// reverseString("JavaScript"); // должно вернуть "tpircSavaJ"
// Подсказки:
//     •	Можешь использовать методы массива, так как строки можно легко преобразовать в массив символов.
// •	Подумай о методах split(), reverse(), join().

function reverseString(text) {
  let a = ''
  for(let i = text.length; i > 0; i--) {
    a += text[i -1]
  }
  return a
}
console.log(reverseString("Agg"));

// Задача 2: Уникальные элементы массива
// Уровень сложности: средний
// Напиши функцию findUnique, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы исходного массива.
//     Пример:
// javascript
// Копировать код
// findUnique([1, 2, 3, 4, 4, 5, 5, 6]); // должно вернуть [1, 2, 3, 4, 5, 6]
// findUnique([7, 8, 8, 9, 10, 10, 11]); // должно вернуть [7, 8, 9, 10, 11]
// Подсказки:
//     •	Можешь использовать объект или Set для хранения уникальных элементов.
// •	Не забудь проверить массив на наличие дубликатов перед добавлением нового элемента.

function findUnique (arr) {
  let a = []
  arr.forEach((item)=> {
    if (a.indexOf(item) === -1) {
        a.push(item)
    }
  })
  return a
}


console.log(findUnique([1, 2, 3, 4, 4, 5, 5, 6]))
console.log(findUnique([7, 8, 8, 9, 10, 10, 11]))
console.log([1, 2, 3, 4, 4, 5, 5, 6].indexOf(0) !== -1)

// Задача 3: Четные и нечетные числа
// Уровень сложности: простой
// Напиши функцию evenOdd, которая принимает массив чисел и возвращает объект с двумя массивами: один для чётных чисел, другой для нечётных.
//     Пример:
// javascript
// Копировать код
// evenOdd([1, 2, 3, 4, 5, 6]);
// // должно вернуть { even: [2, 4, 6], odd: [1, 3, 5] }
// Подсказки:
//     •	Используй оператор % для проверки чётности числа.
// •	Можно использовать цикл for или метод forEach.

function evenOdd (arr) {
  let object = {}
  object.even = []
  object.odd = []
  arr.forEach((item)=> {
    if (item % 2 === 0) {
      object.even.push(item)
    }
    else {
      object.odd.push(item)
    }
  })
  return object
}

console.log(evenOdd([1, 2, 3, 4, 5, 6]))


// Задача 4: Факториал числа
// Уровень сложности: простой
// Напиши функцию factorial, которая принимает положительное целое число n и возвращает его факториал. Факториал числа n равен произведению всех чисел от 1 до n.
//     Пример:
// javascript
// Копировать код
// factorial(5); // должно вернуть 120, потому что 5 * 4 * 3 * 2 * 1 = 120
// Подсказки:
//     •	Можешь использовать цикл for или рекурсию для решения задачи.
function factorial(num) {
  let result = num
  for (let i = 1; i < num; i++) {
    result *= i
  }
  return result
}

let result = 2
result *= 2
console.log(factorial(5))
console.log(result )

// Задача 5: Фибоначчи
// Уровень сложности: средний
// Напиши функцию fibonacci, которая принимает число n и возвращает массив первых n чисел Фибоначчи.
// Числа Фибоначчи — это последовательность, где каждое число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, ....
// Пример:
//     javascript
// Копировать код
// fibonacci(5); // должно вернуть [0, 1, 1, 2, 3]
// fibonacci(7); // должно вернуть [0, 1, 1, 2, 3, 5, 8]
// Подсказки:
//     •	Начни с базовых чисел: 0 и 1.
// •	Можно использовать цикл для генерации последовательности.

function fibonacci (num) {
  let arr = [0, 1]
  for (let i = 1; i < num;i++){
    arr.push(arr[i - 1] + arr[i])
  }
  return arr
}

console.log(fibonacci(5))
console.log(fibonacci(7))

// Задача 6: Сумма чисел в диапазоне
// Уровень сложности: средний
// Напиши функцию rangeSum, которая принимает два числа a и b и возвращает сумму всех чисел между ними (включая сами числа a и b).
// Пример:
//     javascript
// Копировать код
// rangeSum(1, 5); // должно вернуть 15, потому что 1 + 2 + 3 + 4 + 5 = 15
// rangeSum(3, 7); // должно вернуть 25, потому что 3 + 4 + 5 + 6 + 7 = 25
// Подсказки:
//     •	Используй цикл for для прохождения по диапазону.
// •	Убедись, что правильно обрабатываешь случай, если a > b.

function rangeSum(a,b) {
  let sum = 0
  for (let i = a; i < b + 1 ; i++) {
    sum +=  i
  }
  return sum
}

console.log(rangeSum(1, 5)) // должно вернуть 15, потому что 1 + 2 + 3 + 4 + 5 = 15)
console.log(rangeSum(3, 7))
console.log(rangeSum(5,6))

// Задача 7: Палиндром
// Уровень сложности: средний
// Напиши функцию isPalindrome, которая принимает строку и проверяет, является ли эта строка палиндромом (читается одинаково в обоих направлениях).
// Пример:
//     javascript
// Копировать код
// isPalindrome("madam"); // должно вернуть true
// isPalindrome("hello"); // должно вернуть false
// Подсказки:
//     •	Игнорируй пробелы и различия между заглавными и строчными буквами.
// •	Можно использовать методы split(), reverse(), join().

function isPalindrome(text) {
  let a = ""
  for(let i = text.length; i > 0; i--) {
    a += text[i -1]
  }
  return a === text;
}

console.log(isPalindrome("madam"))
console.log(isPalindrome("hello"))

// Задача 8: Подсчет гласных
// Уровень сложности: средний
// Напиши функцию countVowels, которая принимает строку и возвращает количество гласных букв (a, e, i, o, u) в строке.
//     Пример:
// javascript
// Копировать код
// countVowels("hello world"); // должно вернуть 3 (гласные: e, o, o)
// countVowels("javascript"); // должно вернуть 3 (гласные: a, a, i)
// Подсказки:
//     •	Используй метод toLowerCase() для обработки строки без учёта регистра.
// •	Можешь пройтись по каждому символу строки через цикл или использовать метод filter().


function countVowels(text) {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'y']
let result = ''
  let a = text.toLowerCase()
 a.split('').forEach(e => {
    result += vowels.filter((word) => word === e )
  })
  return `${result.length} гласные:${result}`
}

console.log(countVowels('hello world'))
console.log(countVowels("javascript"))

// Задача 9: Массив в уникальные пары
// Уровень сложности: средний
// Напиши функцию pairArray, которая принимает массив и возвращает массив всех возможных уникальных пар (без повторов).
// Пример:
//     javascript
// Копировать код
// pairArray([1, 2, 3]);
// // должно вернуть [[1, 2], [1, 3], [2, 3]]
// Подсказки:
//     •	Пройди по массиву с вложенным циклом.
// •	Убедись, что одна и та же пара не появляется дважды.

function pairArray(arr) {
  result = []

  arr.forEach(e => {
    for (let i = 0; i < arr.length;i++) {
      let arr2 = [e,]
    }

    result.push([e,e])
  })
}