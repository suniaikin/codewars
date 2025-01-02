//🎃DESCRIPTION
//In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
//In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

//В этой игре герой перемещается слева направо. Игрок бросает кости и перемещается на количество мест, указанное костями, два раза. Создайте функцию для терминала игры, которая принимает текущую позицию героя и бросок (1-6) и возвращает новую позицию.

//✅SOLUTION

function move (position, roll) {
    return position + roll * 2;
}
console.log(move(2, 6))


//💖BEST PRACTICE💖


