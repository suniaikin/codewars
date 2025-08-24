
// 🎃DESCRIPTION🎃
/* You get an array of numbers, return
the sum of all of the positives ones.*/

//✅SOLUTION✅

function positiveSum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
	if (arr[i] > 0) {
			sum += arr[i];
		}
	} return sum

}
console.log(positiveSum([2, -2, 4]));
// 💖BEST PRACTICE💖

function positiveSum(arr) {
	return arr.reduce((sum, currentNumber) => currentNumber > 0 ? sum + currentNumber : sum, 0);
}





