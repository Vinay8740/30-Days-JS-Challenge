// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let arr=[1,2,3,4,5];
console.log(arr);

//Task 2: Access the first and last elements of the array and log them to the console.
console.log(arr[0]);
console.log(arr[arr.length - 1]);

//Task 3: Use the push method to add a new number to the end of the array and log the updated array.
arr.push(6);
console.log(arr);

//Task 4: Use the pop method to remove the last element from the array and log the updated array.
arr.pop(6);
console.log(arr);

//Task 5: Use the shift method to remove the first element from the array and log the updated array.
arr.shift();
console.log(arr);

//Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
arr.unshift(1);
console.log(arr);

//Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let arr1 = arr.map(func);
function func(value){
    return value*2;
}
console.log(arr1);

//Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let arr2 = arr.filter(func1);
function func1(value){
    return value%2 == 0;
}
console.log(arr2);

//Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let sum = arr.reduce(func3);
function func3(total,value){
    return total+value;
}
console.log(sum);

//Task 10: Use a for loop to iterate over the array and log each element to the console.
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

//Task 11: Use the forEach method to iterate over the array and log each element to the console.
arr.forEach(func4);
function func4(value){
    console.log(value);
}

//Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let arr2d = [[1,2],[3,4],[5,6]]
console.log(arr2d);

//Task 13: Access and log a specific element from the two-dimensional array.
console.log(arr2d[0][1]);