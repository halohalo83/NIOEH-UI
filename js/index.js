$(document).ready(function() {

    $(".header-slider").slick({
        infinite: true,
        arrows: false,
        dots: false,
        autoplay: false,
        lazyLoad: "ondemand",
    });
    $(".pack-content").slick({
        infinite: true,
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3
    })
})