/*
У вас есть массив студентов.
Вам нужно получить новый массив,
содержащий только имена тех студентов,
у которых балл выше 80,
причём имена должны быть в верхнем регистре.
 */

const students = [
    { name: 'Иван', score: 92 },
    { name: 'Мария', score: 78 },
    { name: 'Алексей', score: 85 },
    { name: 'Ольга', score: 64 },
    { name: 'Сергей', score: 95 }
];

const topStudentsNames = students.filter(student => student.score > 80).map(student => student.name.toUpperCase());

console.log(topStudentsNames);