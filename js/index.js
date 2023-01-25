$(document).ready(function() {
    if ($(window).width() > 1200) {
        $('#firstSlider').slick({
            slidesToShow: 1,
            prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
            nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",
            heigth: 100
        });
    } else {
        $('#firstMobileSlider').slick({
            slidesToShow: 1,
            prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
            nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",
            heigth: 20
        });
    }
    if ($(window).width() > 1200) {
        $('#thredSlider').slick({
            slidesToShow: 1,
            prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
            nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",
            heigth: 100
        });
    } else {
        $('#thredMobileSlider').slick({
            slidesToShow: 1,
            prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
            nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",
            heigth: 20
        });
    }
    if ($(window).width() > 1200) {
        $('#secondSlider').slick({
            slidesToShow: 1,
            heigth: 100,
            prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
            nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",
            asNavFor: "#mentorSlider",


        });
    } else {
        $('#secondMobileSlider').slick({
            slidesToShow: 1,
            prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
            nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",
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
            // prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
            // nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",
            asNavFor: "#secondMobileSlider",
        });
    }
    $('#firstEventSlider').slick({
        slidesToShow: 1,
        prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
        nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",
        heigth: 100
    });
    $('#secondEventSlider').slick({
        slidesToShow: 1,
        prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
        nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",
        heigth: 100
    });
    $('#thredEventSlider').slick({
        slidesToShow: 1,
        prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
        nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",
        heigth: 100
    });


    $(window).resize(function() {
        check('#firstSlider', '#firstMobileSlider')
        check('#thredSlider', '#thredMobileSlider')

        if (($(window).width() > 1200)) {
            if (!$('#mentorSlider').hasClass('slick-initialized')) {
                $('mentorSlider').slick({
                    slidesToShow: 1,
                    prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
                    nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",
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
                    prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
                    nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",
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
                    prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
                    nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",
                    heigth: 100
                });
            }

        } else {
            if (!$(nameMob).hasClass('slick-initialized')) {
                $(nameMob).slick({
                    slidesToShow: 1,
                    prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
                    nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",
                    heigth: 100
                });
            }

        }
    }
});



// $('#firstSlider').slick({
//     slidesToShow: 1,
//     prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
//     nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",
//     heigth: 100
// });

// if ($(window).width() > 1200) {

// }

// $(document).ready(function() {
//     if ($(window).width() > 1200) {
//         $('#firstSlider').slick({
//             slidesToShow: 1,
//             prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
//             nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",
//             heigth: 100
//         });

//     } else {
//         $('#firstMobileSlider').slick({
//             slidesToShow: 1,
//             prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
//             nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",
//             heigth: 20
//         });
//     }
//     if ($(window).width() > 1200) {
//         $('#thredSlider').slick({
//             slidesToShow: 1,
//             prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
//             nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",
//             heigth: 100
//         });
//     } else {
//         $('#thredMobileSlider').slick({
//             slidesToShow: 1,
//             prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
//             nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",
//             heigth: 20
//         });
//     }
//     if ($(window).width() > 1200) {
//         $('#secondSlider').slick({
//             slidesToShow: 1,
//             heigth: 100,
//             prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
//             nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",
//             asNavFor: "#mentorSlider",


//         });
//     } else {
//         $('#secondMobileSlider').slick({
//             slidesToShow: 1,
//             prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
//             nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",
//             heigth: 20
//         });
//     }
//     if ($(window).width() > 1200) {
//         $('#mentorSlider').slick({
//             slidesToShow: 1,

//             heigth: 100,
//             asNavFor: "#secondSlider",
//         });
//     } else {
//         $('#mentorMobileSlider').slick({
//             slidesToShow: 1,
//             // prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
//             // nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",
//             asNavFor: "#secondMobileSlider",
//         });
//     }
//     $('#firstEventSlider').slick({
//         slidesToShow: 1,
//         prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
//         nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",
//         heigth: 100
//     });
//     $('#secondEventSlider').slick({
//         slidesToShow: 1,
//         prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
//         nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",
//         heigth: 100
//     });
//     $('#thredEventSlider').slick({
//         slidesToShow: 1,
//         prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
//         nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",
//         heigth: 100
//     });
//     $(window).resize(function() {
//         check('#firstSlider', '#firstMobileSlider')
//         check('#thredSlider', '#thredMobileSlider')

//         if (($(window).width() > 1200)) {
//             if (!$('#mentorSlider').hasClass('slick-initialized')) {
//                 $('mentorSlider').slick({
//                     slidesToShow: 1,
//                     prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
//                     nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",
//                     heigth: 100,
//                     asNavFor: "#secondSlider",
//                 });
//             }

//         } else {
//             if (!$('#mentorMobileSlider').hasClass('slick-initialized')) {
//                 $('#mentorMobileSlider').slick({
//                     slidesToShow: 1,
//                     heigth: 100,
//                     asNavFor: "#secondMobileSlider",
//                 });
//             }

//         }
//         if (($(window).width() > 1200)) {
//             if (!$('#secondSlider').hasClass('slick-initialized')) {
//                 $('#secondSlider').slick({
//                     slidesToShow: 1,
//                     heigth: 100,
//                     asNavFor: "#mentorSlider",
//                 });
//             }

//         } else {
//             if (!$('#secondMobileSlider').hasClass('slick-initialized')) {
//                 $('#secondMobileSlider').slick({
//                     slidesToShow: 1,
//                     heigth: 100,
//                     prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
//                     nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",
//                     asNavFor: "#mentorMobileSlider",
//                 });
//             }

//         }

//         $('.invite-formate-slider').slick({
//             slidesToShow: 1,
//             asNavFor: "#slider",

//             prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
//             nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",

//         });


//         if (($(window).width() > 1200)) {
//             if (!$('#thredSlider').hasClass('slick-initialized')) {
//                 $('#thredSlider').slick({
//                     slidesToShow: 1,
//                     prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
//                     nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",
//                     heigth: 100
//                 });
//             }

//         } else {
//             if (!$('#thredMobileSlider').hasClass('slick-initialized')) {
//                 $('#thredMobileSlider').slick({
//                     slidesToShow: 1,
//                     prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
//                     nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",
//                     heigth: 100
//                 });
//             }

//         }

//     });
// });


// function check(name, nameMob) {
//     if (($(window).width() > 1200)) {
//         if (!$(name).hasClass('slick-initialized')) {
//             $(name).slick({
//                 slidesToShow: 1,
//                 prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
//                 nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",
//                 heigth: 100
//             });
//         }

//     } else {
//         if (!$(nameMob).hasClass('slick-initialized')) {
//             $(nameMob).slick({
//                 slidesToShow: 1,
//                 prevArrow: "<img src='./image/left.svg' class='prev' alt='1'>",
//                 nextArrow: "<img src='./image/right.svg' class='next' alt='2'>",
//                 heigth: 100
//             });
//         }

//     }
// }
// //     // $('header').animate({ opacity: 0 }, 1000);
// //     $('header').animate({ opacity: 1 }, 1000);
// //     setTimeout(function() {
// //         $('.top-bar').animate({ opacity: 1 }, 1000);
// //     }, 1000)
// //     setTimeout(function() {
// //         $('.top-bar .container-fluid').animate({ opacity: 1 }, 1000);
// //     }, 2000)
// //     setTimeout(function() {
// //         $('.header-content__left-part').slideDown();
// //     }, 3000)
// //     setTimeout(function() {
// //             $('.header-content .col-xl-5').slideDown();
// //         }, 3500)
// //         // scrollTracking('#tast');
// //         // scrollTracking('#connect');


// // });
// // let block_show = null;


// // // function scrollTracking2() {
// // //     var wt = $(window).scrollTop();
// // //     var wh = $(window).height();
// // //     var et = $('#connect').offset().top;
// // //     var eh = $('#connect').outerHeight();

// // //     if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
// // //         if (block_show2 == null || block_show2 == false) {
// // //             console.log('Блок active2 в области видимости');
// // //             $('#connect').animate({ opacity: 1, }, 1000);
// // //             $('#connect').css({ "-webkit-transform": "translate(0, 0px)" });
// // //         }
// // //         block_show2 = true;
// // //     }

// // // }

// // $(window).scroll(function() {
// //     scrollTracking('#tast');
// //     scrollTracking('#connect');
// // });

// // function scrollTracking(lk) {
// //     console.log(lk)
// //     let wt = $(window).scrollTop();
// //     let wh = $(window).height();
// //     let et = $(lk).offset().top;
// //     let eh = $(lk).outerHeight();

// //     if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
// //         if (block_show == null || block_show == false) {
// //             console.log('Блок active в области видимости');
// //             $(lk).animate({ opacity: 1, }, 1000);
// //             $(lk).css({ "-webkit-transform": "translate(0, 0px)" });

// //         }
// //         block_show = true;
// //     }

// // }