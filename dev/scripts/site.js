const sScroll = function() {
    //console.log('this is from site.js');
    $('a').smoothScroll({
        speed: 700
    });
}

$(function() {
    sScroll(); 
    AOS.init({
        duration: 1200
    });   
});