//Task 1

function whatIsLess(a, b) {
    let minimum;    
    if (a<=b) {
        minimum = a ;
    } else {
        minimum = b;
    }
    return minimum;
}
console.log(whatIsLess (8, 4));
console.log(whatIsLess (6, 6));

//Task 2
'use strict';
function isEven(d) {
    let result;
    if (d % 2 ===0) {
        result = "Чётное число";
        } else {
        result = "Нечётное число";
        } 
        return result;
}
console.log(isEven(16));
console.log(isEven(17));

//Task 3
function printSquare1(n) {
    const result = n**2;
    console.log(result);
}
function getSquare2(y) {
    const result2 = y**2;
    return result2;
}
printSquare1(7);
console.log(getSquare2(5));



//Task 4

function age(number) {
    let userAge = prompt('Сколько вам лет?');
    if (number>=0 && number<=12) {
        alert('Привет, друг!');
    } else if (number>=13) {
        alert('Добро пожаловать!');
    } else {
        alert('Вы ввели неправильное значение!');
    } 
}
age(userAge);

//Task 5
function isNumber(a, b) {
    if (!isNaN(Number(a)) && !isNaN(Number(b))) {
        return a * b;
    } else {
        return 'Одно или оба значения не являются числом';        
    }
}
console.log(isNumber(3, 18));
console.log(isNumber('Петя','Аня' ));
console.log(isNumber(3, 'макароны'));
console.log(isNumber(true, ''));
console.log(isNumber(3, null));

//Task 6
function cub(k) {
    let result;
    if (!isNaN(Number(k))) {
        result = k**3;
        return `n в кубе равняется ${result}`;
    } else {
         return 'Переданный параметр не является числом';
    }
}
console.log(cub(prompt('Введите число n')));

//Task 7
function getArea() {
    return  3.14 * (this.radius**2);

}
function getPerimeter() {
   return  2 * 3.14 * this.radius; 
}
const circle1 = {
    radius: 2,
    getArea: getArea,
    getPerimeter: getPerimeter,
}
console.log(circle1.getArea());
console.log(circle1.getPerimeter());

const circle2 = {
    radius: 5,
    getArea: getArea,
    getPerimeter: getPerimeter,
}
console.log(circle2.getArea());
console.log(circle2.getPerimeter());


//Task 8
function monthNumber(j){
    const month = Number(j);
    if (month === 12 || month ===1 || month ===2) {
       return 'Зима'; 
    } else if (month >= 3 && month <=5){
       return 'Весна';   
    } else if (month >= 6 && month <= 8) {
       return 'Лето';   
    }else if (month === 9 || month ===10 || month ===11) {
       return 'Осень';   
    } else {
       return 'Такого номера месяца не существует'; 
    }
}
console.log(monthNumber((prompt ('Введите номер месяца от 1 до 12'))));
