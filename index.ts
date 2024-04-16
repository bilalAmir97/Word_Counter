#! /usr/bin/env node 

// Import the 'inquirer' module, which is a command line interface for Node.js
import inquirer from "inquirer"

// Declare a constant 'answer' and assign it the result of inquirer.promt function.
const answers: {
    Sentence: string;
} = await inquirer.prompt([
    {
        name:"Sentence",
        type: "input",
        message: "Enter your Sentence to count the word:",

    },
])

const words = answers.Sentence.trim().split(" ")

// Print the array words to the console.
console.log(words)

// Print the word count of the sentence to the console.
console.log(`Your Sentence word count is ${words.length}`);
