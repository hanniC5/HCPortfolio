$(document).ready(function () {
    $('button.hamburger').on('click', () => {
        console.log('button clicked');
        $(this).toggleClass('is-active');
    });
});