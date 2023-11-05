// Practising if else conditions
console.log("Before condition");
let random = Math.random();
if (random < 0.5) {
  console.log("Math works: Number is less than 0.5");
} else if (random > 0.5) {
  console.log("Number is greater than 0.5");
} else {
  console.log("Number is equal to 0.5");
}
console.log("After condition");

// utilizing all the things learnt up to now
let age = prompt("Enter your age");
if (typeof age != "number") {
  alert("please enter valid age");
  age = prompt("Enter your age");
} else if (age < 5) {
  console.log("You are a baby.  You get in for free!");
  alert("Hey baby... you are free to go");
} else if (age < 10) {
  console.log("You are a child.  You pay $10");
  console.error("bring your parents with you!!");
} else if (age < 65) {
  console.log("You are an adult. You pay $20");
  alert("Hey ... Please pay 20 to move forward");
} else {
  console.log("You are a senior. You pay $10");
  console.warn("you pay 10 only");
}

// Checking password

const password = prompt("please enter a new password");

// Password must be 6+ characters
if (password.length >= 6) {
  // Password cannot include space
  if (password.indexOf(" ") === -1) {
    console.log("Valid Password!");
  } else {
    console.log("Password cannot contain spaces!");
  }
} else {
  console.log("PASSWORD TOO SHORT! Must be 6+ characters");
}

// switch control flow statement

let day = 9;
switch (day) {
  case 1:
    console.log("day1 ");
    break;
  case 2:
    console.log("day2 ");
    break;
  case 3:
    console.log("day3 ");
    break;
  case 4:
    console.log("day4 ");
    break;
  case 5:
    console.log("day5 ");
    break;
  case 6:
    console.log("day6 ");
    break;
  default:
    console.log('Jolly day');
    
}
