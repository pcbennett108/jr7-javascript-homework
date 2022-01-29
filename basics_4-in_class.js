let string1 = "A-tisket a-tasket A green and yellow basket.";

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
console.log(truncateString(string1, 8));
//
//
//Divisible by Three
function divByThree(num) {
  if (num % 3 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(divByThree(6));
console.log(divByThree(18));
console.log(divByThree(7));
//
//
//Keylist
let Thing = {
  face: "big",
  height: 6,
  legs: "none",
};
function keyList(obj1) {
  return Object.keys(obj1);
}
console.log(keyList(Thing));
//
//
//
let mySelf = {
  firstName: "Paul",
  lastName: "Bennett",
  age: 56,
  favoriteCoffee: "Kopi Luwak",
  codingLanguages: ["css", "html", "javaScript"],
};
function adLang(lang) {}
