// Test Data 1
// const dolphinsScores = [96, 108, 89];
// const koalasScores = [88, 91, 110];

// Bonus Data 1
const dolphinsScores = [97, 112, 101];
const koalasScores = [109, 95, 123];

// Bonus Data 2
// const dolphinsScores = [97, 112, 101];
// const koalasScores = [109, 95, 106];

//accumulator: luu tong
//current
function Average(scoreArray) {
    const sum = scoreArray.reduce((acc, curr) => acc + curr, 0);
    return sum / scoreArray.length;
}

const dolphinsAverage = Average(dolphinsScores);
const koalasAverage = Average(koalasScores);

console.log(`Dolphins Average: ${dolphinsAverage}`);
console.log(`Koalas Average: ${koalasAverage}`);

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log("Dolphins win");
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
    console.log("Koalas win");
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
    console.log("It's a draw!");//Hoa nhau
} else {
    console.log("No team wins.");
}
