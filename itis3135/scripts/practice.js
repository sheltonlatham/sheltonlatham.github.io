document.addEventListener('DOMContentLoaded', function () {
    const originalConsoleLog = console.log;

    console.log = function (...args) {
        const outputElement = document.getElementById('output');
        outputElement.textContent += args.join(' ') + '\n';
        
        originalConsoleLog.apply(console, args);
    };

    document.getElementById('run-code').addEventListener('click', function () {
        const code = document.getElementById('code-input').value;
        document.getElementById('output').textContent = ''; 

        try {
            eval(code); 
        } catch (error) {
            document.getElementById('output').textContent = 'Error: ' + error.message;
        }
    });
});
