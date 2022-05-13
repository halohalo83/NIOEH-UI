$(document).ready(function() {
    // Sự kiện click chuyển tab menu
    $('.tab-container:first').show();
    $('.tab-navigation li:first').addClass('active');
    // $('.tab-container.tab-water').show();
    // $('.tab-container:first').hide();

    $('.tab-navigation li').click(function(event) {
        index = $(this).index();
        $('.tab-navigation li').removeClass('active');
        $(this).addClass('active');
        $('.tab-container').hide();
        $('.tab-container').eq(index).show();
    })

    // Sự kiện chuyển tab advantage
    $('.adv-container:first').css('display', 'flex');
    $('.adv-navigation li:first').addClass('active');
    $('.adv-navigation li').click(function(event) {
        index = $(this).index();
        $('.adv-navigation li').removeClass('active');
        $(this).addClass('active');
        $('.adv-container').hide();
        $('.adv-container').eq(index).css('display', 'flex');
    })
    $(".header-slider").slick({
        infinite: true,
        arrows: false,
        dots: false,
        autoplay: true,
        lazyLoad: "ondemand",
    });

    $(".pack-content").slick({
        infinite: true,
        arrows: true,
        prevArrow: '<span class="arrow-prev"></span>',
        nextArrow: '<span class="arrow-next"></span>',
        dots: false,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 1080,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }

        ]
    })
    $(".news-slide").slick({
        infinite: true,
        arrows: false,
        dots: false,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 1080,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }

        ]
    })
})