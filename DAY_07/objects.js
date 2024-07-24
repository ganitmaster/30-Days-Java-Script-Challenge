// DAY 07: OBJECTS
// ACTIVITY 1: OBJECT CREATION AND ACCESS
// Task 1: Create an object representing a book with properties like title, author and year, and log the object to the  console.
// Object literal notation
let book = {
    title : "Godaan",
    author : "Munshi Premchand",
    year : 1936
} 
console.log(book)
//using the 'object' Constructor
let myBook = new Object()
myBook.title = "Fun with Stats"
myBook.author = "Somnath Tiwari"
myBook.year = 2025
console.log(myBook)

// Task 2: Access and log the title and author properties of the book object.
console.log(book.title);
console.log(book['author']);
console.log(myBook.title);
console.log(myBook['author'])

// ACTIVITY 2: OBJECT METHODS
// Task 3: Add a method to a book object that returns a string with the book's title and author, and log the result of calling this method.

let Book = {
    title : "My Dreams",
    author : "Er. Somnath",
    year : 2030,
    bookDetails : function(){
        return this.title + " By " + this.author
    }
}
console.log(Book.bookDetails())

// Task 4: Add a method to a book object that takes a parameter(year) and updates the book's year property, then log the updated object.
let bookDetails = {
    title : "Follow The Path",
    author : "Er. Somnath",
    year : 2035,
    yearUpdate : function(year){
        this.year = year;
    }
}
bookDetails.yearUpdate(2033)
console.log(bookDetails)

// ACTIVITY 3: NESTED OBJECTS
// Task 5: Create a nested object representing a library with properties like name and books(an array of book objects), and log the library object to the console.
let library = {
    name : "My Library",
    books : [
        {
            title : "Godaan",
            author : "Munshi Premchand",
            year : 1936
        },
        {
            title : "My Dreams",
            author : "Er. Somnath",
            year : 2030
        },
        {
            title : "Follow The Path",
            author : "Er. Somnath",
            year : 2035
        }

    ]
};
console.log(library)

//Task 6: Access and log the name of the library and titles of all the books in the library.
console.log("Library Name:",library.name)
console.log("Book Titles:")
library.books.forEach(book => 
    console.log(book.title)
)

// ACTIVITY 4: The `this` keyword 
// Task 7: Add a method to the book object that uses the `this` keyword to return a string with the book's title and year, and log the result of calling this method.
let theBook = {
    title : "Let's play with the life",
    year : 2029,
    author : "Er. Somnath",
    bookdetails : function(){
        return this.title + " published in year " + this.year;
    }
}
console.log(theBook.bookdetails())

// ACTIVITY 5: OBJECT ITERATION
// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and it's value.
for( let key in book){
    console.log(key + " : " + book[key])
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
let keysBook = Object.keys(book);
keysBook.forEach(key=>{
    console.log(book[key]);
} );

let valuesBook = Object.values(book);
valuesBook.forEach(values=>{
    console.log(book[values]);
});