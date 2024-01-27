document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('textInput');
    const wordCountDisplay = document.getElementById('wordCount');

    textInput.addEventListener('input', function () {
        const text = textInput.value;
        const words = countWords(text);
        wordCountDisplay.textContent = words;
    });

    function countWords(text) {
        // Remove leading and trailing whitespaces and split the text into words
        const wordsArray = text.trim().split(/\s+/);
        // Filter out empty strings
        const nonEmptyWords = wordsArray.filter(word => word.length > 0);
        // Return the count of non-empty words
        return nonEmptyWords.length;
    }
});