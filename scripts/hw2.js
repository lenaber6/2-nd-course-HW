// Task 1
let a = 10;
alert(a);
a = 20;
alert(a);

//Task 2
const releaseYear1stiPhone = 2007;
alert (releaseYear1stiPhone);

// Task 3
const javaScriptCreator = 'Brandan Eich';
alert (javaScriptCreator);

//Task 4
let x = 10;
let y = 2;
alert(x+y);
alert(x-y);
alert(x*y);
alert(x/y);


//Task 5
let i = 2;
let result = i**5;
alert(result);

//Task 6
a = 9;
let b = 2;
result = a % b;
alert(result);

//Task 7
let num = 1;
num +=5;
num -=3;
num *=7;
num /=3;
num++;
num--;
alert(num);

//Task 8
let age = prompt('Сколько вам лет?');
alert(age);

//Task 9
const user = {
     name: 'Vasiliy',
     age: 15,
     isAdmin: true
}
//Task 9.1
user['city of residence'] = true;

//Task 9.2
user.age = 16;

//Task 9.3
delete user['city of residence'];

//Task 9.4
let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);

//Task 10
let name = prompt('Как Ваше имя?');
alert(`Привет, ${name}!`);
