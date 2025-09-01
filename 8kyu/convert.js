// 🎃DESCRIPTION🎃

/*У вас есть массив цен в долларах. 
Вам нужно создать новый массив, где каждая цена будет сконвертирована в рубли. 
Для простоты будем считать, что курс — 90 рублей за доллар.*/

const pricesInUSD = [20, 35, 12.5, 100];


//✅SOLUTION✅

let priceInRUB = pricesInUSD.map((price) => price * 90)
console.log(priceInRUB)



// 💖BEST PRACTICE💖
