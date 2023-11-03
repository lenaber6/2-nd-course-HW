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

// Task 11
function game2() {
   let fruit = [
   'Яблоко', 
    'Груша',
     'Дыня', 
     'Виноград', 
     'Персик',
      'Апельсин',
       'Мандарин',
   ];
fruit = fruit.sort(() => Math.random() - 0.5);
alert(fruit);
let qu1 = prompt('Чему равнялся первый элемент массива?');
let qu2 = prompt('Чему равнялся последний элемент массива?');
   if (qu1 === fruit[0] && qu2 === fruit[fruit.length - 1]) {
      alert('Ура, Вы угадали оба элемента массива!');
   } else if (qu1 === fruit[0] || qu2 === fruit[fruit.length - 1]) {
      alert('Вы были близки к победе!');
   } else {
      alert('Сожалею, но это неверный ответ!');
   } 
}
