// 🎃DESCRIPTION🎃
/*
Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.
*/

//✅SOLUTION✅
let arr1 = ['a', 1, 2, false, 'b']

function separateTypes(input) {
    let newObj = {}
    for (let i = 0; i < input.length; i++) {
        if (!newObj[typeof input[i]]) {
            newObj[typeof input[i]] = []; // added key's value as an empty array
        }
        newObj[typeof input[i]].push(input[i])
    }
    return newObj
}

console.log(separateTypes(arr1));


// 💖MY BEST PRACTICE💖

let arr2 = ['a', 1, 2, false, 'b']

function separateTypes(input) {
    const groupedByType = {};

    input.forEach(item => {
        const itemType = typeof item;

        if (!groupedByType[itemType]) {
            groupedByType[itemType] = [];
        }

        groupedByType[itemType].push(item);
    });

    return groupedByType;
}

console.log(separateTypes(arr2));




