// Functions
// Task 1
function check_num(num){
    if(num%2 == 0){
        return 'Even';
    }
    else{
        return 'Odd';
    }
}
console.log(check_num(20));

// Task 2
function Square_num(num1){
    return num1*num1;
}
console.log(Square_num(6));

// Task 3
function MaxOfNum(num1,num2){
    if(num1 > num2){
        return "Number1 is Bigger";
    }
    else{
        return "Number2 is Bigger";
    }
}
console.log(MaxOfNum(10,20));

// Task 4
function Concat_num(str1,str2){
    return str1+str2;
}
console.log(Concat_num("Hii - ",'Hitesh'));

// Arrow functions
// Task 5
let AddNum = (num1,num2) => num1+num2;
console.log(AddNum(10,20));

// Task 6
let Str_Check = (str1, ind) => {
    for(let i=0; i<=str1.length; i++){
        if(str1[i] == ind){
            return true;
        }
    }
    return false;
}
console.log(Str_Check("VINAY","Y"));


// Parameters
// Task 7
function Def_num(num1,num2 = 2){
    return num1*num2;
}
console.log(Def_num(6));

// Task 8
function Greeting(name,age = 20){
    return `Hii ${name} You are ${age} years young Energetic Guy`;
}
console.log(Greeting('Kumar'));

// High order Functions
// Task 9 - Parameters - Number,Func | Calls the function that many times
function HighOrderFun(num,func1){
    for(i=0; i<num;i++){
        func1()
    }
}
function func1(){
    console.log("HII");
}
HighOrderFun(5,func1);

// Task 10 - Parameters - Func1,Func2,Number | Applies the first func to the value,Then applies the secound function to result
function high_order(fun1,fun2,num){
    let fun_result = fun1(num);
    let final_result = fun2(fun_result);
    return final_result;
}
function add(num){
    return num+2;
}
function Square_num(num1){
    return num1*num1;
}
console.log(high_order(add,Square_num,10));