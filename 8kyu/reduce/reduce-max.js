const scores = [42, 99, 56, 12, 88];

const highestScore = scores.reduce((maxSoFar, currentScore) => {
    if (currentScore > maxSoFar) {
        return currentScore;
    } else {
        return maxSoFar;
    }
});

console.log(highestScore); // 99