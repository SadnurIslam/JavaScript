const weight = 75;
const height = 1.66;

const bmi = weight / (height * height);

console.log("Your BMI is: " + bmi.toFixed(2));

if(bmi < 18.5){
    console.log("you are underweight.");
}
else if(bmi >= 18.5 && bmi < 24.9){
    console.log("you are normal weight.");
}
else if(bmi >= 25 && bmi < 29.9){
    console.log("you are overweight.");
}
else{
    console.log("you are obese.");
}