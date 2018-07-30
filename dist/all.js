$('.top a').click(function(event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: 0 });
});
//回到頂點
var slideIndex = [1, 1, 1];
/* Class the members of each slideshow group with different CSS classes */
var slideId = ["mySlides1", "mySlides2", "mySlides3"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);


function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}

//
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > $('header').offset().top) {
            $('.nav').addClass('fixed');
        } else {
            $('.nav').removeClass('fixed');
        }
        // $(window).scrollTop() >= $('.skill').offset().top {
        //     $('.skill').fadOut();
        // }
    });
    //menu固定上方
    $('.showmenu').click(function() {
        event.preventDefault();
        $('.nav ul').toggleClass('block');
    });
});


AOS.init();
//滾動控制器