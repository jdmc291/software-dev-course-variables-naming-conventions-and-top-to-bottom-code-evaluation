/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
  - What are the common pitfalls to avoid when naming variables?
  - How do clear variable names benefit team collaboration?
  
*/
//Changed letter variable to nameSelected due to it being more descriptive
let nameSelected = "Alice";
//Changed letter variables to num1 and num2 because there are 2 numbers and it is slightly more descriptive
let num1 = 5;
let num2 = 20;
// I made variables for the items and added them into the sentence
let item1 = "Ice Cream"
let item2 = "Sunglasses"
//changed variable to my sentence because it is concatenating all the other variables to make a full sentence
let mySentence = nameSelected + " bought " + num1 + " items for $" + num2 + ". They were " + item1 + " and " + item2;

console.log(mySentence);
