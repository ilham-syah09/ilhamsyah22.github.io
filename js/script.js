//paralax

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'

    });
    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'

    });
    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 1.1 + '%)'

    });
    $('.jumbotron a').css({
        'transform': 'translate(0px, ' + wScroll / 0.4 + '%)'

    });

    //portfolio
    if (wScroll > $('.portfolio').offset().top - 250) {

        $('.portfolio .thumbnail').each(function (i) {
            setTimeout(function () {
                $('.portfolio .thumbnail').eq(i).addClass('efek');
            }, 300 * (i + 1));
        });
    }
});

//about
$(window).on('load', function () {
    $('.pKiri').addClass('pEfek');
    $('.pKanan').addClass('pEfek');
})

$(document).ready(function () {
    $('.zoom').hover(function () {
        $(this).addClass('transisi');
    }, function () {
        $(this).removeClass('transisi');
    });
});