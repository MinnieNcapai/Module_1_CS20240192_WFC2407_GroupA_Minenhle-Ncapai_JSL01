function validateSyntax() {
       // Get the value of the input field with id 'petInput'
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result
    
      // Check if input starts with 'pet_' and contains only letters and numbers 
     if ( input.startsWith(pet_) &&  /^[a-zA-Z0-9]*$/.test(input.substring(4))) {
        result = "Valid Syntax";  // If valid, set result to "Valid Syntax"
     } else {
        result = "Invalid Syntax"; // If not, set result to "Invalid Syntax"
     }
      // Display the result in the HTML element with id 'result'
            document.getElementById('result').innerText = result;
    // Log the result to the console
        console.log (result)
}

// Add an event listener to the button with id 'validateButton' that triggers the validateSyntax function when clicked
document.getElementById ('validateButton').addEventListener ('click',validateSyntax);
