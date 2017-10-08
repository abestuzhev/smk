$(function(){
    /*переменные*/
    var $linkDoc = $('.manual-sub-list__link');//ссылка на конечный документ
    var $titleSection = $('.manual-sub-list__title');//заголовок раздела

    /*скрыть верхнее пояснение о разделе*/
    $('.manual-info__close').on('click', function(){
        $(this).parents('.manual-info').hide(200);
    });

    /*показ подпунктов*/
    $titleSection.on('click', function(e){
        if($(this).parents('.manual-list__item').children().hasClass('manual-sub-list')){
            $(this).toggleClass('sub-list__open');
            $(this).siblings('.manual-sub-list').toggle(150);
            console.log('условие выполняется');
            e.preventDefault();
        }
    });

    /*hover для нумерации*/
    $titleSection.hover(function(){
        $(this).parent('.manual-list__item').toggleClass('manual-list__hover');
    });
    $linkDoc.hover(function(){
        $(this).parent('.manual-list__item').toggleClass('manual-list__hover');
    });

    /*добавление иконки-стрелочки только элементам, которые имеют подразделы*/
    $('.manual-list__item').has('ol').children('.manual-sub-list__title').addClass("manual-sub-list__title--icon");

});