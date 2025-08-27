// 🎃DESCRIPTION🎃
/*
Write a function to convert a name into initials.
This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
 */

//✅SOLUTION✅

let nameString = "sarah connor"
let str = ""

function abbrevName(name) {
	return name[0].toUpperCase()+ "." + name[name.indexOf(" ") + 1].toUpperCase()
}

console.log(abbrevName(nameString))

// 💖BEST PRACTICE💖

let nameString2 = "sarah connor"
let nameArray = nameString2.split(" ");


function abbrevName2(name) {
	return nameArray[0][0].toUpperCase() + "." + nameArray[1][0].toUpperCase()
}

console.log(abbrevName2(nameString2))