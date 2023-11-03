// Extra Time
let currentDateW = new Date();
console.log(currentDateW.toLocaleTimeString('ru-RU'));// При работе со временем в JavaScript нам поможет метод toLocateTimeString()


// Extra Date
const currentDateY = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(currentDateY.toLocaleDateString('ru-RU', options));//Чтобы получить название дня/недели/месяца/года, можно использовать встроенный метод JavaScript toLocaleDateString(), где первым аргументом мы передаем locales (признак языка), а вторым формат отображения:



// Task 1
let str = 'js';
str = str.toUpperCase();
console.log(str); // 'JS', это уже новое значение переменной str


//Extra
const answerUser = prompt('Без рук, а рисует. Без зубов, а кусает'); // сохраняем
// ответ пользователя в переменную answerUser
const answer = 'мороз'; // храним правильный ответ в переменной answer

if (answerUser.toLowerCase() === answer.toLowerCase()) { // проверяем, совпадает ли строка, полученная от пользователя, с правильным ответом
	// и теперь нам не важно, в каком регистре какие буквы ввел пользователь, мы все приводим к нижнему регистру
	alert('Это правильный ответ!'); // это сообщение, если совпала
} else {
	alert(`Не угадал, правильный ответ: ${answer}`); // а это, если не совпала
}

// Task 2
function filterStr(array, searchWord) {
  return array.filter((product) => 
	product.toLowerCase().startsWith(searchWord.toLowerCase())) ;  
}
console.log(filterStr(['конфеты Мишка', 'МАК КОНФЕТЫ', 'пастила Конус', 'КоНфЕтЫ Дружок', 'конфета Джек'], 'конфеты'));
// Текущий код не будет работать корректно, так как функция forEach не предназначена для возврата значения (лучше воспользоваться filter). Также код нужно обернуть в отдельную функцию, как это требуется по условию задачи.


// Task 3
   const numeral = 32.58884;
   const result1 = Math.floor(numeral);
   const result2 = Math.ceil(numeral);
   const result3 = Math.round(numeral); 
console.log(result1);
console.log(result2);
console.log(result3);

// Task 4A
const array = [52, 53, 49, 77, 21, 32];
let result4;
let result5;
for (let i = 0; i < array.length; i++) {
    result4 = Math.min(...array);
    result5 = Math.max(...array); 
      
}
     console.log(result4);
     console.log(result5);  
// Цикл здесь не нужен, так как Math.min и Math.max можно применить один раз. Код внутри цикла неэффективен и будет возвращать один и тот же результат на каждой итерации.


     // Task 4B

     const arr = [52, 53, 49, 77, 21, 32];
     let result6 = Math.min(...arr);
     let result7 = Math.max(...arr);
          console.log(result6);
          console.log(result7);    

// Task 5
function getRandom(minValue, maxValue) {
     return Math.round(Math.random()* (maxValue - minValue)) + minValue;
}
console.log(getRandom(1, 10));


// Task 6
function getRandomArrNumbers(n) {
    let result = [];
    for (let i = 0; i < n / 2; i++) {
        result.push(Math.floor(Math.random()* n)); 
    }
    return result;
}
console.log(getRandomArrNumbers(6)); 

// Task 7
function getNumbers (min, max){
   return Math.floor(Math.random() * (max-min + 1)+min); 
}
console.log(getNumbers(3, 9));


//Task 8A
let currentDateA = new Date();
console.log(currentDateA);

// Extra
let myDate = new Date();
console.log(+myDate);
let days45 = 45*24*60*60*1000;
let searchDateA = myDate - days45;
let daysAgo45 = new Date(searchDateA);
console.log(daysAgo45);

// Task 8B
let currentDateB = new Date(); // получаем текущую дату
console.log(+myDate); //  + преобразует дату в миллисекунды
let dayToday = 0 * 24 * 60 * 60 * 1000; // переводим дни в миллисекунды
let searchDateB = currentDateB - dayToday; // получаем колличество миллисекунд, текущая дата — 20 дней
let dayAgainToday = new Date(searchDateB); // Дата сегодня
console.log(dayAgainToday); //

// Task 8C
let currentDateC = new Date("31 October 2023");
console.log(currentDateC); 

// Task 8D

let currentDateD = new Date("10/31/2023");
console.log(currentDateD); 

// Task 9A
let currentDate = new Date();// получаем текущую дату
console.log(+currentDate);//преобразуем текущую дату в миллисекунды
let date73 = 73*24*60*60*1000; // 73 дня в миллисекунды
let dateIn73Days = +currentDate + date73; //складываем текущие и через 73 дня миллисекунды
let searchDate73 = new Date(dateIn73Days);//дата через 73 дня
console.log(searchDate73);

// Task 9B
let currentDateX = new Date();// получаем текущую дату
currentDateX.setDate(currentDateX.getDate() +73);
console.log(currentDateX);

// Task 10
function writeDate(date) {
    const days = [   // создадим массив, где будем хранить названия дней недели на русском
        "воскресенье", 
        "понедельник", 
        "вторник", 
        "среда", 
        "четверг", 
        "пятница", 
        "суббота",
    ];
const months = [  // создадим массив, где будем хранить названия месяцев на русском  
    "января",       
    "февраля", 
    "марта", 
    "апреля", 
    "мая", 
    "июня",
    "июля", 
    "августа", 
    "сентября", 
    "октября", 
    "ноября", 
    "декабря",
];
 return  `Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это ${days[date.getDay()]}.
 \nВремя: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`; // выводит число, месяц на русском, год, день недели на русском, выводит час \n = </br>, разрыв абзаца в js, выводит час, минуты, выводит секунды
}
console.log(writeDate(new Date()));