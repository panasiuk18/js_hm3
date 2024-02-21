// 5.  Напиши скрипт, який рахує суму елементів двох масивів.

//         const array1 = [5, 10, 15, 20];
//         const array2 = [10, 20, 30];
const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

const sum1 = array1.reduce((total, num) => total + num, 0);
const sum2 = array2.reduce((total, num) => total + num, 0);

const totalSum = sum1 + sum2;

console.log(totalSum);