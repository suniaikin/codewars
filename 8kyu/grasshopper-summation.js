// 🎃DESCRIPTION🎃

/*
Write a program that finds the summation of every number from 1 to num (both inclusive).
The number will always be a positive integer greater than 0.

Your function only needs to return the result, what is shown between
parentheses in the example below is how you reach that result
and it's not part of it, see the sample tests.
*/

//✅SOLUTION✅

var summation = function (num) {
	let sum = 0;
	for (var i = 1; i <= num; i++) {
		sum = sum + i;
	} return sum
}

console.log(summation(5))


// 💖BEST PRACTICE💖

var summation2 = function (num) {
  return num * (num + 1) / 2;
}
console.log(summation2(5))