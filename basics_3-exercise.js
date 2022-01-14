//1. Create a for loop that starts at 7, terminates at 44, and increments by 5
//2. Create a for loop that starts at 1000, decrements by 100, and must be greater than
//negative -1000
//3. Create a string with the text ‘KATAKANA’. Iterate over the word with a for loop, and for
//every A, print out “Found an A!”
//
for (i = 7; i <= 44; i = i + 5) {
  console.log(i);
}

for (i = 1000; i > -1000; i = i - 100) {
  console.log(i);
}

let string1 = "KATAKANA";
for (i = 0; i < string1.length; i++) {
  if (string1.charAt(i) == "A") {
    console.log("Found an A!");
  }
}
