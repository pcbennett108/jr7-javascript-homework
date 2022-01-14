/* 1. Create a function that adds up the integers in the following array var numbers
= [10,20,30,40,50]. Do not use any array prototype methods, this must be
completed using for loops and variables. */
//
let total = 0;
let numberArray = [10, 20, 30, 40, 50];
for (i = 0; i < numberArray.length; i++) {
  total += numberArray[i];
}
console.log(total);
//
/* 2. Create a function that reverses the following array - var array1 =
[0,1,2,3,4,5,6,7,8,9,10]. Do not use array prototype method
.reverse() */
//
let array2 = [];
let array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (i = 0; i < array1.length; i++) {
  array2.unshift(array1[i]);
}
console.log(array2);
//
/* 3. Implement Fizz Buzz. Loop from 1 to 100. If the number is divisible by both 3 and
5, print "fizzbuzz". Otherwise, if the number is divisible by 3, print "fizz", or, if the
number is divisible by 5, print "buzz". If none of the above are true, print the
number. This is a very common interview question! Try completing this on your
own before looking up the answer. */
//
for (i = 1; i <= 100; i++) {
  if (i % 15 == 0) {
    console.log("Fizzbuzz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
// ?  This is the solution the book gave. I'm not clear on why the lase line works.
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
//
//4. Challenge: Write a JavaScript program to construct the following pattern of stars

let chr = "";
for (let x = 1; x <= 6; x++) {
  for (let y = 1; y < x; y++) {
    chr = chr + "*";
  }
  console.log(chr);
  chr = "";
}
//
// Below is the book answer for reference
for (let line = "#"; line.length < 6; line += "#") console.log(line);
