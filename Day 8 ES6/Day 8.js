//Task 1 : Use template literals to create a string that includes variables for a person's name and age, and log the string to the consol
let person = {
    Name : "Hitesh",
    age : 20
}
console.log(`Name : ${person.Name} , Age : ${person.age}`)

//Task 2: Create a multi-line string using template literals and log it to the console.
console.log(`This is Line 1
This is line 2`);

//Task 3: Use array destructuring to extract the first and second element from an array of numbers and log them to the console.
let arr = [1,2,3,4,5];
let [ele1 , ele2] = arr;
console.log(ele1,ele2);

//Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
let {Name,age} = person;
console.log(`Name : ${Name} , Age : ${age}`)

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8,9];
let arr_main = [...arr1,...arr2,...arr3];
console.log(arr_main);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function Sum_Num(...parameter){
    let sum=0;
    for(let para of parameter){
        sum += para;
    }
    return sum;
}
console.log(Sum_Num(1,2,3,4,5));
console.log(Sum_Num(10,20));

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1.Log the result of calling this function with and without the second parameter.
function demo(x,y=10){
    return x*y;
}
console.log(demo(10));

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
let Object_demo ={
    Name1 : "Hitesh",
    age1 : 20,
    Print1(){
        console.log(`Name : ${Object_demo.Name1} , Age : ${Object_demo.age1}`)
    }
}
console.log(Object_demo);
Object_demo.Print1()

// Task 9: Create an object with computed property names based on variables and log the object to the console.
let prop1 = 'title';
let prop2 = 'author';
let prop3 = 'year';


let bookDetails = {
    [prop1]: "Sherlock Holmes",
    [prop2]: "Arthur Conan Doyle",
    [prop3]: 1902,
    getDetails() {
        return `${this[prop1]} by ${this[prop2]}, published in ${this[prop3]}`;
    }
};

console.log(bookDetails);
console.log(bookDetails.getDetails());