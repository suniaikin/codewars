// 🎃DESCRIPTION🎃

/*
Your goal is to write a function that removes the first
and last characters of a string. You're given one parameter,
the original string.

Important: Your function should handle strings of any length ≥ 2 characters.
For strings with exactly 2 characters, return an empty string.
*/

//✅SOLUTION✅

function removeChar(str) {
	let newStr = ""
	if (str.length >= 2) {
		for (let i = 1; i < str.length-1; i++) {
			newStr += str[i];
		}
		return newStr;
	}

}


let string = "#freeWord#";
let out = removeChar(string);
console.log(out);


// 💖BEST PRACTICE💖
