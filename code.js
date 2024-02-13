// Function definition for 'converter'
function converter() {
    // Prompt the user to input a word or a sentence and store it in the 'info' variable
    const info = prompt('Give me a word or a sentence');
    // Get the length of the input string and store it in the 'length' variable
    const length = info.length;
    // Return the length of the input string
    return length;
}

// Call the 'converter' function to obtain the length of the input string, then log the result to the console
console.log(converter());
