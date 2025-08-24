// 🎃DESCRIPTION🎃
/* Write a function which calculates the average
of the numbers in a given array.
Note: Empty arrays should return 0.
*/

//✅SOLUTION✅
function findAverage(array) {
	if (array.length === 0) {
		return 0;
	}
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum = sum + array[i];
	}
	return sum / array.length;
}

let arr = [1, 2, 3, 5];
let out = findAverage(arr);
console.log(out)

// 💖BEST PRACTICE💖
