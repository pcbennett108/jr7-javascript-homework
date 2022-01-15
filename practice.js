function world() {
  console.log("Hello World");
}
world();
//
function parrot(string1) {
  console.log(string1);
}
parrot("ARC1-JR7 is the best!");
//
let x = "";
let y = "";
let sum = "";
function add(x, y) {
  sum = x + y;
  console.log(sum);
}
add(17, 3);
//
//add2 = (j, k) => {return j+k};
//
function howBig(string2) {
  console.log(string2.length);
}
howBig("Mississippi");
//
//
function joinString(string1, string2) {
  console.log(string1 + " " + string2);
}
joinString("I like bowling", "only on the weekends.");
//
//
function findChar(string1, num) {
  for (let i = 0; i < string1.length; i++) {
    if (i == num - 1) {
      // subtract 1 to make counting numbers match computer numbers
      console.log(string1[i]);
    }
  }
}
findChar("Hello World", 2);
//
// ? Not giving expected results

let length = "";
function lastChar(string1) {
  length = string1.length - 1; // solution was to subtract 1 because counter starts at 0
  return string1.charAt(length);
}
console.log(lastChar("Hello World"));
//
//
let passArray = [
  "password",
  "eyesDenttist2132!",
  "myPasswordisTheBest@",
  "notGood",
];
function findBestPasswords(passArray) {
  for (let i = 0; i < passArray.length; i++) {
    if (passArray[i].length > 10) {
      console.log(passArray[i]);
    }
  }
}
findBestPasswords(passArray);
//

function replaceEven(array3) {
  let newNum = 5; // or we could have set this as a function param to more flexibility
  for (let i = 0; i < array3.length; i++) {
    if (array3[i] % 2 == 0) {
      array3[i] = newNum; // or we could have just used number here instead of a var
    }
  }
  console.log(array3);
}
replaceEven([1, 3, 5, 6, 7]);
//
/* Declare a new variable called yourName that stores an object literal that represents you!
It should have all of the following keys: name, age, alive, and homeTown.
Give each of those keys an appropriate value.
Practice using dot notation to access each value on your object. */
//
let yourName = {
  name: "Paul",
  age: 56,
  alive: true,
  homeTown: "Fairfax",
};
yourName["currentLocation"] = "The BeanYard";
yourName.age = 42;
console.log(yourName.name);
console.log(yourName);
//
/* Create an array with 10 items in it
In a while loop, make a conditional that checks the number of items in the array is greater
than zero
In each iteration of the while loop, use shift or pop to remove an item.
Print out the item being removed.
Have a console message display when the loop is no longer executing. */
let array1 = [22, 57, 345, 567, 321, 454, 888, 66, 42, 876];
while (array1.length > 0) {
  var digi = array1.pop();
  console.log(digi);
  if (array1.length == 0) {
    console.log("Loop is done");
  }
}
console.log(array1);
