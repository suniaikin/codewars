//🎃DESCRIPTION
//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

//✅SOLUTION
function makeNegative(num) {
    if (num > 0) {
        num = num * (-1);
    } else if (num < 0) {
        num;
    } else {
        num = 0;
    }
    return num
}

console.log(makeNegative(-1))

//💖BEST PRACTICE💖

// function makeNegative(num) {
//     return -Math.abs(num);
// }