const prices = [15, 9, 27, 8, 19];

const highestPrice = prices.reduce((highestSoFar, currentPrice) => {
    console.log(`Max price now: ${highestSoFar}, Current price: ${currentPrice}`);
    if (currentPrice > highestSoFar) {
        return currentPrice;
    } else {
        return highestSoFar;
    }
});

console.log(`Max price: ${highestPrice}`);