// Day 4: Loops

// In day three we learned how to create arrays and add to them.
// Today we will learn how to loop through arrays.
// We can save some time and reduce the lines of code we need to write with loops.
// Feel free to go back to Day 3 and add compare the we did it there with the we are doing it today.


// Example
// for loop with alerts
function partOneA () {
  let highNumber = 4;
  // 1. Create a for loop.
  // Create a for loop with this syntax.
  // NOTE: You will need to memorize this syntax!
  for (let i = 0; i < highNumber; i++) {
    // 2. give the user and alert with the current number.
    alert(`The number is ${i}`);
  }
}

// Try It!
// Create a loop with a different high number
function partOneB () {
  alert("Try it!");
  // 1. Create a for loop.
  for (let i = 1; i <= 10; i++) {
    // 2. give the user and alert with the current number.
    alert(`Current number: ${i}`);
  }
}

// Example
// A for loop over an array
function partTwoA () {
  messageParagraph.innerHTML = "Friends";

  // 1. Create an array of 5 friends
  let friends = ["Andy", "Betty", "Cathy", "Danna", "Edward"];

  // 2. Find the length of the array
  let highNumber = friends.length;

  // 3. Create a for loop.
  for (let i = 0; i < highNumber; i++) {
    // 4. give the user and alert with the current friend.
    alert(`The friend is ${friends[i]}`);
  }
}

// Try it!
// Try to loop over favorite flavors
// Or any other topic you like.
function partTwoB () {
  messageParagraph.innerHTML = "Flavors";

  // 1. Create an array of 5 flavors
  let flavors = ["Chocolate", "Vanilla", "Strawberry", "Mint", "Cookie Dough"];
  // 2. Find the length of the array
  let highNumber = flavors.length;
  // 3. Create a for loop.
  for (let i = 0; i < highNumber; i++) {
    // 4. give the user and alert with the current friend.
    alert(`The flavor is ${flavors[i]}`);
  }
}

// Example
// Instead of alerting, write to the innerHTML of the list
function partThreeA () {
  messageParagraph.innerHTML = "Friends";

  // 1. create an array of 5 friends
  let friends = ["Andy", "Betty", "Cathy", "Danna", "Edward"];
  // 2. find the length of the array
  let highNumber = friends.length;
  // 3. create a for loop
  for (let i = 0; i < highNumber; i++) {
    // 4. write the friend to the innerHTML of the list
    messageList.innerHTML += `<li>${friends[i]}</li>`;
  }
}

// Try it!
// Try to loop over favorite flavors
function partThreeB () {
  messageParagraph.innerHTML = "Flavors";

  alert("Try it!");
  // 1. create an array of 5 flavors
  let flavors = ["Mango", "Pistachio", "Caramel", "Coconut", "Lemon"];
  // 2. find the length of the array
  let highNumber = flavors.length;
 
  // 3. create a for loop
  for (let i = 0; i < highNumber; i++) {
    // 4. write the friend to the innerHTML of the list
    messageList.innerHTML += `<li>${flavors[i]}</li>`;
}

// Example
// Now let's add friends to the list
// We can reset the innerHTML each time
// Then rebuild the list with the loop
// This will give us a fresh list each time
let friends = []; // NOTE: the friends array is outside the function. Why?
function partFourA () {
  let newFriend, highNumber;
  // 1. prompt for a new friend 
  newFriend = prompt("Add a friend to the list.");

  // 2. add the friend to the array with push()
  friends.push(newFriend);


  // 3. reset the list in the innerHTML
  messageList.innerHTML = "";
  // 4. set the message to "Friends"
  messageParagraph.innerHTML = "Friends";

  // 5. Get the exact length of the array
  highNumber = friends.length;

  // 6. write all the names back to the HTML list from the array, updated with our new friend.
  for (let i = 0; i < highNumber; i++) {
    messageList.innerHTML += `<li>${friends[i]}</li>`;
  }
}

// Try it!
// Try to add flavors to the list
let flavors = [];
function partFourB () {
  let newFlavor, highNumber;

  // 1. prompt for a flavor
  newFlavor = prompt("Add a new ice cream flavor to the list.");
  // 2. add the flavor to the array with push()
  flavors.push(newFlavor);
  // 3. reset the list in the innerHTML
  messageList.innerHTML = "";
  // 4. set the message to "Flavors"
  messageParagraph.innerHTML = "Flavors";

  // 5. Get the exact length of the array
  highNumber = flavors.length;

  // 6. write all the flavors back to the HTML list from the array, updated with our new flavor.
  for (let i = 0; i < highNumber; i++) {
    messageList.innerHTML += `<li>${flavors[i]}</li>`;
}

// BONUS
// Reimplement your idea from day 3 using loops, or think of a new idea.
// EXTRA BONUS: Use an `if` statement and the JavaScript array method `includes` to check if the data entered is a duplicate. Do not add it if it is a duplicate.