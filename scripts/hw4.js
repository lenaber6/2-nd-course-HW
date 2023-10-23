//Task 1
let i = 0;
while (i<2) {
    console.log('Привет!');
    i++;
}

//Task 2
let c = 1;
while (c<= 5) {
    console.log(c);
    i++;
}

//Task 3
let d = 7;
do{
    console.log(d);
    i++;
}while (d <= 22);
    
//Task 4

let obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400',
};
for (let name in obj){
console.log(`${name} - зарплата ${obj[name]} долларов`);
}

//Task 5
let n = 1000;
let num = 0;

while (n>=50) {
   n/=2;
   num++;
} 
alert(n);
alert(num);

//Task 6
let octoberFriday = 6;
for ( ; octoberFriday <=31; octoberFriday+=7){
    console.log(`Сегодня пятница ${octoberFriday}-число. Необходимо подготовить отчёт.`);

}



