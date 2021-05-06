$(function(){

    $('.header__inner').slick({
        prevArrow:'<button type="button" class=" slick-btn slick-prev"></button>',
        nextArrow:'<button type="button" class=" slick-btn slick-next"></button>',
        dots: true,
        infinite: false
    });

    let filter = $("[data-filter]");
    filter.on("click", function(event){
        event.preventDefault();

        $("[data-filter]").removeClass("project__menu--active");
        $(this).addClass('project__menu--active');

        let cat = $(this).data('filter');

        if(cat == 'all'){
            $("[data-cat]").removeClass("hide");
        } else{
            $("[data-cat]").each(function(){

                let workCat = $(this).data('cat');
    
                if(workCat != cat) {
                    $(this).addClass('hide');
                }else{
                    $(this).removeClass('hide');
                }
    
            });
        }

    });

    let play_video = $(".video__play");
    play_video.on("click", function(event){

        event.preventDefault();

        $(".video__content").removeClass("hide");

    });

    $('.posts__items-img').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    });

    $('.posts__slider').slick({
        infinite: false
    });

    $('.header__btn-menu').click(function(event){
        $('.header__btn-menu,.menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

});