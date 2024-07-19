// Activity 1: If-Else statements
// Task 1
let num = 10
if(num<0){
    console.log("Negative")
}
else if(num==0){
    console.log("Zero")
}
else{
    console.log("Positive")
}

// Task 2
let age= 15
if(age>=18){
    console.log("You are eligible to vote.")
}
else{
    console.log("You are not eligible to vote!")
}

// Activity 2: Nested if-else statements
// Task 1
const a = 130
const b = 150
const c = 120
if(a>b){
    if(a>c){
        console.log("'a' is greater than 'b' and 'c'")
    }
    else{
        if(c>b){
            console.log("`c` is greater than `a` and `b`")
        }
    }
}
else if(b>a){
    if(b>c){
        console.log("`b` is greater than `a` and `c`")
    }
    else{
        console.log("`c` is greater than `a` and `b`")
    }
}
else{
    console.log("`c` is greater than `a` and `b`")
}

// Activity 3: Switch Case
// Task 1
let day = 7
switch(day){
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    default: console.log("Sunday");
}

// Task 2

    let score=90;
    //score = window.prompt("Enter the Score:")
    switch(score){
        case score>=90 && score<=100:
            console.log("Grade - A");
            break;
        case score<90 && score>=70:
            console.log("Grade - B");
            break;
        case score<70 && score>=50:
            console.log("Grade - C");
            break;
        case score<50 && score>=33:
            console.log("Grade - D");
            break;
        case score<33 && score>=0:
            console.log("Grade - F");
            break;
        default:
            console.log("Please enter the valid score!")    
    }

//Activity 4: Conditional (Ternary) operator
//Task 6:
let number = 55
let result = number%2==0 ? "Even" : "Odd";
console.log(`The number is ${result}`)

// Activity 5: Combining Conditions
//Task 7:
let year = 1900
if(year%4==0 && year%100!=0){
    console.log(`${year} is a leap year`)
}
else if(year%100==0){
    if(year%4==0){
        console.log(`${year} is a leap year`)
    }
    else{
        console.log(`${year} is not a leap year`)
    }
}
else{
    console.log(`${year} is not a leap year`)
}
