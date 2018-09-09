$(document).ready(function () {
    $('select').selectric();
    $('.card').mouseover(function () {
        $(this).find('.thumbnail').stop().fadeIn()
    });
    $('.card').mouseout(function () {
        $(this).find('.thumbnail').stop().fadeOut()
    });
    var accord = $('.accordion');
    accord.find('.title:not(.active)').siblings('div').slideUp();
    accord.find('.title').on('click', function () {
        $(this).siblings('div').stop().slideToggle(500);
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        }
        else {
            $(this).addClass('active');
        }
    });
    $(".mainSlider").owlCarousel({
        dots: true,
        nav: false,
        items: 1,
        dotsContainer: "#customDots"
    });

    $("#tabs").tabs({
        active: 0
    });
});

