//TEST DATA 1
console.log("TEST DATA 1");
let massOfMark_1 = 78;
let heighOftMark_1 = 1.69;

let massOfJohn_1 = 92;
let heighOftJohn_1 = 1.95;

//Calculate both their BMIs
// let BMIofMark = massOfMark / (heighOftMark * heighOftMark);
// let BMIofJohn = massOfJohn / (heighOftJohn * heighOftJohn);

function calculateBMI(mass, height) {
    return mass / height ** 2;
}

let BMIofMark_1 = calculateBMI(massOfMark_1, heighOftMark_1);
let BMIofJohn_1 = calculateBMI(massOfJohn_1, heighOftJohn_1);

//compare
const markHigherBMI_data1 = BMIofMark_1 > BMIofJohn_1;
if(markHigherBMI_data1){
    console.log(`Mark's BMI (${BMIofMark_1.toFixed(2)}) is higher than John's (${BMIofJohn_1.toFixed(2)})!`);
} else {
    console.log(`John's BMI (${BMIofJohn_1.toFixed(2)}) is higher than Mark's (${BMIofMark_1.toFixed(2)})!`);
}

console.log("BMI of Mark: " + BMIofMark_1);
console.log("BMI of John: " + BMIofJohn_1);

//TEST DATA 2
console.log("TEST DATA 2");
let massOfMark_2 = 95;
let heighOftMark_2 = 1.88;

let massOfJohn_2 = 85;
let heighOftJohn_2 = 1.76;

let BMIofMark_2 = calculateBMI(massOfMark_2, heighOftMark_2);
let BMIofJohn_2 = calculateBMI(massOfJohn_2, heighOftJohn_2);

const markHigherBMI_data2 = BMIofMark_2 > BMIofJohn_2;
if(markHigherBMI_data2){
    console.log(`Mark's BMI (${BMIofMark_2.toFixed(2)}.) is higher than John's (${BMIofJohn_2.toFixed(2)})!`);
} else {
    console.log(`John's BMI (${BMIofJohn_2.toFixed(2)}) is higher than Mark's (${BMIofMark_2.toFixed(2)})!`);
}

console.log("BMI of Mark: " + BMIofMark_2);
console.log("BMI of John: " + BMIofJohn_2);


