$(document).ready(function () {
    $('.wrapper.title').fadeIn();
    $('button.hamburger').on('click', () => {
        console.log('button clicked');
        $(this).toggleClass('is-active');
    });
});