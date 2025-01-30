// 🎃DESCRIPTION

// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//✅SOLUTION

const string1 = "glavryba";

function solution(str){
    let reversed = ""
    for (let i = str.length - 1; i >= 0; i--){
        reversed += str[i]
    } return reversed;
}

console.log(solution(string1));

// 💖BEST PRACTICE💖

// function solution(str){
//     return str.split('').reverse().join('');
// }