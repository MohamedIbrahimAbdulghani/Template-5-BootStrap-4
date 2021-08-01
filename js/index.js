$(function() {
    var WinH    = $(window).height(),
        UpperH  = $('.upper-bar').innerHeight(),
        NavH    = $('.navbar').innerHeight();

    $('.slider, .carousel-item').height(WinH - (UpperH + NavH));


    //Featured Work
    $('.featured-work ul li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        
    });


});

//this function To Button ScrollTop 
let myButton = document.querySelector(".scrolltop");

window.onscroll = function() {
    // this function to know me the number in my scroll
    
    //console.log(window.pageYOffset)

    if(window.pageYOffset >= 600) {
        myButton.style.display = "block";
    }
    else {
        myButton.style.display = "none";
    }
}
myButton.addEventListener("click" , scroll);

function scroll() {
    window.scrollTo(0 , 0);
}