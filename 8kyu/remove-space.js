// 🎃DESCRIPTION🎃

/* Write a function that removes the spaces from the string, then return the resultant string.*/

//✅SOLUTION✅

function noSpace(x) {
	let newSpace = ""
	for (let i = 0; i < x.length; i++) {
		if (x[i] === " ") {
			newSpace += ""
		} else {
			newSpace += x[i]
		}
	} return newSpace
}

let space = "d 2 3 K dj H"
console.log(noSpace(space))

// 💖BEST PRACTICE💖

function noSpace2(x) {
	return x.replaceAll(" ", "")

}

let space2 = "d 2 3 K dj H"
console.log(noSpace2(space2))



