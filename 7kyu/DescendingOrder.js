// 🎃DESCRIPTION🎃
/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
*/

//✅SOLUTION✅

function descendingOrder(n) {
    let str = n.toString();
    let array = str.split("");
    array.sort((a, b) => b - a);
    return +array.join("");
}

