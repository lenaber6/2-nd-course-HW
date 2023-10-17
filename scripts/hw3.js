//Task 1
let passward = '123456';
let yourPassward = prompt('Введите пароль');
if(passward === yourPassward){
    alert('Пароль введён верно.');
}else{
    alert('Пароль введён неправильно!');
}
 
//Task 2
let c = 5;
if (c>0 && c<10){
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Task 3
let d = 145;
let e = 56;
let result = (d>100 || e>100)? 'Верно':'Неверно';
console.log(result);
    
//Task 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));


//Task 5
let monthNumber = Number(prompt('Введите номер месяца года, чтобы определить сезон'));
switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        alert('Зима');
        break;
    case 3:
    case 4:
    case 5:
        alert('Весна');
        break;
    case 6:
    case 7:
    case 8:
         alert('Лето');
         break;
    case 9:
    case 10:
    case 11:
         alert('Осень');
         break;

    default : monthNumber>=13;
         alert('Такого месяца не существует');
        break;
}
