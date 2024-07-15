/* DAY-01:  VARIABLES AND DATA TYPES*/
/* ACTIVITY 1 => Variable Declaration */
/* TASK 1: Declare a variable using 'var', assign it a number and log it to the console*/
var num = 10;
console.log(num)

/* TASK 2: Declare a variable using 'let', assign it a string and log it to the console*/
let str = 'Somnath';
console.log(str)

/* ACTIVITY 2 => Constant Declaration */
/* TASK 3: Declare a variable using 'const', assign it a boolean value and log it to the console*/
const bool = true;
console.log(bool)

/* ACTIVITY 3 => Data Types */
/* TASK 4: Craete variables of different data types (number, string, boolean, object,array) and log each variable's type using the 'typeof' operater*/
const score = 95;
const myName = 'Somnath'
const boolValue = false
const nullValue = null
const myArr = [10,20,30,40,50]

console.log(typeof score)
console.log(typeof myName)
console.log(typeof boolValue)
console.log(typeof nullValue)
console.log(typeof myArr)

/* ACTIVITY 4 => Reassigning Variables */
/* TASK 5: Declare a variable using 'let', assign it an initial value, reassign a new value, log both values to the console*/
let myScore = 92
console.log(myScore)
myScore = 94
console.log(myScore)

/* ACTIVITY 5 => Understanding const */
/* Try reassigning a variable declared with 'const' and observe the error */
const myNewScore = 90
console.log(myNewScore)
myNewScore = 95
console.log(myNewScore)

// TypeError: Assignment to constant variable.