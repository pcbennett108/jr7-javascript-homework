//Create an array of four animals called animals.
//Create a function called nameAnimals.
//Within your function, create a for loop that logs “Mommy, I want to see [insert animal name here]! Waaah!”
//With your array (and - if needed - with your knowledge of parameters), invoke your function to ensure it is working correctly.
var animals = ["moose", "bear", "pig", "puma"];
function nameAnimals() {
  for (i = 0; i < animals.length; i++) {
    console.log("Mommy, I want to see a " + animals[i] + "! Waaah!");
  }
}
nameAnimals();
//
/* Create a function that dynamically adds the following animal names to the current array.
You must NOT recreate the array, only add values.
Tiger
Wunderpus photogenicus
Bear
Pink Fairy Armadillo
Coyote
Rasberry Crazy Ant
Moose
Satanic Leaf-Tailed Gecko
Lion
In the function that is printing out, add an if statement. 
    If the animal name is longer than 10 characters, say “Mommy, that animal name is too long
    to pronounce :(“, Otherwise print the other message
Make sure the code is re-usable for both adding the names, iterating through the array, 
    and printing the outputs. Avoid duplicate code. */
//
let zoo = [];
function zooKeeper(critter) {
  let tooLong = "Mommy, that animal name is too long to pronounce :(";
  if (critter == null) {
    console.log("No new critters were added.");
  } else if (critter.length > 10) {
    zoo.push(tooLong);
  } else {
    zoo.push(critter);
  }
  for (i = 0; i < zoo.length; i++) {
    console.log(zoo[i]);
  }
}
zooKeeper("Tiger");
zooKeeper("Wunderpus photogenicus");
zooKeeper("Bear");
zooKeeper("Pink Fairy Armadillo");
zooKeeper("Coyote");
zooKeeper("Rasberry Crazy Ant");
zooKeeper("Moose");
zooKeeper("Satanic Leaf-Tailed Gecko");
zooKeeper("Lion");
zooKeeper();
