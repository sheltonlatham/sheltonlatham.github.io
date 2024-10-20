// Function to execute user's JavaScript code
document.getElementById('run-code').addEventListener('click', function() {
    const code = document.getElementById('code-input').value;
    
    // Clear the previous output
    document.getElementById('output').textContent = '';

    try {
        // Use 'eval' to execute the user's JavaScript code
        const result = eval(code);

        // Display the result in the output section
        document.getElementById('output').textContent = result === undefined ? 'No output' : result;
    } catch (error) {
        // Display any error in the output section
        document.getElementById('output').textContent = 'Error: ' + error.message;
    }
});
