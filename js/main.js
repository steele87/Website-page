$(document).ready(function() {
    $('img').mouseenter(function() {
        $(this).animate({
            height: '+=5px'
        });
    });
    $('img').mouseleave(function() {
        $(this).animate({
            height: '-=5px'
        }); 
    });
   
 });