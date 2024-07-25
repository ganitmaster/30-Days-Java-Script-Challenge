// DAY 08 : ES6+FEATURES
// Activity 1: Template Literals
// Task 1: Use template literals to create a string that includes valriable for a person's name and age, and log the string to the console.
let namePerson = "Radhika"
let agePerson = 21
let strPerson = `My name is ${namePerson} and I am ${agePerson} yrs old.`
console.log(strPerson)

// Task 2: Create a multiline string using template literals and log it to the console.
let mulStr = `This is a multiline string,
and this is the second line.`
console.log(mulStr)

// Activity 2: Destructuring
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const [a,b,c] = [10,20,30]
console.log(a,b)

// Task 4: Use object destructuring to to extract the title and author from a book object and log them to the console.
let book = {
    title: "Follow the Path",
    author : "Er. Sommnath",
    year : 2029
}
const {title,author,year} = book
console.log(title,"written by",author)

// Activity 3: Spread and Rest Operators
// Task 5: Use spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const arr1 = [10,20,30,40,50]
const arr2 = [...arr1,60,70,80,90]
console.log(arr2)

// Task 6: Use rest operator in a function to accept an arbitrary number of arguments, sum them and return the result.
function sum(...numbers){
    return numbers.reduce((acc,num)=>acc+num,0)
}
console.log(sum(10,20,30))

// Activitiy 4: Default Parameters 
/* Task 7: Write a function that takes two parameters and reurns their product, with the second parameter having default value of 1.
   log the result of calling this function with and without the second parameter.*/
function product(a,b=1){
    return a*b;
}
console.log(product(5,10))
console.log(product(10))

// Activity 5: Enhanced object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const name = "Rakshita"
let myObject = {
    name,
    greet(){
        return `Hello, ${this.name}`
    }
}
console.log(myObject.greet())

// Task 9: Create an object with compute property names based on variables and log the object to the console.
const key = "title"
const myBook = {
    [key] : "My Dreams"
}
console.log(myBook)
