
// Example
// Create an array of 5 friends
function partOneA () {
  let friends = [];
  // 1. Add your friends to the array
  friends[0] = "Andy";
  friends[1] = "Betty";
  friends[2] = "Cathy";
  friends[3] = "Danna";
  friends[4] = "Edward";

  // 2. write your friends to the message
  messageParagraph.innerHTML = `Your friends are ${friends[0]}, ${friends[1]}, ${friends[2]}, ${friends[3]}, and ${friends[4]}.`;

}

// Try It!
function partOneB () {
  alert("Try it!");
  let friends 
  friends = [];
  // 1. TODO: Add your own friends to the array

  // 2. TODO: write your friends to the message

}

// Example
// use += to add to the message
function partTwoA () {
  let friends = [];
  // 1. Add your friends to the array
  friends[0] = "Andy";
  friends[1] = "Betty";
  friends[2] = "Cathy";
  friends[3] = "Danna";
  friends[4] = "Edward";

  // 2. write your friends to the innerHTML of the document
  messageParagraph.innerHTML = "Your friends are ";
  messageParagraph.innerHTML += `${friends[0]}`;
  messageParagraph.innerHTML += `, ${friends[1]}`;
  messageParagraph.innerHTML += `, ${friends[2]}`;
  messageParagraph.innerHTML += `, ${friends[3]}`;
  messageParagraph.innerHTML += `, ${friends[4]}`;

}

// Try it!
function partTwoB () {
  let friends = [];
  // 1. Add your friends to the array

  // 2. write your friends to the innerHTML of the document

}

// Example
// add more friends from the prompt
function partThreeA () {
  // 1. prompt for a friend
  let friend = prompt("Enter a friend's name.");

  // 2. add the friend to the message
  messageParagraph.innerHTML += `, ${friend}`;
}

// Try it!
// Try prompting for a friend with a slightly different prompt or writing the message in a slightly different format.
function partThreeB () {
  // 1. prompt for a friend

  // 2. add the friend to the message
}

// Example
// Keep all the friends in an array, too.
let myBestFriends = [];
function partFourA () {
  let totalBestFriends, newBestFriend;
  totalBestFriends = myBestFriends.length;
  // 1. prompt for a friend
  newBestFriend = prompt(`You have ${totalBestFriends} best friends. To add another, enter a friend's name.`);

  // 2. add the friend to the array with push()
  myBestFriends.push(newBestFriend);

  // 3. add the friend to the message
  // Note: you can use HTML in the string to create HTML elements in the document. 
  messageList.innerHTML += `<li>${newBestFriend}</li>`;

  // 4. log the array to the console for debugging
  // Note: This will show in the Dev Tools
  console.log(myBestFriends);
}

// Try it!
// Now ask the user to enter their favorite ice cream flavors.
let myFavFlavors = [];
function partFourB () {
  alert("Try it!");
  let totalFavFlavors, newFavFlavor;
  totalFavFlavors = myFavFlavors.length;

  // 1. prompt for a flavor

  // 2. add the flavor to the array with push()

  // 3. add the flavor to the message

  // 4. log the array to the console for debugging

}

