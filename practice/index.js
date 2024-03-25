console.log("Numbers from 1 to 10:");
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("Even numbers from 1 to 20:");
for (var i = 2; i <= 20; i += 2) {
    console.log(i);
}

console.log("Odd numbers from 1 to 15:");
for (var i = 1; i <= 15; i += 2) {
    console.log(i);
}

let number = 5;
let factorial = 1;
for (let i = 1; i <= number; i++) {
    factorial *= i;
}
console.log("Factorial of", number, "is:", factorial);

let numbers = 7;
console.log("Multiplication table of", number, ":");
for (let i = 1; i <= 10; i++) {
    console.log(numbers + " x " + i + " = " + (number * i));
}

console.log("Fibonacci series up to the 10th term:");
let a = 0, b = 1;
for (let i = 0; i < 10; i++) {
    console.log(a);
    let temp = a;
    a = b;
    b = temp + b;
}



let numberr = 123;
let sumOfDigits = 0;
for (let digit of String(numberr)) {
    sumOfDigits += parseInt(digit);
}
console.log("Sum of digits of", number, "is:", sumOfDigits);

let string = "hello";
console.log("Reverse of", string, "is:", string.split('').reverse().join(''));


console.log("Square of numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i + " squared is:", i * i);
}

let array = [3, 7, 2, 9, 5];
let smallest = array[0];
for (let num of array) {
    if (num < smallest) {
        smallest = num;
    }
}
console.log("The smallest element in the array is:", smallest);
