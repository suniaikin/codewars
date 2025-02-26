const numbers = [1, 2, 3];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]); // Prints 1, 2, 3
}
const numbers2 = ['A', 'B', 'C'];

numbers2.forEach(function(num) {
    console.log(num); // Prints 1, 2, 3
});


const numbers3 = [3, 2, 1];
numbers3.forEach(num => console.log(num));


const numbers4 = ['a', 1, 2, false, 'b'];
function separateTypes(input) {
    return input.reduce((grouped, item) => {
        (grouped[typeof item] ||= []).push(item);
        return grouped;
    }, {});
}
console.log(separateTypes(numbers4)); // Prints 1, 2, 3