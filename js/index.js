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
        dots: false,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3
    })
    $(".news-slide").slick({
        infinite: true,
        arrows: false,
        dots: false,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3
    })
})