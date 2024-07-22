// DAY 05: Functions
// Activity 1: Function declaration 
// Task 1: Write a function to check if a number is even or odd and log the result to the console
function evenOdd(num){
    if(num%2==0){
        console.log(`${num} is an even number!`)
    }
    else{
        console.log(`${num} is an odd number!`)
    }
}
evenOdd(10)
evenOdd(13)

// Task 2: Write a function to calculate the suare of number and return the result
function square(x){
    return x**2;
}
console.log(square(5))

// Activity 2: Function Expression
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console
const max = function (num1,num2){
    if(num1>num2){
        console.log(`${num1} is greater than ${num2}`)
    }
    else if(num1==num2){
        console.log(`${num1} is equal to ${num2}`)
    }
    else{
        console.log(`${num2} is greater than ${num1}`)
    }
}
max(10,20)
max(10,10)
max(20,10)

// Task 4: Write a function expression to concatenate two strings and return the result
const strConcat = function (str1,str2){
    return str1.concat(str2)
}
console.log(strConcat(`abcd`,`efgh`))

// Activity 3: Arrow Functions
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result
let add = (a,b) => a+b;
console.log(add(12,15))

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value
const strCheck = (str3,s) => {
    let n = str3.length
    for(let i=0;i<=n;i++){
        if(str3[i]==s){
            return true
        }
    }
    return false
}
console.log(strCheck('abcde','d'))
console.log(strCheck('abcde','m'))

// Activity 4: Function Parameters and default values
// Task 7: Write a funcion that takes two parameters and returns their product. Provide a default value for the second parameter.
function multi(num1,num2){
    num2 = typeof num2 != "undefined" ? num2 : 2
    return num1*num2
}
console.log(multi(10))

//Task 8: Write a function that takes person's name and age and returns a greeting message. Provide a default value for the age.
function greet(name,age){
    age = typeof age != "undefined" ? age : 18
    return `Hello Mr./Mrs. ${name}. I think you are ${age} year old`
}
console.log(greet('Radhika'))

// Activity 5: Higher-Order function
// Task 9: Write a higher order function that takes a function and number and calls the function that many times.


// Task 10: Write a higher order function that takes two functions and a value, applies 1st function to the value, and then applies second function to the result.
