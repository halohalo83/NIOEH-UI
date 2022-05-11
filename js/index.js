$(document).ready(function() {

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