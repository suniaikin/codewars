// 🎃DESCRIPTION

/* It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script. Return the average of the given array rounded down to its nearest integer.
The array will never be empty.*/

//✅SOLUTION

const array1 = [3, 5, 4, 4, 5, 5, 2, 5, 4, 4, 4, 3, 5, 5];

function getAverage(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    } return Math.floor(sum / marks.length);
} console.log(getAverage(array1));

// 💖BEST PRACTICE💖
//
// function getAverage (marks) {
//     return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);
// }
