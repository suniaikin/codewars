/*
У вас есть массив товаров.
Вам нужно создать новый массив availableProducts,
в который войдут только те товары,
у которых свойство inStock равно true.
*/

const products = [
    { id: 1, name: 'Монитор', inStock: true },
    { id: 2, name: 'Телефон', inStock: false },
    { id: 3, name: 'Клавиатура', inStock: true },
    { id: 4, name: 'Мышь', inStock: false },
    { id: 5, name: 'Веб-камера', inStock: true }
];

// Ваш код здесь
// const availableProducts = ...

console.log(availableProducts);
/* Ожидаемый результат:
[
  { id: 1, name: 'Монитор', inStock: true },
  { id: 3, name: 'Клавиатура', inStock: true },
  { id: 5, name: 'Веб-камера', inStock: true }
]
*/