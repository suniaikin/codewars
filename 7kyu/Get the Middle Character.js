// 🎃DESCRIPTION🎃

/* You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
If the string's length is odd, return the middle character.
If the string's length is even, return the middle 2 characters.
Examples:
"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"
*/

//✅SOLUTION✅

const string1 = "4258542255412355841225"
function getMiddle(string) {
    let middle = Math.floor(string.length / 2);
    if (string.length % 2 === 0) {
        return string.slice(middle - 1, middle + 1);
    } else {
        return string[middle];
    }
}
console.log(getMiddle(string1))


// 💖BEST PRACTICE💖

function getMiddle2(s)
{
    return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
console.log(getMiddle2(string1))
