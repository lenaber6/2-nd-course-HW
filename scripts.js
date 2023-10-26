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
