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
	let sum = 0
	for (let i = 0; i < array.length; i++) {
		sum += array[i]
	}
	return sum / array.length

}

console.log(findAverage([1, 2, 3]))

// 💖BEST PRACTICE💖
