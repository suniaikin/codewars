// 🎃DESCRIPTION🎃

/*
Write a function that accepts a non-negative integer n
and a string s as parameters, and returns a string of s
repeated exactly n times.
*/

//✅SOLUTION✅

function repeatStr(n, s) {
	let string = ""
	for (let i = 0; i < n; i++) {
		string += s
	}
	return string
}

console.log(repeatStr(3, "Test"))

// 💖BEST PRACTICE💖

function repeatStr2(n, s) {
	return s.repeat(n)
}

console.log(repeatStr2(3, "Test"))
