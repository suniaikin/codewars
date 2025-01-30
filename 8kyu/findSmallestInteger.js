// 🎃DESCRIPTION
/* Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.*/

//✅SOLUTION

const array = [45, 23, 2, 3, 4, 5];

function findSmallestInt(arr) {
    let smallestInt = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallestInt) {
            smallestInt = arr[i];
        }
    } return smallestInt;
}

console.log(findSmallestInt(array));


