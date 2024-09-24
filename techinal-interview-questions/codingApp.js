function showAllQuestions(selectedLang) {
    const outputDiv = document.getElementById("code-output");
    outputDiv.innerHTML = ''; // Clear the output area

    Object.keys(codingQuestions).forEach(questionKey => {
        const question = codingQuestions[questionKey];
        
        // Display question header
        outputDiv.innerHTML += `<h3>${question.question}</h3>`;

         // Display input
    outputDiv.innerHTML += `<p><strong>Input:</strong> ${question.input || "N/A"}</p>`;
    
    // Display output
    outputDiv.innerHTML += `<p><strong>Output:</strong> ${question.output || "N/A"}</p>`;

        // Show the code for the selected language
        if (question.solutions[selectedLang]) {
            outputDiv.innerHTML += `<h4>${selectedLang.toUpperCase()}</h4><pre><code>${question.solutions[selectedLang]}</code></pre>`;
        }
    });
}

function filterLanguage() {
    const selectedLang = document.getElementById("language-filter").value;
    showAllQuestions(selectedLang);
}

// Show all questions with the default language (C++ initially)
document.addEventListener("DOMContentLoaded", function() {
    const defaultLang = 'cpp';
    document.getElementById("language-filter").value = defaultLang;
    showAllQuestions(defaultLang);
});
