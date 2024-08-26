//BMI

var MarkMiller = {
    fullName: 'Mark Miller',
    mass: 78,//kg
    height: 1.69,//m
    calcBMI(){
        return this.mass / this.height ** 2;
    }

}

var JohnSmith = {
    fullName: 'John Smith',
    mass: 92,//kg
    height: 1.95,//m
    calcBMI(){
        return this.mass / this.height ** 2;
    }
}

console.log(MarkMiller);
console.log(JohnSmith);

console.log("MarkMiller: " + MarkMiller.calcBMI());
console.log("JohnSmith: " + JohnSmith.calcBMI());

if(MarkMiller.calcBMI() > JohnSmith.calcBMI()){
    console.log(`${MarkMiller.fullName}'s BMI (${MarkMiller.calcBMI()}) is higher than ${JohnSmith.fullName}'s BMI (${JohnSmith.calcBMI()})`);
}else if(MarkMiller.calcBMI() < JohnSmith.calcBMI()){
    console.log(`${JohnSmith.fullName}'s BMI (${JohnSmith.calcBMI()}) is higher than ${MarkMiller.fullName}'s BMI (${MarkMiller.calcBMI()})`);
}else {
    console.log(`${MarkMiller.fullName} and ${JohnSmith.fullName} have the same BMI (${MarkMiller.calcBMI()})`);
}