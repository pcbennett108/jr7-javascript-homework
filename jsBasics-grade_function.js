function grade(score) {
  var inNum = typeof score;
  if (inNum != "number") {
    // works for all Types EXCEPT Undefined. How to fix?
    console.log("Please enter a number between 0 and 100");
  } else if (score <= 100 && score >= 97) {
    console.log("Your grade is.... A+");
  } else if (score <= 96 && score >= 93) {
    console.log("Your grade is.... A");
  } else if (score <= 92 && score >= 90) {
    console.log("Your grade is.... A-");
  } else if (score <= 89 && score >= 87) {
    console.log("Your grade is.... B+");
  } else if (score <= 86 && score >= 83) {
    console.log("Your grade is.... B");
  } else if (score <= 82 && score >= 80) {
    console.log("Your grade is.... B-");
  } else if (score <= 79 && score >= 77) {
    console.log("Your grade is.... C+");
  } else if (score <= 76 && score >= 73) {
    console.log("Your grade is.... C");
  } else if (score <= 72 && score >= 70) {
    console.log("Your grade is.... C-");
  } else if (score <= 69 && score >= 67) {
    console.log("Your grade is.... D+");
  } else if (score <= 66 && score >= 65) {
    console.log("Your grade is.... D");
  } else if (score < 65 && score >= 0) {
    console.log("Your grade is.... F");
  } else {
    console.log("please enter a valid score.");
  }
  console.log(inNum); // this line is for troubleshooting only.
}

grade("wut");
grade(123);
grade(88);
grade();
//grade(qwe);
