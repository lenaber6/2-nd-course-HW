// Extra

const fibonacci = [1, 1, 2, 3, 5, 8];

// TODO: Допишите код, чтобы в консоль ниже выводились правильные значения
// Используйте метод map, чтобы получить массив fibonacci, в котором все числа умножены на 2
const multipleByTwoFib = fibonacci.map((number) => number*2);
// Используйте метод map, чтобы получить массив fibonacci, в котором к каждому числу добавили 10
const plusTenFib = fibonacci.map((number) => number + 10);
// Используйте метод filter, чтобы получить массив, в который входят числа Фибоначчи больше 3
const onlyBigFib = fibonacci.filter((number) => number>3);

console.log(multipleByTwoFib); // => [2, 2, 4, 6, 10, 16]
console.log(plusTenFib); // => [11, 11, 12, 13, 15, 18]
console.log(onlyBigFib); // => [5, 8]

// Extra
function callbackWithArrayLength(arr, callback) {
    // console.log(arr);
    callback(arr.length);
  }
  
  callbackWithArrayLength([1], (length) => {
    console.log(length);
  });
  
  callbackWithArrayLength([1, 1], (len) => {
    console.log(len);
  });
  callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
    console.log(l);
  });

  //Extra

  function log(arrItem) {
    console.log("Элемент массива:", arrItem);
}

function each(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
}

each(["Глеб", "Олег", "Татьяна", "Платон"], log);

// Extra

function square(number) {
    return number * number;
  }
  function map(arr, ruleFunction) {
    const output = [];
      // Добавил в консоль лог для отладки
      console.log('ruleFunction', square);
    for (let i = 0; i < arr.length; i++) {
      output.push(square(arr[i]));
    }
    return output;
  }
  // ОШИБКА: написано square() вместо square
  console.log(map([1, 4, 9, 16], square()));

// Task 1
const people = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];
 
// Допишите колбэк для sort по свойству age
console.log(people.sort((a, b) => a.age - b.age));
// код выше должен вывеcти =>
// [
//  { name: 'Олег', age: 7 },
//  { name: 'Анна', age: 17 },
//  { name: 'Глеб', age: 29 },
//  { name: 'Оксана', age: 47 }
// ]


// Task 2

function isPositive(number) {
   return number > 0;
  }
  function isMale(gay) {
    return gay.gender === 'male';
  }
  function filter(arr, ruleFunction) {
    const newArr = [];
    for (let item of arr) {
      if (ruleFunction(item)){
        newArr.push(item);
      }
    }
    return newArr;
  }
  console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
  
  const humans = [
     {name: 'Глеб', gender: 'male'},
     {name: 'Анна', gender: 'female'},
     {name: 'Олег', gender: 'male'},
     {name: 'Оксана', gender: 'female'},
  ];
  
  console.log(filter(humans, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]


  // Task 3

  let currentDate = new Date();
  // повторить с интервалом 3 секунды
let timerId = setInterval(() => console.log(currentDate), 3000);

// остановить вывод через 30 секунд
setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 30000);

// Fri Nov 03 2023 22:03:50 GMT+0500 (Екатеринбург, стандартное время)
// Fri Nov 03 2023 22:03:50 GMT+0500 (Екатеринбург, стандартное время)
// Fri Nov 03 2023 22:03:50 GMT+0500 (Екатеринбург, стандартное время)
// Fri Nov 03 2023 22:03:50 GMT+0500 (Екатеринбург, стандартное время)
// Fri Nov 03 2023 22:03:50 GMT+0500 (Екатеринбург, стандартное время)
// Fri Nov 03 2023 22:03:50 GMT+0500 (Екатеринбург, стандартное время)
// Fri Nov 03 2023 22:03:50 GMT+0500 (Екатеринбург, стандартное время)
// Fri Nov 03 2023 22:03:50 GMT+0500 (Екатеринбург, стандартное время)
// Fri Nov 03 2023 22:03:50 GMT+0500 (Екатеринбург, стандартное время)
// Fri Nov 03 2023 22:03:50 GMT+0500 (Екатеринбург, стандартное время)
// 30 секунд прошло


// Task 4

function delayForSecond(callback) {
  setTimeout(callback, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
});


// Task 5
// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
  setTimeout(() => {
      console.log('Прошла одна секунда');
      if(cb) { 
        	cb(); 
        }
  }, 1000);
}
// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
  console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(function() {sayHi('Глеб');});