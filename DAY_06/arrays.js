// DAY 06: ARRAYS
// Activity 1: Array Creation and access
// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let numbers = [1,2,3,4,5]
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i])
}

// Task 2: Access the first and last elements of the array and log them to the console.
// --- using the array already created in task 1 ---
console.log("First Element: ", numbers[0])
console.log("Last Element: ",numbers[4])

// Activity 2: Array Methods(Basic)
// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
numbers.push(6)
console.log("Updated array : ")
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i])
}

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
numbers.pop()
console.log("Updated array : ")
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i])
}

//  Task 5: Use the shift method to remove the first element from the array and log the updated array.
numbers.shift()
console.log("Updated array : ")
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i])
}

//  Task 6: Use the unshift method to add a new number t the begining of the array and log the updated array.
numbers.unshift(1)
console.log("Updated array : ")
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i])
}

// Activity 3: Array Methods(Intermediate)
// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let doubled = numbers.map(function(x){
    return x * 2;
});
console.log(doubled);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let newNumbers = [1,2,3,4,5,6,7,8,9,10]
let evenNums = newNumbers.filter(function(num){
    return num%2==0;
});
console.log(evenNums)

// Task 9: Use the reduce method to calculate sum of all numbers in the array and log the result.
let sumOfNumbers = newNumbers.reduce(function(acc,curr){
    return acc+curr;
},0)
console.log(sumOfNumbers)

// Activity 4: Array iteration
// Task 10: Use a for loop to iterate over the array and log the result to the console.
for(let i =0; i<newNumbers.length;i++){
    console.log(newNumbers[i])
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
newNumbers.forEach(function(num){
    console.log(num)
})

// Activity 5: Multidimensional Array
// Task 12: Create a two-dimensional array(matrix) and log the entire array to the console.
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
matrix.forEach(function(i,j){
    console.log(i,j)
})
// console.log("Matrix")
// for(let i=0;i<matrix.length;i++){
//     for(let j=0;j<matrix.length;j++){
//         console.log(matrix[i][j])
//     }
// }

// Task 13: Access and log a specific element from the two dimensional array.
console.log(matrix[2][0])
