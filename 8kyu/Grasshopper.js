//🎃DESCRIPTION
// Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.
//✅SOLUTION

function combat(health, damage) {
    health = health - damage;
    if (health < 0) {
        health = 0;
    }
    return health;
}

let result = combat(125, 25);
console.log(result)

//💖BEST PRACTICE💖

// function combat(health, damage) {
//     return health < damage ? 0 : health - damage
// }


