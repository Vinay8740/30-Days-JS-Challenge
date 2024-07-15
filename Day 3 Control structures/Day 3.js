let num = 20;
if(num > 0){
    console.log("Positive");
}
else if(num < 0){
    console.log("Negative");
}
else{
    console.log("Zero");
}

let age = 18;
if(age >= 18){
    console.log("Eligible");
}
else{
    console.log("Not Eligible");
}

let num1 = 10;
let num2 = 20;
let num3 = 30;
if(num1 > num2){
    if(num1 > num3){
        console.log(`${num1} is larger`);
    }
    else{
        console.log(`${num3} is larger`);
    }
}
else if(num2 > num3){
    console.log(`${num2} is larger`);
}
else{
    console.log(`${num3} is larger`);
}

let choice = 6;
switch(choice){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invaild ")
}

let score = 85;
switch (true){
    case score >= 90 && score <= 100:
        console.log("A");
        break;
    case score >= 80 && score < 90:
        console.log("B");
        break;
    case score >= 70 && score < 80:
        console.log("C");
        break;
    case score >= 60 && score < 70:
        console.log("D");
        break;
    case score >= 50 && score < 60:
        console.log("E");
        break;
    case score < 50:
        console.log("F");
    default:
        console.log("Invaild ")   
}

let number = 29;
console.log(number%2 == 0 ? "Even" : "Odd");

let year = 2024; 
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}