// arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins_1 = calcAverage(44, 23, 71);
const avgKoalas_1 = calcAverage(65, 54, 49);

const avgDolphins_2 = calcAverage(85, 54, 41);
const avgKoalas_2 = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log('No team wins');
    }
}

console.log('Data 1:');
checkWinner(avgDolphins_1, avgKoalas_1);
console.log('Data 2:');
checkWinner(avgDolphins_2, avgKoalas_2);
