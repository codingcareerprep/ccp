const topicFilter = document.getElementById('topicFilter');
const questionsList = document.getElementById('dsa-QuestionsList');

function renderQuestions(filter) {
    const questions = questionsList.querySelectorAll('li');
    questions.forEach(q => {
        if (filter === 'all' || q.getAttribute('data-topic') === filter) {
            q.style.display = '';
        } else {
            q.style.display = 'none';
        }
    });
}

topicFilter.addEventListener('change', (e) => {
    renderQuestions(e.target.value);
});

// Initial render
renderQuestions('all');
