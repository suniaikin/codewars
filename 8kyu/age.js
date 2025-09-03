/*
У вас есть массив пользователей.
Вам нужно создать новый массив строк, где для каждого
пользователя будет строка: "Имя (статус)".
Однако, если возраст пользователя меньше 18 лет,
статус должен быть "Юный",
а если 18 и больше — "Взрослый".
*/

const people = [
    { name: 'Елена', age: 27 },
    { name: 'Игорь', age: 16 },
    { name: 'Светлана', age: 45 },
    { name: 'Петр', age: 17 }
];

const formattedPeople = people.map((person) => {
    let status
    if (person.age < 18) {
        return `${person.name} ("Юный")`
    } else {
        return `${person.name} (${person.age})`
    }
})



console.log(formattedPeople);
