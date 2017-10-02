$(function(){
    /*скрыть верхнее пояснение о разделе*/
    $('.manual-info__close').on('click', function(){
        $(this).parents('.manual-info').hide(200);
    });

    /*показ подпунктов*/
    $('.manual-sub-list__title').on('click', function(){
        $(this).toggleClass('sub-list__open');
        $(this).siblings('.manual-sub-list').toggle(150);
    });
    $('.manual-sub-list__title').parent('.manual-list__item').has('ol').bind('click',function(){
        $(this).toggleClass('sub-list__open');
        $(this).siblings('.manual-sub-list').toggle(150);
        return false;
    });


    /*hover для нумерации*/
    $('.manual-sub-list__title').hover(function(){
        $(this).parent('.manual-list__item').toggleClass('manual-list__hover');
    });
    $('.manual-sub-list__link').hover(function(){
        $(this).parent('.manual-list__item').toggleClass('manual-list__hover');
    });

    /*добавление иконки-стрелочки только элементам, которые имеют подразделы*/
    $('.manual-list__item').has('ol').children('.manual-sub-list__title').addClass("manual-sub-list__title--icon");


});