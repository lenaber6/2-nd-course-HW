//Task 1
const numbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i]);
	if (numbers[i]===10) {
        break;
    }
}
//Task 2A
const arr = [1, 5, 4, 10, 0, 3];
arr.forEach((el, index) => {
	if (el === 4) {
    console.log(`${index}`);
    }
});
//Task 2B
const numbs = [1, 5, 4, 10, 0, 3];
console.log(numbs.indexOf (4));

//Extra
let gr = 'vau';
let arGr = gr.split('');
console.log(arGr);


let berry = ['r', 'a', 's', 'p', 'b', 'e', 'r', 'r', 'y'];
let berry1 = berry.sort();
console.log(berry1);

//Task 3
const arr1 = [1, 3, 5, 10, 20];
const str = arr1.join(' ');
console.log(str);

//Task 4
const array1 = [];
for (let f = 0; f < 3; f++) {
    const array2 = [];
    for (let m = 0; m < 3; m++) {
        array2.push(1);        
    }
    array1.push(array2);
}
console.log(array1);

//Task 5
const arr5 = [1, 1, 1];
for (let a = 0; a < 3; a++) {
arr5.push(2,);    
}
console.log(arr5);

//Task 6
const arr2 = [9, 8, 7, 'a', 6, 5];
const sortNumbers = arr2.sort();
sortNumbers.pop();
console.log(sortNumbers);

//Task 7
const arr3 = [9, 8, 7, 6, 5];
const guessNumber = Number(prompt('Угадай число, которое есть в коробочке'));
if (arr3.includes(guessNumber)) {
    alert('Угадал!');
} else {
    alert('Не угадал!');
}
//Task 8
let letters = 'abcdef';
const reverseLetters = letters.split(''). reverse(). join('');
console.log(reverseLetters);

//Task 9
const arr9 = [
    [1, 2, 3,],
    [4, 5, 6]
];
const arr10 = arr9.flat();
console.log(arr10);

//Task 10
const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array10.length - 1; i++) {
    sum = array10[i]+ array10[i + 1];
    console.log(sum);
}

//Task 11
const arr4 = [2, 3, 4, 5];
const square = arr4.map(item => item**2);
console.log(square);

//Task 12
function getLengthWords(words) {
    return words.map((word) => word.length);
}
console.log(getLengthWords('один', 'два', 'три'));

//Task 13
function filterPositive(array) {
    let result = [];
    for (let n = 0; n < array.length; n++) {
         if (array[n] < 0) {
            result.push(array[n]);
         }          
    }
    return result;
  }
console.log(filterPositive([-1, 0, 5, -10, 56])); // => [-1, -10]
console.log(filterPositive([-25, 25, 0, -1000, -2])); // => [-25, -1000, -2]