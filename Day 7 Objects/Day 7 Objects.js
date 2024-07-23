// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
let book = {
    Title : "Rich Dad Poor Dad",
    Author : "Robert Kiyosaki",
    year : "2000"
}
console.log(book);

// Task 2: Access and log the title and author properties of the book object.
console.log(`Book :${book.Title}, Author :${book.Author}`);

// Task 3: Add a method to the book object that returns a string with the book title and author, and log the result of calling this method.
book.information = function(){
    return `Book :${book.Title}, Author :${book.Author}`;
}
console.log(book.information());

// Task 4: Add a method to the book object that takes a parameter(year) and updates the book's year property, then log the updated object.
book.UpdatedYear = function(year){
     return year;
}
console.log(book.UpdatedYear("2019"));

// Task 5: Create a nested object respresenting a library with properties like name and books (an array of book objects), and log the library object to the console.
let library={
    name:"Central Library",
    books:[
        {
            title: "The Story of TATA",
            author: "Peter Casey",
            year: 2021
        },
        {
            title: "Clean Code",
            author: "Robert C. Martin",
            year: 2008
        },
        {
            title: "JavaScript: The Good Parts",
            author: "Douglas Crockford",
            year: 2008
        }
    ]
}
console.log(library);

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(`library Name : ${library.name}`);
const bookTitles = [...library.books.map(book => book.title)];
console.log(`Books in the library: ${bookTitles}`);

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
book.ThisKey = function(){
    return `Book : ${this.Title} , Year : ${this.year}`
}
console.log(book.ThisKey())

// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for (const key in book) {
    console.log(key)
    console.log(book[key])
}

// Task 9: Use Object.keys and Object. values methods to log all the keys and values of the book object.sssss
console.log(Object.keys(book));
console.log(Object.values(book));