const sScroll = function () {
    console.log('this is from site.js');
    $('a').smoothScroll({
        speed: 600
    });
}

$(function() {
    sScroll();
    $('.title').fadeIn('slow');
    $('button.hamburger').on('click', () => {
        console.log('button clicked');
        $(this).toggleClass('is-active');
    });
});