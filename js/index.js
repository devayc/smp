$(document).ready(function() {
    if ($(window).width() > 1200) {
        $('#firstSlider').slick({
            slidesToShow: 1,
            prevArrow: "<img src='../image/left.svg' class='prev' alt='1'>",
            nextArrow: "<img src='../image/right.svg' class='next' alt='2'>",
            heigth: 100
        });
    } else {
        $('#firstMobileSlider').slick({
            slidesToShow: 1,
            prevArrow: "<img src='../image/left.svg' class='prev' alt='1'>",
            nextArrow: "<img src='../image/right.svg' class='next' alt='2'>",
            heigth: 20
        });
    }
    if ($(window).width() > 1200) {
        $('#thredSlider').slick({
            slidesToShow: 1,
            prevArrow: "<img src='../image/left.svg' class='prev' alt='1'>",
            nextArrow: "<img src='../image/right.svg' class='next' alt='2'>",
            heigth: 100
        });
    } else {
        $('#thredMobileSlider').slick({
            slidesToShow: 1,
            prevArrow: "<img src='../image/left.svg' class='prev' alt='1'>",
            nextArrow: "<img src='../image/right.svg' class='next' alt='2'>",
            heigth: 20
        });
    }
    if ($(window).width() > 1200) {
        $('#secondSlider').slick({
            slidesToShow: 1,
            heigth: 100,
            prevArrow: "<img src='../image/left.svg' class='prev' alt='1'>",
            nextArrow: "<img src='../image/right.svg' class='next' alt='2'>",
            asNavFor: "#mentorSlider",


        });
    } else {
        $('#secondMobileSlider').slick({
            slidesToShow: 1,
            prevArrow: "<img src='../image/left.svg' class='prev' alt='1'>",
            nextArrow: "<img src='../image/right.svg' class='next' alt='2'>",
            heigth: 20
        });
    }
    if ($(window).width() > 1200) {
        $('#mentorSlider').slick({
            slidesToShow: 1,

            heigth: 100,
            asNavFor: "#secondSlider",
        });
    } else {
        $('#mentorMobileSlider').slick({
            slidesToShow: 1,
            // prevArrow: "<img src='../image/left.svg' class='prev' alt='1'>",
            // nextArrow: "<img src='../image/right.svg' class='next' alt='2'>",
            asNavFor: "#secondMobileSlider",
        });
    }
    $('#firstEventSlider').slick({
        slidesToShow: 1,
        prevArrow: "<img src='../image/left.svg' class='prev' alt='1'>",
        nextArrow: "<img src='../image/right.svg' class='next' alt='2'>",
        heigth: 100
    });
    $('#secondEventSlider').slick({
        slidesToShow: 1,
        prevArrow: "<img src='../image/left.svg' class='prev' alt='1'>",
        nextArrow: "<img src='../image/right.svg' class='next' alt='2'>",
        heigth: 100
    });
    $('#thredEventSlider').slick({
        slidesToShow: 1,
        prevArrow: "<img src='../image/left.svg' class='prev' alt='1'>",
        nextArrow: "<img src='../image/right.svg' class='next' alt='2'>",
        heigth: 100
    });


    $(window).resize(function() {
        check('#firstSlider', '#firstMobileSlider')
        check('#thredSlider', '#thredMobileSlider')

        if (($(window).width() > 1200)) {
            if (!$('#mentorSlider').hasClass('slick-initialized')) {
                $('mentorSlider').slick({
                    slidesToShow: 1,
                    prevArrow: "<img src='../image/left.svg' class='prev' alt='1'>",
                    nextArrow: "<img src='../image/right.svg' class='next' alt='2'>",
                    heigth: 100,
                    asNavFor: "#secondSlider",
                });
            }

        } else {
            if (!$('#mentorMobileSlider').hasClass('slick-initialized')) {
                $('#mentorMobileSlider').slick({
                    slidesToShow: 1,
                    heigth: 100,
                    asNavFor: "#secondMobileSlider",
                });
            }

        }
        if (($(window).width() > 1200)) {
            if (!$('#secondSlider').hasClass('slick-initialized')) {
                $('#secondSlider').slick({
                    slidesToShow: 1,
                    heigth: 100,
                    asNavFor: "#mentorSlider",
                });
            }

        } else {
            if (!$('#secondMobileSlider').hasClass('slick-initialized')) {
                $('#secondMobileSlider').slick({
                    slidesToShow: 1,
                    heigth: 100,
                    prevArrow: "<img src='../image/left.svg' class='prev' alt='1'>",
                    nextArrow: "<img src='../image/right.svg' class='next' alt='2'>",
                    asNavFor: "#mentorMobileSlider",
                });
            }

        }

    });

    function check(name, nameMob) {
        if (($(window).width() > 1200)) {
            if (!$(name).hasClass('slick-initialized')) {
                $(name).slick({
                    slidesToShow: 1,
                    prevArrow: "<img src='../image/left.svg' class='prev' alt='1'>",
                    nextArrow: "<img src='../image/right.svg' class='next' alt='2'>",
                    heigth: 100
                });
            }

        } else {
            if (!$(nameMob).hasClass('slick-initialized')) {
                $(nameMob).slick({
                    slidesToShow: 1,
                    prevArrow: "<img src='../image/left.svg' class='prev' alt='1'>",
                    nextArrow: "<img src='../image/right.svg' class='next' alt='2'>",
                    heigth: 100
                });
            }

        }
    }
});










// $('.invite-formate-slider').slick({
//     slidesToShow: 1,
//     asNavFor: "#slider",

//     prevArrow: "<img src='../image/left.svg' class='prev' alt='1'>",
//     nextArrow: "<img src='../image/right.svg' class='next' alt='2'>",

// });


// if (($(window).width() > 1200)) {
//     if (!$('#thredSlider').hasClass('slick-initialized')) {
//         $('#thredSlider').slick({
//             slidesToShow: 1,
//             prevArrow: "<img src='../image/left.svg' class='prev' alt='1'>",
//             nextArrow: "<img src='../image/right.svg' class='next' alt='2'>",
//             heigth: 100
//         });
//     }

// } else {
//     if (!$('#thredMobileSlider').hasClass('slick-initialized')) {
//         $('#thredMobileSlider').slick({
//             slidesToShow: 1,
//             prevArrow: "<img src='../image/left.svg' class='prev' alt='1'>",
//             nextArrow: "<img src='../image/right.svg' class='next' alt='2'>",
//             heigth: 100
//         });
//     }

// }