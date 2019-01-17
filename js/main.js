$(document).ready(function() {
    
    
    /*клик по этажу*/
    $(document).on('click', '.stripe-section-floor', function(e){
        e.preventDefault();
        $('.stripe-floor').addClass('is-show');
        scrollTop('.stripe-floor');

        $stripeFloorSlider.slick({
            autoplay: false,
            // autoplaySpeed: 5000,
            // dots: false,
            // arrows: true,
            infinite: false,
            speed: 500,
            // fade: true,
            // cssEase: 'linear',
            prevArrow: $('.floor-nav-up'),
            nextArrow: $('.floor-nav-down')
        });
    });

    $(document).on('click', '.stripe-section-mobile__item', function(e){
        e.preventDefault();
        $('.stripe-floor').addClass('is-show');
        $(this).siblings('').removeClass('active');
        $(this).addClass('active');
    });

    $(document).on('click', '.stripe-popup-close', function(e){
        e.preventDefault();
        $(this).parent().removeClass('is-show');

        $('.stripe-section-mobile__item').removeClass('active');
    });

    $(document).on('click', '.stripe-legend-mobile', function(e){
        e.preventDefault();
        $('.stripe-floor__legends').addClass('is-show');
    });

    $(document).on('click', '.stripe-room', function(e){
        e.preventDefault();
        $('.stripe-apartment').addClass('is-show');
        scrollTop('.stripe');
    });

    var $stripeFloorSlider = $('.stripe-floor-scheme__slider');
    var $status = $('.floor-nav-pos span');

    $stripeFloorSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i);
    });




    function scrollTop (elem){
        // $(elem).scrollTop();
        var top = $(elem).offset().top;
        $('html').animate({scrollTop: top}, 500);
    }

    /*переменная слайдера*/
    var $buildingSlider = $('.building-slider');

    //свернуть/развернуть ход строительства в карточке дома


    /*слайдер в ходе строительства*/
    $buildingSlider.slick({
        autoplay: false,
        // autoplaySpeed: 5000,
        // dots: false,
        // arrows: true,
        infinite: true,
        speed: 500,
        // adaptiveHeight: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
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

    $('.building-card__body').slideUp(300);
    $('.building-card__header').on('click', function(){
        $(this).siblings('.building-card__body').slideToggle(300);
        $(this).toggleClass('active');
    });

    $('.building-card__header').on('click', function(){
        $buildingSlider.slick('refresh');
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
    /*Ваша заявка отправлена*/
    $(".popup-sent_close").click(function(event) {
        event.preventDefault();
        $('.popup-sent').toggleClass('popup-show');
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

    $('.c-tabs').basicTabs();
    $('.c-tabs').basicTabs({
        list_class: "c-tabs_more",
        starting_tab: 2
    });

    $('.phone-mask').mask('+7(000)000-00-00');
    $('.mail-mask').mask('+7(000)000-00-00');

    //кнопка вверх
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cd-top');
    //hide or show the "back to top" link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) {
            $back_to_top.addClass('cd-fade-out');
        }
    });
    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
                scrollTop: 0
            }, scroll_top_duration
        );
    });

  $(window).scroll(function(){
      var bo = $("body").scrollTop();
      // $('#hid').text(bo);
      if ( bo > 20 ) {
        $(".l-header").css({
          "box-shadow": "0 7px 7px rgba(0, 0, 0, 0.08)",
          "position": "fixed"
        });
      } else {
        $(".l-header").css({
          "box-shadow": "none",
          "position": "absolute"
        });
      };
  })


    $('.SlectBox').SumoSelect({
        placeholder: 'This is a placeholder',
        csvDispCount: 3
    });

    $('.testSelAll2').SumoSelect({
        selectAll:true
    });

});

lightGallery(document.getElementById('anchor-tag'));
