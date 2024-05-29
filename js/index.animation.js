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
