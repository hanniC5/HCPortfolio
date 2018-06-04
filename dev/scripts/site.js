const sScroll = function() {
    console.log('this is from site.js');
    $('a').smoothScroll({
        speed: 500
    });
}
const displayHamNav = function() {
    $('button.hamburger.hamburger--squeeze').on('click', () => {
        $('button.hamburger').toggleClass('is-active');
        $('nav.homeNav').toggleClass('display');
    });
    $('a.homeLink').on('click', () => {
        $('button.hamburger').removeClass('is-active');
        $('nav.homeNav').removeClass('display');
    });
}

$(function() {
    sScroll();
    $('div.title').fadeIn('slow');
    displayHamNav();
    
});