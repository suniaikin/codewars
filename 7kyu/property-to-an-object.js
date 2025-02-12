/* Write a function that adds a named property to an object.
It must be possible to set the property to a new value.
If the property already exists on the object, and error should be thrown.*/

let objABC = {a: 1, b: 2, c: 3,}

function addProperty(obj, prop, value) {
    // Add your code here
    if (prop in obj) {
        throw new Error("Property already exists");
    } else {obj[prop] = value;}

}

console.log(addProperty(objABC, "d", 4));
console.log (objABC)