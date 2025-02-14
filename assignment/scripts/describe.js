// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


--------------------------------------------------------------------------------------------------------------------------

// - Questions to review: 2, 4, 5

--------------------------------------------------------------------------------------------------------------------------

// - Things to practice on : 

// 'keyboard shortcuts', 
// '!ask Questions', 
// '(console.log), test test test!
// 'readable structure',
// 'commit more often',

--------------------------------------------------------------------------------------------------------------------------

// - Questions to ask:

// "set an if conditonal to check" <- // to my understanding, is a conditonal and statement the same thing? //,
// "",
--------------------------------------------------------------------------------------------------------------------------


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable and set name to 'Dane' as a string.
// We create a conditional to check if name and value equals to variable. (in this case it does not;  (name === 'Mary'); )
// Variable (name === 'Mary') then console.log will state 'Hi Mary!'
// Variable does not equal to mary, (var Name = 'Dane"), 
// We console.log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {

} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// setting variable to '123' as a string
// if variable matches type and value, code then will multiply * 2, then then we return with 'super'
// if code is less than 250, we return with 'duper'
// Then console.log will return the secret of 'super' or 'duper' depending on variable result after mutlipled by * 2

//CODE
/*

let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// [ ] set a variable to check if isStudent equals to true or false;
// [ ] set a number variable to check if age equals to 34;
// [ ] set a number variable to check if zip equals to 55407;

// [ ] create an if conditonal, if student euqals to true and zip code is less than 8000, console `You're a student on the West Coast!`

// [ ] create an if else conditional, if student is false and less than 30 years old, console `what are your hobbies`?

// [ ] create an if else conditonal, if student is true, console 'Welcome to Prime!'

// [ ] create an else conditional, console 'How about the weather?'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} 

else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
}
else if (isStudent === true) {
   //console.log('Welcome to Prime!');
}
else {
  console.log('How about the weather?')
}

// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'


/*
let colorOne = 'red';     // FIX - colorOne = 'red'; - colorOne should be 'blue'
let colorTwo = 'blue';    // FIX - colorTwo = 'blue'; - colorTwo should be 'red'
let mix = true;
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'



//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;


if(minAge <= age) {     //FIX if (age <= minAge)   
  console.log('no entry');
} else {
  console.log('enter');
}
*/
