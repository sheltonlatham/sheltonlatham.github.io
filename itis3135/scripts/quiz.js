document.getElementById('submit-quiz').addEventListener('click', function () {
    const answers = {
        q1: '2', 
        q2: '1', 
        q3: '2'
    };

    for (let question in answers) {
        const userAnswer = document.getElementById(question).value;
        const feedbackElement = document.getElementById(`feedback-${question}`);

        if (userAnswer === answers[question]) {
            feedbackElement.textContent = '✔ Correct!';
            feedbackElement.style.color = 'green';
        } else {
            feedbackElement.textContent = '✘ Incorrect.';
            feedbackElement.style.color = 'red';
        }
    }
});
