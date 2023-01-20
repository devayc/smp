$(document).ready(function() {
    if ($(window).width() > 1200) {
        $('#firstSlider').slick({
            slidesToShow: 1,
            prevArrow: "<img src='/image/left.svg' class='prev' alt='1'>",
            nextArrow: "<img src='/image/right.svg' class='next' alt='2'>",
            heigth: 100
        });
    } else {
        $('#firstMobileSlider').slick({
            slidesToShow: 1,
            prevArrow: "<img src='/image/left.svg' class='prev' alt='1'>",
            nextArrow: "<img src='/image/right.svg' class='next' alt='2'>",
            heigth: 20
        });
    }
    if ($(window).width() > 1200) {
        $('#thredSlider').slick({
            slidesToShow: 1,
            prevArrow: "<img src='/image/left.svg' class='prev' alt='1'>",
            nextArrow: "<img src='/image/right.svg' class='next' alt='2'>",
            heigth: 100
        });
    } else {
        $('#thredMobileSlider').slick({
            slidesToShow: 1,
            prevArrow: "<img src='/image/left.svg' class='prev' alt='1'>",
            nextArrow: "<img src='/image/right.svg' class='next' alt='2'>",
            heigth: 20
        });
    }
    if ($(window).width() > 1200) {
        $('#secondSlider').slick({
            slidesToShow: 1,
            heigth: 100,


        });
    } else {
        $('#secondMobileSlider').slick({
            slidesToShow: 1,
            prevArrow: "<img src='/image/left.svg' class='prev' alt='1'>",
            nextArrow: "<img src='/image/right.svg' class='next' alt='2'>",
            heigth: 20
        });
    }
    if ($(window).width() > 1200) {
        $('#mentorSlider').slick({
            slidesToShow: 1,
            prevArrow: "<img src='/image/left.svg' class='prev' alt='1'>",
            nextArrow: "<img src='/image/right.svg' class='next' alt='2'>",
            heigth: 100,
            asNavFor: "#secondSlider",
        });
    } else {
        $('#mentorMobileSlider').slick({
            slidesToShow: 1,
            prevArrow: "<img src='/image/left.svg' class='prev' alt='1'>",
            nextArrow: "<img src='/image/right.svg' class='next' alt='2'>",
            heigth: 20
        });
    }


    $(window).resize(function() {
        check('#firstSlider', '#firstMobileSlider')
        check('#thredSlider', '#thredMobileSlider')


    });

    function check(name, nameMob) {
        if (($(window).width() > 1200)) {
            if (!$(name).hasClass('slick-initialized')) {
                $(name).slick({
                    slidesToShow: 1,
                    prevArrow: "<img src='/image/left.svg' class='prev' alt='1'>",
                    nextArrow: "<img src='/image/right.svg' class='next' alt='2'>",
                    heigth: 100
                });
            }

        } else {
            if (!$(nameMob).hasClass('slick-initialized')) {
                $(nameMob).slick({
                    slidesToShow: 1,
                    prevArrow: "<img src='/image/left.svg' class='prev' alt='1'>",
                    nextArrow: "<img src='/image/right.svg' class='next' alt='2'>",
                    heigth: 100
                });
            }

        }
    }
});










// $('.invite-formate-slider').slick({
//     slidesToShow: 1,
//     asNavFor: "#slider",

//     prevArrow: "<img src='/image/left.svg' class='prev' alt='1'>",
//     nextArrow: "<img src='/image/right.svg' class='next' alt='2'>",

// });


// if (($(window).width() > 1200)) {
//     if (!$('#thredSlider').hasClass('slick-initialized')) {
//         $('#thredSlider').slick({
//             slidesToShow: 1,
//             prevArrow: "<img src='/image/left.svg' class='prev' alt='1'>",
//             nextArrow: "<img src='/image/right.svg' class='next' alt='2'>",
//             heigth: 100
//         });
//     }

// } else {
//     if (!$('#thredMobileSlider').hasClass('slick-initialized')) {
//         $('#thredMobileSlider').slick({
//             slidesToShow: 1,
//             prevArrow: "<img src='/image/left.svg' class='prev' alt='1'>",
//             nextArrow: "<img src='/image/right.svg' class='next' alt='2'>",
//             heigth: 100
//         });
//     }

// }