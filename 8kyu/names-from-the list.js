/* Description
У вас есть массив объектов, представляющих пользователей.
Вам нужно создать новый массив, который
будет содержать только имена пользователей.
 */

const users = [
  { id: 1, name: 'Алиса', age: 25 },
  { id: 2, name: 'Борис', age: 31 },
  { id: 3, name: 'Вера', age: 22 }
];

// Solution

let userName = users.map((user) => user.name)

console.log(userName)