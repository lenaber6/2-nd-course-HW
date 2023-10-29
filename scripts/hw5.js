'use strict';// use strict помещать в самое начало файла для корректной работы.
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
function printAge(number) {
    if (number>=0 && number<=12) {
        alert('Привет, друг!');
    } else if (number>=13) {
        alert('Добро пожаловать!');
    } else {
        alert('Вы ввели неправильное значение!');
    } 
}
printAge(number(prompt('Сколько вам лет?')));

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
    return  Math.PI * (this.radius**2);// Math.PI = 3.14, число Пи

}
function getPerimeter() {
   return  2 * Math.PI * this.radius; 
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


