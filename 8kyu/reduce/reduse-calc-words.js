const numbers = [5, 10, 15, 20];


const sumReducer = (accumulator, currentValue) => {
    console.log(`Накопитель: ${accumulator}, Текущее значение: ${currentValue}`);
    return accumulator + currentValue;
};

const totalSum = numbers.reduce(sumReducer, 0);

console.log('Итоговая сумма:', totalSum);