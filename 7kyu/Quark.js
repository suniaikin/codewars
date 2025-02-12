// You're modelling the interaction between a large number of quarks and have decided to create a Quark class so you can generate your own quark objects. Quarks are fundamental particles and the only fundamental particle to experience all four fundamental forces.//

/* Your task: Your Quark class should allow you to create quarks of any valid color ("red", "blue", and "green") and any valid flavor ('up', 'down', 'strange', 'charm', 'top', and 'bottom').

Every quark has the same baryon_number (BaryonNumber in C#): 1/3.

Every quark should have an .interact() (.Interact() in C#) method that allows any quark to interact with another quark via the strong force. When two quarks interact they exchange colors.

Example
>>> q1 = Quark("red", "up")
>>> q1.color
"red"
>>> q1.flavor
"up"
>>> q2 = Quark("blue", "strange")
>>> q2.color
"blue"
>>> q2.baryon_number
0.3333333333333333
>>> q1.interact(q2)
>>> q1.color
"blue"
>>> q2.color
"red"

 */


const q1 = new Quark("red", "up");
console.log(q1.color); // Output: "red"
console.log(q1.flavor); // Output: "up"

const q2 = new Quark("blue", "strange");
console.log(q2.color); // Output: "blue"
console.log(q2.flavor); // Output: "strange"

// Accessing the static property
console.log(Quark.baryon_number); // Output: 0.3333333333333333

// Quarks interact and exchange colors
q1.interact(q2);
console.log(q1.color); // Output: "blue"
console.log(q2.color); // Output: "red"


class Quark {
    constructor (color, flavor) {
        this.color = color;
        this.flavor = flavor;
    }
    baryon_number = 1 / 3;

    interact(quark) {
        let curColor = this.color;
        this.color = quark.color;
        quark.color = curColor;
    }
}