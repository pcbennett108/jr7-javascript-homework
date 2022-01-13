/* The tip calculator should have 1 function that takes 2 parameters: the total price of the meal and the tip that was given
The calculator should first determine what percentage is the current tip of the meal
A bad tip is 5% or less, an ok tip is under 10% but greater than 5%, a good tip is between 10% and 20%, and a great tip is greater than 20%
The calculator should output the following values based on where the tip falls:
Less than 5%: “You are an awful tipper”
Between 5% and 10%: “You are an ok tipper!”
Between 10% and 20% “You are a good tipper!”
Greater than 20%: “You are a great tipper!” */
//
function tipCalc(price, tip) {
  var tipRate = "";
  var shout = "";
  var fullTxt = "";
  tipRate = (tip / price) * 100;
  if (tipRate < 5) {
    shout = "You are an awful tipper!";
  } else if (tipRate >= 5 && tipRate <= 10) {
    shout = "You are an OK tipper!";
  } else if (tipRate > 10 && tipRate <= 20) {
    shout = "You are a good tipper!";
  } else if (tipRate > 20) {
    shout = "You are a great tipper!";
  }
  fullTxt = tipRate + "% " + shout;
  console.log(fullTxt);
}
tipCalc(50, 10);
tipCalc(50, 4);
tipCalc(50, 16);
tipCalc(100, 10);
tipCalc(120, 10);
// todo set decimal places
//todo error control
