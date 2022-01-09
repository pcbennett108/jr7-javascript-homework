// 1) Write a function that does not take any arguments, and it logs
//"Wow, it worked!" to the console
function wow() {
  console.log("Wow, it worked!");
}
wow();

//2) Write a function that does not take any arguments, and it returns
//your favorite movie as a string
// console.log the result
function movie() {
  var favMovie = "The Matrix, but maybe not the 4th.";
  return favMovie;
}
console.log(movie());

// 3) Write a function that takes one argument, a number, and
// multiplies that number by 100
// console.log the result
function multiply(number) {
  var product = number * 100;
  return product;
}
var answer = multiply(4);
console.log(answer);
console.log(multiply(3)); // Can show answer either way. Is there a preferred way?

// 4) Write a function that takes one argument, your name, and puts
// your name in the middle of a sentence
// console.log the result
function aboutName(name) {
  var statement =
    "There was that one time when " + name + " counted to infinity, twice";
  return statement;
}
console.log(aboutName("Paul"));

// 5) Write a function that takes three numbers as arguments and
// returns the largest number
// The numbers should be able to be specified in any order
function bigNumber(num1, num2, num3) {
  if (num1 == num2 && num2 == num3) {
    console.log("All of the numbers are the same");
  } else if (num1 >= num2 && num1 >= num3) {
    console.log(num1 + " is the largest");
  } else if (num2 >= num1 && num2 >= num3) {
    console.log(num2 + " is the largest");
  } else {
    console.log(num3 + " is the largest");
  }
}
bigNumber(7, 8, 9);

// 6) What do you think will happen here? Anything bad?
// Function is returning 3 parameters but only given 2 arguments. The third param will be an error.
function conCat(first, second, third) {
  return first + second + third;
}
var result = conCat("What ", "gives? ");
console.log(result);
// Are you surprised? ..... no.
