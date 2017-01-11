$(document).ready(function() {

    /*tabs*/
    $(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });

    /*slider*/


    $('.home-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        adaptiveHeight: true,
        cssEase: 'linear'
    });

    $('.objects-slider').slick({
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        adaptiveHeight: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.realty-slider').slick({
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        adaptiveHeight: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.workers-slider').slick({
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        adaptiveHeight: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.stock-slider').slick({
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        adaptiveHeight: true
    });


    $(".header-menu_mobile--menu").click(function(event) {
        event.preventDefault();
        $('.header-menu').toggleClass('is-visible');
    });

    $(".menu_mobile-back").click(function(event) {
        event.preventDefault();
        $('.header-menu').removeClass('is-visible');
        $('.footer-menu').removeClass('is-visible');
    });

    $(".footer-menu_mobile").click(function(event) {
        event.preventDefault();
        $('.footer-menu').toggleClass('is-visible');
    });

    $(".search_btn-filter").click(function(event) {
        event.preventDefault();
        $('.search-object').toggleClass('is-visible');
    });

    $(".search_btn-turn").click(function(event) {
        event.preventDefault();
        $('.search-object').toggleClass('is-visible');
    });

    /*popup заявка*/
    $(".popup_btn-request").click(function(event) {
        event.preventDefault();
        $('.popup_request').toggleClass('popup-show');
        $('.popup_bg').toggleClass('is-visible');
        $('body').toggleClass('body-popup');
    });

    /*popup call*/
    $(".popup_btn-call").click(function(event) {
        event.preventDefault();
        $('.popup_call').toggleClass('popup-show');
        $('.popup_bg').toggleClass('is-visible');
        $('body').toggleClass('body-popup');
    });
     $(".header-menu_mobile--phone").click(function(event) {
        event.preventDefault();
        $('.popup_call').toggleClass('popup-show');
        $('.popup_bg').toggleClass('is-visible');
        $('body').toggleClass('body-popup');
    });
    /*********************************/
    /*popup mail*/
    $(".popup_btn-mail").click(function(event) {
        event.preventDefault();
        $('.popup_mail').toggleClass('popup-show');
        $('.popup_bg').toggleClass('is-visible');
        $('body').toggleClass('body-popup');
    });
    $(".header-menu_mobile--mail").click(function(event) {
        event.preventDefault();
        $('.popup_mail').toggleClass('popup-show');
        $('.popup_bg').toggleClass('is-visible');
        $('body').toggleClass('body-popup');
    });

    $(".popup_bg").click(function(event) {
        event.preventDefault();
        $('.popup').removeClass('popup-show');
        $(this).toggleClass('is-visible');
        $('body').removeClass('body-popup');
    });
    $(".popup_back").click(function(event) {
        event.preventDefault();
        $('.popup').removeClass('popup-show');
        $('.popup_bg').toggleClass('is-visible');
        $('body').removeClass('body-popup');
    });

    // $('#slider').jqSlide({'defaultSlide': 1});

    $('.c-tabs').basicTabs();
    $('.c-tabs').basicTabs({
        list_class: "c-tabs_more",
        starting_tab: 2
    });

    $('.phone-mask').mask('+7(000)000-00-00');
    $('.mail-mask').mask('+7(000)000-00-00');
});

lightGallery(document.getElementById('anchor-tag'));