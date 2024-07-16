// Task 1
for(i = 1; i <= 10; i++){
    console.log(i);
}

// Task 2
for(i = 1; i <= 10; i++){
    console.log(`5*${i} = ${5*i}`);
}

// Task 3
let num = 1;
let sum = 0;
while(num <= 10){
    sum += num;
    num++;
}
console.log(sum);

// Task 4
let num1 = 10;
while(num1 >= 1){
    console.log(num1);
    num1--
}

// Task 5
let num3 = 1;
do{
    console.log(num3);
    num3++
}
while(num3 <= 5);

// Task 6
let fact = 5;
let mul = 1;
do {
    mul *= fact;
    fact--
}
while(fact > 0);
console.log(mul);

// Task 7
for (let m = 1; m <= 5; m++) {
    let pattern = '';
    for (let n = 1; n <= m; n++) {
    pattern += '* ';
    }
    console.log(pattern);
}

// Task 8
for(c = 1; c <= 10; c++){
    if(c == 5){
        continue;
    }
    console.log(c);
}

// Task 9
for(b = 1; b <= 10; b++){
    if(b == 7){
        break;
    }
    console.log(b);
}