$(document).ready(function () {
    $('.shake-btn').click(function () {
        // Add the shake animation class
        $(this).addClass('shake-animation');

        // Remove the shake animation class after the animation ends
        setTimeout(() => {
            $(this).removeClass('shake-animation');
        }, 500); // Adjust the time to match the duration of the animation
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const texts = [
        'UI/UX Designer',
        'Interior Designer',
        'Fine Art Painter',
        'Miniature Painter'
    ];

    let currentIndex = 0;
    const heroTextElement = document.getElementById('hero-text');

    function updateText() {
        const newH2 = document.createElement('h2');
        newH2.textContent = texts[currentIndex];
        heroTextElement.appendChild(newH2);

        // Ensure the new text is visible
        setTimeout(() => {
            newH2.classList.add('show');
        }, 1000); // Small delay to ensure transition

        // Remove the old text
        const previousParagraph = heroTextElement.querySelector('h2.show');
        if (previousParagraph) {
            previousParagraph.classList.remove('show');
            heroTextElement.removeChild(previousParagraph);
            // setTimeout(() => {
            //
            // }, 1000); // Match this duration to the transition duration
        }

        // Update the index for the next text
        currentIndex = (currentIndex + 1) % texts.length;
    }

    // Initial text update
    updateText();

    // Set the interval for updating text
    setInterval(updateText, 3000);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

