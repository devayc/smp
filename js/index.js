$(document).ready(function() {
    // инициализация слайдеров
    if ($(window).width() > 1200) {
        $('#firstSlider').slick({
            slidesToShow: 1,
            prevArrow: `<svg class="prev" width="55" height="55" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="24.5" fill="white" stroke="#E3E3E3"/>
            <path d="M27 19L21 25L27 31" stroke="#333333" stroke-width="2"/>
            </svg>`,
            nextArrow: `<svg class="next" width="55" height="55" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="24.5" transform="matrix(-1 0 0 1 25 25)" fill="white" stroke="#E3E3E3"/>
            <path d="M23 19L29 25L23 31" stroke="#333333" stroke-width="2"/>
            </svg>
            `,
            heigth: 100
        });
    } else {
        $('#firstMobileSlider').slick({
            slidesToShow: 1,
            prevArrow: `<svg class="prev" width="55" height="55" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="24.5" fill="white" stroke="#E3E3E3"/>
            <path d="M27 19L21 25L27 31" stroke="#333333" stroke-width="2"/>
            </svg>`,
            nextArrow: `<svg class="next" width="55" height="55" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="24.5" transform="matrix(-1 0 0 1 25 25)" fill="white" stroke="#E3E3E3"/>
            <path d="M23 19L29 25L23 31" stroke="#333333" stroke-width="2"/>
            </svg>
            `,
            heigth: 20
        });
    }
    if ($(window).width() > 1200) {
        $('#thredSlider').slick({
            slidesToShow: 1,
            prevArrow: `<svg class="prev" width="55" height="55" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="24.5" fill="white" stroke="#E3E3E3"/>
            <path d="M27 19L21 25L27 31" stroke="#333333" stroke-width="2"/>
            </svg>`,
            nextArrow: `<svg class="next" width="55" height="55" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="24.5" transform="matrix(-1 0 0 1 25 25)" fill="white" stroke="#E3E3E3"/>
            <path d="M23 19L29 25L23 31" stroke="#333333" stroke-width="2"/>
            </svg>
            `,
            heigth: 100
        });
    } else {
        $('#thredMobileSlider').slick({
            slidesToShow: 1,
            prevArrow: `<svg class="prev" width="55" height="55" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="24.5" fill="white" stroke="#E3E3E3"/>
            <path d="M27 19L21 25L27 31" stroke="#333333" stroke-width="2"/>
            </svg>`,
            nextArrow: `<svg class="next" width="55" height="55" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="24.5" transform="matrix(-1 0 0 1 25 25)" fill="white" stroke="#E3E3E3"/>
            <path d="M23 19L29 25L23 31" stroke="#333333" stroke-width="2"/>
            </svg>
            `,
            heigth: 20
        });
    }
    if ($(window).width() > 1200) {
        $('#secondSlider').slick({
            slidesToShow: 1,
            heigth: 100,
            prevArrow: `<svg class="prev" width="55" height="55" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="24.5" fill="white" stroke="#E3E3E3"/>
            <path d="M27 19L21 25L27 31" stroke="#333333" stroke-width="2"/>
            </svg>`,
            nextArrow: `<svg class="next" width="55" height="55" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="24.5" transform="matrix(-1 0 0 1 25 25)" fill="white" stroke="#E3E3E3"/>
            <path d="M23 19L29 25L23 31" stroke="#333333" stroke-width="2"/>
            </svg>
            `,
            asNavFor: "#mentorSlider",
        });
    } else {
        $('#secondMobileSlider').slick({
            slidesToShow: 1,
            prevArrow: `<svg class="prev" width="55" height="55" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="24.5" fill="white" stroke="#E3E3E3"/>
            <path d="M27 19L21 25L27 31" stroke="#333333" stroke-width="2"/>
            </svg>`,
            nextArrow: `<svg class="next" width="55" height="55" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="24.5" transform="matrix(-1 0 0 1 25 25)" fill="white" stroke="#E3E3E3"/>
            <path d="M23 19L29 25L23 31" stroke="#333333" stroke-width="2"/>
            </svg>
            `,
            asNavFor: "#mentorMobileSlider",
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
            asNavFor: "#secondMobileSlider",
        });
    }
    $('#firstEventSlider').slick({
        slidesToShow: 1,
        prevArrow: `<svg class="prev" width="55" height="55" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="24.5" fill="white" stroke="#E3E3E3"/>
            <path d="M27 19L21 25L27 31" stroke="#333333" stroke-width="2"/>
            </svg>`,
        nextArrow: `<svg class="next" width="55" height="55" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="24.5" transform="matrix(-1 0 0 1 25 25)" fill="white" stroke="#E3E3E3"/>
            <path d="M23 19L29 25L23 31" stroke="#333333" stroke-width="2"/>
            </svg>
            `,
        heigth: 100
    });
    $('#secondEventSlider').slick({
        slidesToShow: 1,
        prevArrow: `<svg class="prev" width="55" height="55" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="24.5" fill="white" stroke="#E3E3E3"/>
            <path d="M27 19L21 25L27 31" stroke="#333333" stroke-width="2"/>
            </svg>`,
        nextArrow: `<svg class="next" width="55" height="55" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="24.5" transform="matrix(-1 0 0 1 25 25)" fill="white" stroke="#E3E3E3"/>
            <path d="M23 19L29 25L23 31" stroke="#333333" stroke-width="2"/>
            </svg>
            `,
        heigth: 100
    });
    $('#thredEventSlider').slick({
        slidesToShow: 1,
        prevArrow: `<svg class="prev" width="55" height="55" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="24.5" fill="white" stroke="#E3E3E3"/>
            <path d="M27 19L21 25L27 31" stroke="#333333" stroke-width="2"/>
            </svg>`,
        nextArrow: `<svg class="next" width="55" height="55" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="24.5" transform="matrix(-1 0 0 1 25 25)" fill="white" stroke="#E3E3E3"/>
            <path d="M23 19L29 25L23 31" stroke="#333333" stroke-width="2"/>
            </svg>
            `,
        heigth: 100
    });


    $(window).resize(function() {
        check('#firstSlider', '#firstMobileSlider')
        check('#thredSlider', '#thredMobileSlider')
        if (($(window).width() > 1200)) {
            if (!$('#mentorSlider').hasClass('slick-initialized')) {
                $('mentorSlider').slick({
                    slidesToShow: 1,
                    prevArrow: `<svg class="prev" width="55" height="55" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="24.5" fill="white" stroke="#E3E3E3"/>
            <path d="M27 19L21 25L27 31" stroke="#333333" stroke-width="2"/>
            </svg>`,
                    nextArrow: `<svg class="next" width="55" height="55" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="24.5" transform="matrix(-1 0 0 1 25 25)" fill="white" stroke="#E3E3E3"/>
            <path d="M23 19L29 25L23 31" stroke="#333333" stroke-width="2"/>
            </svg>
            `,
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
                    prevArrow: `<svg class="prev" width="55" height="55" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="24.5" fill="white" stroke="#E3E3E3"/>
            <path d="M27 19L21 25L27 31" stroke="#333333" stroke-width="2"/>
            </svg>`,
                    nextArrow: `<svg class="next" width="55" height="55" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="24.5" transform="matrix(-1 0 0 1 25 25)" fill="white" stroke="#E3E3E3"/>
            <path d="M23 19L29 25L23 31" stroke="#333333" stroke-width="2"/>
            </svg>
            `,
                    asNavFor: "#mentorMobileSlider",
                });
            }

        }

    });
    let block_show = null;
    let block_show2 = null;
    let block_show3 = null;
    let block_show4 = null;
    let block_show5 = null;
    let block_show6 = null;
    let block_show7 = null;
    let block_show8 = null;
    let block_show9 = null
    let block_show10 = null
    let block_show12 = null
    let block_show13 = null
    $(window).scroll(function(event) {
        event.preventDefault()
        scrollTracking('#tast');
        scrollTracking2('#connect');
        if ($('#connect').hasClass('done')) {
            scrollTracking3('#format');
        }
        scrollTracking4('.work-line');
        scrollTracking5('.network-con')
        scrollTracking6('#mentor')
        scrollTracking7('#net')
        scrollTracking8('#events')
        scrollTracking9('#anons')
        if ($('#sovet').hasClass('done')) {
            scrollTracking10('#footer')
        }
        scrollTracking12('#partner')
        scrollTracking13('#sovet')
    });
    // анимация главного экрана 
    $('header').animate({ opacity: 1 }, 1000);
    setTimeout(function() {
        $('.top-bar').animate({ opacity: 1 }, 1000);
    }, 1000)
    setTimeout(function() {
        $('.top-bar .container-fluid').animate({ opacity: 1 }, 1000);
    }, 2000)
    setTimeout(function() {
        $('.title').slideDown();
    }, 3000)
    setTimeout(function() {
        $('.header-content__left-part .sub-title').slideDown();
    }, 3500)
    setTimeout(function() {
        $('.header-content .col-xl-5').slideDown();
    }, 3500)
    setTimeout(function() {
        let time = 2000
        $('.header-content__right-part .img-block').each(function(el, i) {
            setTimeout(function() {
                $(i).animate({ opacity: 1 }, 2000);
            }, time)
            time += 500
        });
    }, 1500)

    function check(name, nameMob) { // проверка для слайдеров
        if (($(window).width() > 1200)) {
            if (!$(name).hasClass('slick-initialized')) {
                $(name).slick({
                    slidesToShow: 1,
                    prevArrow: `<svg class="prev" width="55" height="55" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="24.5" fill="white" stroke="#E3E3E3"/>
            <path d="M27 19L21 25L27 31" stroke="#333333" stroke-width="2"/>
            </svg>`,
                    nextArrow: `<svg class="next" width="55" height="55" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="24.5" transform="matrix(-1 0 0 1 25 25)" fill="white" stroke="#E3E3E3"/>
            <path d="M23 19L29 25L23 31" stroke="#333333" stroke-width="2"/>
            </svg>
            `,
                    heigth: 100
                });
            }

        } else {
            if (!$(nameMob).hasClass('slick-initialized')) {
                $(nameMob).slick({
                    slidesToShow: 1,
                    prevArrow: `<svg class="prev" width="55" height="55" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="24.5" fill="white" stroke="#E3E3E3"/>
            <path d="M27 19L21 25L27 31" stroke="#333333" stroke-width="2"/>
            </svg>`,
                    nextArrow: `<svg class="next" width="55" height="55" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="24.5" transform="matrix(-1 0 0 1 25 25)" fill="white" stroke="#E3E3E3"/>
            <path d="M23 19L29 25L23 31" stroke="#333333" stroke-width="2"/>
            </svg>
            `,
                    heigth: 100
                });
            }

        }
    }
    // анимация блоков 
    function scrollTracking() {

        let wt = $(window).scrollTop();
        let wh = $(window).height();
        let et = $('#tast').offset().top;
        let eh = $('#tast').outerHeight();

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            if (block_show == null || block_show == false) {
                console.log('Блок active в области видимости');
                $('#tast').animate({ opacity: 1, }, 1000);
                $('#tast').css({ "-webkit-transform": "translate(0, 0px)" });
                let time = 500
                $('#tast .task-card').each(function(el, i) {
                    setTimeout(function() {
                        $(i).css({ "opacity": "1" });
                    }, time)
                    console.log(i)
                    time += 500

                })
                block_show = true;
            }

        }

    }

    function scrollTracking2(lk) {
        let wt = $(window).scrollTop();
        let wh = $(window).height();
        let et = $(lk).offset().top;
        let eh = $(lk).outerHeight();

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            if (block_show2 == null || block_show2 == false) {
                console.log('Блок active в области видимости');
                $(lk).animate({ opacity: 1, }, 1000);
                $(lk).css({ "-webkit-transform": "translate(0, 0px)" });
                block_show2 = true;
                setTimeout(function() {
                    $('.line-conent').css({ "-webkit-transform": "translate(0px, 0)" });
                }, 500)
                setTimeout(function() {
                    $('.line').css({ "height": "101px" });
                }, 3000)
                setTimeout(function() {
                    $('.connect-card-text').css({ "opacity": "1" });
                }, 3500)
                setTimeout(function() {
                    $('.connect-card img').css({ "-webkit-transform": "translateY(0)" });
                }, 4000)
                setTimeout(function() {
                    $(lk).addClass('done');
                }, 4000)

            }

        }

    }

    function scrollTracking3(lk) {
        let wt = $(window).scrollTop();
        let wh = $(window).height();
        let et = $(lk).offset().top;
        let eh = $(lk).outerHeight();

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            if (block_show3 == null || block_show3 == false) {
                console.log('Блок active в области видимости');
                $(lk).animate({ opacity: 1, }, 1000);
                $(lk).css({ "-webkit-transform": "translate(0, 0px)" });
                block_show3 = true;
                // setTimeout(function() {
                //     $('#format .format-card').css({ "opacity": "1" });
                // }, 500)
            }

        }

    }

    function scrollTracking4(lk) {
        let wt = $(window).scrollTop();
        let wh = $(window).height();
        let et = $(lk).offset().top;
        let eh = $(lk).outerHeight();

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            if (block_show4 == null || block_show4 == false) {
                console.log('Блок active в области видимости');
                setTimeout(function() {
                    $('.invite-container').css({ "opacity": "1" });
                }, 500)
                block_show4 = true;
            }

        }

    }

    function scrollTracking5(lk) {
        let wt = $(window).scrollTop();
        let wh = $(window).height();
        let et = $(lk).offset().top;
        let eh = $(lk).outerHeight();

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            if (block_show5 == null || block_show5 == false) {
                console.log('Блок active в области видимости');
                setTimeout(function() {
                    $('.network-con .format-card').css({ "opacity": "1" });
                }, 1500)
                setTimeout(function() {
                    $('.network-con .col-xl-7').css({ "opacity": "1" });;

                }, 2000)
                block_show5 = true;
            }

        }

    }

    function scrollTracking6(lk) {
        let wt = $(window).scrollTop();
        let wh = $(window).height();
        let et = $(lk).offset().top;
        let eh = $(lk).outerHeight();

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            if (block_show6 == null || block_show6 == false) {
                console.log('Блок active в области видимости');
                $(lk).animate({ opacity: 1, }, 1000);
                $(lk).css({ "-webkit-transform": "translate(0, 0px)" });
                setTimeout(function() {
                    $('#sl').css({ "opacity": "1" });
                }, 1000)
                setTimeout(function() {
                    $('.format-card-ment').css({ "opacity": "1" });;

                }, 1500)
                setTimeout(function() {
                    $('#mentorSlider').css({ "opacity": "1" });;

                }, 2000)
                block_show6 = true;
            }

        }

    }

    function scrollTracking7(lk) {
        let wt = $(window).scrollTop();
        let wh = $(window).height();
        let et = $(lk).offset().top;
        let eh = $(lk).outerHeight();

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            if (block_show7 == null || block_show7 == false) {
                console.log('Блок active в области видимости');
                $(lk).animate({ opacity: 1, }, 1000);
                setTimeout(function() {
                    $('#net').css({ "opacity": "1" });;
                }, 1000)
                setTimeout(function() {
                    $('#net .format-card-event').css({ "opacity": "1" });;
                }, 1500)

                setTimeout(function() {
                    $('#thredSlider').css({ "opacity": "1" });;

                }, 2000)
                block_show7 = true;
            }

        }

    }

    function scrollTracking8(lk) {
        let wt = $(window).scrollTop();
        let wh = $(window).height();
        let et = $(lk).offset().top;
        let eh = $(lk).outerHeight();

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            if (block_show8 == null || block_show8 == false) {
                console.log('Блок active в области видимости');
                $(lk).animate({ opacity: 1, }, 1000);
                $(lk).css({ "-webkit-transform": "translate(0, 0px)" });
                block_show8 = true;
            }

        }

    }

    function scrollTracking9(lk) {
        let wt = $(window).scrollTop();
        let wh = $(window).height();
        let et = $(lk).offset().top;
        let eh = $(lk).outerHeight();

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            if (block_show9 == null || block_show9 == false) {
                console.log('Блок active в области видимости');
                $(lk).animate({ opacity: 1, }, 1000);
                setTimeout(function() {
                    $('#anons .anons-card').slideDown();
                }, 1000)
                block_show9 = true;
            }

        }

    }

    function scrollTracking10(lk) {
        let wt = $(window).scrollTop();
        let wh = $(window).height();
        let et = $(lk).offset().top;
        let eh = $(lk).outerHeight();

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            if (block_show10 == null || block_show10 == false) {
                console.log('Блок active в области видимости');
                $('#footer').animate({ opacity: 1, }, 1000);
                setTimeout(function() {
                    $('#footer .anons-card').slideDown();
                }, 1000)
                block_show10 = true;
            }

        }

    }

    function scrollTracking12(lk) {
        let wt = $(window).scrollTop();
        let wh = $(window).height();
        let et = $(lk).offset().top;
        let eh = $(lk).outerHeight();

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            if (block_show12 == null || block_show12 == false) {
                console.log('Блок active в области видимости');
                $(lk).animate({ opacity: 1, }, 1000);
                $(lk).css({ "-webkit-transform": "translate(0, 0px)" });
                let time = 2000
                $('.our-partners .row .col-xl-4').each(function(el, i) {
                    setTimeout(function() {
                        $(i).css({ "opacity": "1" });
                    }, time)
                    console.log(i)
                    time += 500

                })
                block_show12 = true;
            }

        }


    }

    function scrollTracking13(lk) {
        let wt = $(window).scrollTop();
        let wh = $(window).height();
        let et = $(lk).offset().top;
        let eh = $(lk).outerHeight();

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            if (block_show13 == null || block_show13 == false) {
                console.log('Блок active в области видимости');
                $(lk).animate({ opacity: 1, }, 1000);
                $(lk).css({ "-webkit-transform": "translate(0, 0px)" });
                let time = 2000
                $('#sovet .row .col-xl-4').each(function(el, i) {
                    setTimeout(function() {
                        $(i).css({ "opacity": "1" });
                    }, time)
                    console.log(i)
                    time += 500

                })
                setTimeout(function() {
                    $(lk).addClass('done');
                }, 4000)
                block_show13 = true;
            }

        }


    }
    let x = 0
    $(document).scroll(function() {
        let distance = document.getElementById("slide2").getBoundingClientRect();
        console.log(distance)
        if (distance.top < 0) {
            $('#slide2').addClass('banner-wrapper')
        }
        if (distance.top > 0) {
            $('#slide2').removeClass('banner-wrapper')
        }
    })

    //     if (distance.top <= -1 && x == 0) {
    //         $('body').css({ "overflow": "hidden" });
    //         $('html').css({ "overflow": "hidden" });
    //         let i = 0
    //         document.addEventListener("wheel", function onWheel(e) {
    //             e = e || window.event;

    //             // wheelDelta не даёт возможность узнать количество пикселей
    //             var delta = e.deltaY || e.detail || e.wheelDelta;
    //             console.log(delta)
    //             e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    //             if (delta > 0 && i == 1) {
    //                 i += 1
    //                 console.log('da')
    //                 $("#slideE3").css({ "-webkit-transform": "translate(0, -200%)" }); // поднимаем слайде
    //                 console.log('скролим 3 слайд вверх')
    //             }
    //             if (delta > 0 && i == 0) {
    //                 $("#slideE2").css({ "-webkit-transform": "translate(0, -100%)" }); // поднимаем слайде
    //                 console.log('скролим 2 слайд вверх')
    //                 i += 1
    //             }
    //             if (delta < 0 && i == 2) {
    //                 console.log('da')
    //                 $("#slideE2").css({ "-webkit-transform": "translate(0, 0%)" }); // возвращаем слайд
    //                 console.log('скролим 3 слайд вниз')
    //                 i -= 1
    //             }
    //             if ((delta < 0 && i == 2) || (delta > 0 && i == 0)) {
    //                 console.log('вышли')
    //                 $('body').css({ "overflow": "auto" });
    //                 $('html').css({ "overflow": "auto" });
    //                 x = 1
    //             }

    //         });
    //     }
    // })

    // console.log(distance.bottom)


})


// анимация слайдов карточки 
// let lastScrollTop = 0
// $(document).scroll(function() {
//     let st = $(this).scrollTop();
//     let el = $('#eventCon')[0]
//     let elDistanceToTop = window.pageYOffset + el.getBoundingClientRect().top
//     let wb = window.pageYOffset
//     if (elDistanceToTop - wb == 0) {
//         console.log('ds')
//     }
//     if (st > lastScrollTop) { // если скрол был вниз
//         let s_top = $(document).scrollTop();
//         let yes = $("#slideE1").offset().top;
//         if (s_top > yes) {
//             $("#slideE2").css({ "-webkit-transform": "translate(0, -100%)" }); // поднимаем слайде
//         }
//     } else {
//         let s_top = $(document).scrollTop();
//         let yes = $("#slideE1").offset().top;
//         if (s_top > yes) {
//             $("#slideE2").css({ "-webkit-transform": "translate(0, 0%)" }); // возвращаем слайд
//         }
//     }
//     lastScrollTop = st;

// });
// let lastScrollTop2 = 0
// $(document).scroll(function() {
//     var st = $(this).scrollTop();
//     if (st > lastScrollTop2) { // если скрол был вниз
//         s_top = $(document).scrollTop();
//         yes = $("#slideE2").offset().top;

//         console.log($("#slideE1").offset().top)
//         if (s_top > yes) {
//             $("#slideE3").css({ "-webkit-transform": "translate(0, -200%)" }); // поднимаем слайде
//         }
//     } else {
//         s_top = $(document).scrollTop();
//         yes = $("#slideE1").offset().top;
//         if (s_top > yes) {
//             $("#slideE3").css({ "-webkit-transform": "translate(0, 0%)" }); // возвращаем слайд
//         }
//     }
//     lastScrollTop2 = st;

// });