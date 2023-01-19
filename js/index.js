$(document).ready(function() {
    $('.work-formate-slider').slick({
        slidesToShow: 1,
        prevArrow: "<img src='/image/left.svg' class='prev' alt='1'>",
        nextArrow: "<img src='/image/right.svg' class='next' alt='2'>",
        height: 100
    });

    $('#slider').slick({
        slidesToShow: 1,

        height: 100,

    });
    $('.invite-formate-slider').slick({
        slidesToShow: 1,
        asNavFor: "#slider",
        height: 100,
        prevArrow: "<img src='/image/left.svg' class='prev' alt='1'>",
        nextArrow: "<img src='/image/right.svg' class='next' alt='2'>",

    });
});