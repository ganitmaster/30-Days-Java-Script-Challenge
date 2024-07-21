// DAY : 04
// Activity 1: for loop
// Task 1: Write a program to print numbers from 1 to 10 using for loop
for(let i=1;i<=10;i++){
    console.log(i)
}
// Task 2 : Write a program to print the multiplication table of 5 using for loop
let num = 5
for(let i=1;i<=10;i++){
    console.log(i*num)
}

// Activity 2: while loop
// Task 3: Write a program to calculate sum of nimbers from 1 to 10 using a while loop
let sum=0
let i=11
while(i--){
    sum+=i
}
console.log(sum)

// Task 4: Write a program to print numbers from 10 to 1 using while loop
let j=10
while(j>0){
    console.log(j)
    j--
}

// Activity 3: Do - While loop
// Task 5: Write a program to print numbers from 1 to 5 using do - while loop
let n =0;
do{
    n += 1;
    console.log(n)
}while(n<5)

// Task 6: Write a program to calculate factorial of number using do - while loop
let m = 5
let fact = 1
do{
    fact = fact*m;
    m--;
}while(m>0)
console.log(fact)

// Activity 4: Nested Loops
// Task 7: Write a program to print a pattern using nested for loops
/*  x
    xx
    xxx
    xxxx
    xxxxx
*/
let pattern = ""
for(let i=0;i<5;i++)
{
    for(let j=0;j<=i;j++)
    {
        pattern += "*";
    }
    pattern+="\n"
}
console.log(pattern)

// Activity 5: Loop Control Statements
// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using continue statement
for(let i=1;i<=10;i++){
    if(i==5){continue;}
    console.log(i);
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when number is 7 using brreak stmt.
for(let i=1;i<=10;i++){
    if(i==7){
        break;
    }
    console.log(i);
}