//Activity 1: Arithmetis Operations
/* Task 1: Wite a program to add two numbers and log the result to the console. */
let a = 10;
let b = 25;
let add = a+b;
console.log(add)

/* Task 2: Write a program to subtract the numbers and log the result to the console. */
let sub = b-a;
console.log(sub)

/* Task 3: Write a program to multiply two numbers and log the result to the console.*/
let mul = a*b;
console.log(mul)

/* Task 4: Write a program to divide two numbers and log the result to the console. */
let dev = b/a;
console.log(dev)

/* Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.*/
let rem = b%a;
console.log(rem)

// Activity 2: Assignment Operators
/* Task 6: Use the += operator to add a number to a variable and log the result to the console. */
let newVar = 12;
newVar += 10;
console.log(newVar)

/* Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.*/
newVar -= 10;
console.log(newVar)

//Activity 3: Comparison Operators
/* Task 8: Write a program to compare two numbers using > and < and log the result to the console. */
console.log(a>b)
console.log(a<b)

/*Task 9: Write a program to compere two numbers using >= and <= and log the result to the console. */
console.log(a>=b)
console.log(a<=b)

/*Task 10: Write a program to compare two numbers using == and === and log the result to the console.*/
console.log(a==b)
console.log(a===b)

// Activity 4: Logical Operators
/* Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.*/
let cond1 = true;
let cond2 = false;
let resultAnd = cond1 && cond2;
console.log(resultAnd)

/* Task 12. Write a program that uses the || operator to combine two conditions and log the result to the console.*/
let resultOr = cond1 || cond2;
console.log(resultOr)

/* Task 13; Write a program that uses the ! operator to negate a condition and log the result to the console.*/
let resultNot = cond1 || cond2;
console.log(resultNot)

//Activity 5: Ternary Operator

/*Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.*/
function checkNumberSign(num) {
    let result = num >= 0 ? "Positive" : "Negative";
    return result;
}

console.log(checkNumberSign(5))   
console.log(checkNumberSign(-8))   
console.log(checkNumberSign(0))  