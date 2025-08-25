// 🎃DESCRIPTION🎃
/*
Complete the square sum function so that
it squares each number passed into it and
then sums the results together
*/


//✅SOLUTION✅

function squareSum(numbers){
	let sum = 0;
	for (let i = 0; i < numbers.length; i++){
		sum += numbers[i]**2
	} return sum
}

let array = [2, 2];
let out = squareSum(array);
console.log(out);


// 💖BEST PRACTICE💖

function squareSum2(numbers){
	return numbers.reduce((a, b) => a + b * b);
}

let array2 = [1, 1];
let out2 = squareSum2(array2);
console.log(out2);
