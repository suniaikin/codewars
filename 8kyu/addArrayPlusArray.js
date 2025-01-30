// 🎃DESCRIPTION
/* I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.P.S. Each array includes only integer numbers. Output is a number too.*/

//✅SOLUTION


const array1 = [25, 25, 25, 25];
const array2 = [100, 100, 100, 100];

function arrayPlusArray(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum = sum + arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        sum = sum + arr2[i];
    } return sum;
}

console.log(arrayPlusArray(array1, array2))

