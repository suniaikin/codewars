
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

let array = [1,2,3];
let out = positiveSum(array)
console.log(out)

// 💖BEST PRACTICE💖

function positiveSum2(arr) {
	return arr.reduce((sum, currentNumber) => currentNumber > 0 ? sum + currentNumber : sum, 0);
}

let array2 = [1,2,3];
let out2 = positiveSum2(array2)
console.log(out2)





