/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
*/

const arr = [1, 2, 3, 'a', 'b']

const getIntegers = (arr) => arr.filter(item => Number.isInteger(item))

console.log(getIntegers(arr)) // [1, 2, 3]