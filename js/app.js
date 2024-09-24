document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});

// theme.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggler = document.getElementById('theme-toggler');
    
    // Check for saved user preference in localStorage
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    updateIcon(currentTheme);

    themeToggler.addEventListener('click', () => {
        // Toggle theme
        const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        
        // Update icon based on the new theme
        updateIcon(newTheme);

        // Save user preference in localStorage
        localStorage.setItem('theme', newTheme);
    });

    function updateIcon(theme) {
        if (theme === 'dark') {
            themeToggler.classList.remove('fa-sun');
            themeToggler.classList.add('fa-moon');
        } else {
            themeToggler.classList.remove('fa-moon');
            themeToggler.classList.add('fa-sun');
        }
    }
});


// tping.js
const typingTextElement = document.getElementById('typing-text');
const textToType = typingTextElement.textContent;
typingTextElement.textContent = ''; // Clear the initial text

let index = 0;
const typingSpeed = 100; // Speed of typing in milliseconds

function typeText() {
    if (index < textToType.length) {
        typingTextElement.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed);
    }
}

// Start typing effect when page loads
window.onload = typeText;


// for copy btn
document.getElementById('copy-icon').addEventListener('click', copyToClipboard);

function copyToClipboard() {
    const sqlInput = document.getElementById('sql-input');
    sqlInput.select();
    document.execCommand('copy');
    
}