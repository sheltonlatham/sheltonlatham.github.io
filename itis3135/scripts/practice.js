document.getElementById('run-code').addEventListener('click', function() {
    const code = document.getElementById('code-input').value;
    
    document.getElementById('output').textContent = '';

    try {
        const result = eval(code);

        document.getElementById('output').textContent = result === undefined ? 'No output' : result;
    } catch (error) {
        
        document.getElementById('output').textContent = 'Error: ' + error.message;
    }
});
