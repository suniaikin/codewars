// 🎃DESCRIPTION🎃
/*
Very simple, given a number (integer / decimal / both depending on the language),
find its opposite (additive inverse).
*/



//✅SOLUTION✅

function opposite(number) {
	return number*(-1)
}


let number = 2;
let out = opposite(number)
console.log(out)


// 💖BEST PRACTICE💖

const opposite2 = n => -n

let number2 = 2;
let out2 = opposite2(number2)
console.log(out2)
