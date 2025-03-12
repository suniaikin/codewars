// 🎃DESCRIPTION🎃
/*In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.*/

//✅SOLUTION✅

function filterList(array) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

// 💖BEST PRACTICE💖

function filter_list(l) {
    return l.filter(el => typeof el === "number")
}
