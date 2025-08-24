// 🎃DESCRIPTION🎃
/*
Create a function that takes an integer
as an argument and returns "Even" for even numbers
or "Odd" for odd numbers.
*/

//✅SOLUTION✅
function evenOrOdd(number) {
	return number % 2 === 0 ? "Even" : "Odd";
}

let out = evenOrOdd(4);
console.log(out);


// 💖BEST PRACTICE💖
