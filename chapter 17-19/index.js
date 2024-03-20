// Declare and initialize an empty multidimensional array
var emptyMultiArray = [];
// Populate the empty array to create a 2D array with 3 rows and 4 columns
for (var i = 0; i < 3; i++) {
    emptyMultiArray[i] = [];
    for (var j = 0; j < 4; j++) {
        emptyMultiArray[i][j] = 0; // or any other value you want to initialize with
    }
}

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix)

for (var i = 1; i <= 10; i++) {
    console.log(i);
}

var table = +prompt("enter a number to show table of that number")
var ta ;
var lng = +prompt("enter table length")
for(var i = 1 ; i<=lng ; i++){
ta =  table * i;
console.log(`${table} x ${i} = ${ta}`)
}
console.log(`the length of table is ${lng}`)


const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

console.log("Printing items of the array using a for loop:");
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


  // Counting: 1 to 15
  document.write(`<h3> Counting: 1 to 15 </h3>`);
  for (let i = 1; i <= 15; i++) {
    
    document.write(i + ", ");
  }
  document.write("</p>");

  // Reverse counting: 10 to 1
  document.write(`<h3> Reverse counting: </h3>`);
  for (let i = 10; i >= 1; i--) {
   
    document.write(i + ", ");
  }
  document.write("</p>");

  // Even: 0 to 20
  document.write(`<h3> Even: </h3>`);
  for (let i = 0; i <= 20; i += 2) {
  
    document.write(i + ", ");
  }
  document.write("</p>");

  // Odd: 1 to 19
  document.write(`<h3> Odd: </h3>`);
  for (let i = 1; i <= 19; i += 2) {
   
    document.write(i + ", ");
  }
  document.write("</p>");

  // Series: 2k, 4k, 6k, ..., 20k
  document.write(`<h3>Series: </h3>`);
  for (let i = 2; i <= 20; i += 2) {
 
    document.write(i + "k, ");
  }
  document.write("</p>");

  var A = ["cake", "apple pie", "cookie", "chips", "patties"];
  var search = prompt("Enter any sweet dish:").toLowerCase(); // Convert input to lowercase for case-insensitive comparison
  
  var found = false;
  for (var i = 0; i < A.length; i++) {
      if (A[i] === search) {
          found = true;
          break;
      }
  }
  
  if (found) {
      console.log(`Your food item '${search}' is found in the list.`);
  } else {
      console.log(`Your food item '${search}' is not found in the list.`);
  }

  var num = [24, 53, 78, 91, 12];
var max = num[0]; // Assume the first element is the largest initially

for (var i = 1; i < A.length; i++) {
    if (num[i] > max) {
        max = num[i]; // Update max if current element is larger
    }
}

console.log("The largest number in the array is:", max);

var num2 = [24, 53, 78, 91, 12];
var sml = num[0]; // Assume the first element is the largest initially

for (var i = 1; i > A.length; i++) {
    if (num2[i] < sml) {
        sml = num2[i]; // Update max if current element is larger
    }
}

console.log("The smallest number in the array is:", sml);

console.log("Multiples of 5 ranging from 1 to 100:");
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

