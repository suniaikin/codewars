// 🎃DESCRIPTION
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

//✅SOLUTION

const sumMixArray = [1, "2", 3, "4", "5", 6, 7, "8"];

function getSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        array[i] = Number(array[i])
        sum += array[i];
    } return sum;
}

console.log(getSum(sumMixArray));