$(document).ready(function () {

    var slider1 = $(`.owl-carousel.demo`);
    var slider2 = $(`.owl-carousel.demo1`);

    slider1.on('click', '.owl-next', function () {
        slider2.trigger('next.owl.carousel')
        // console.log("test");
    });

    slider1.on('click', '.owl-prev', function () {
        slider2.trigger('prev.owl.carousel')
    });

    slider2.on('click', '.owl-next', function () {
        slider1.trigger('next.owl.carousel')
    });
    slider2.on('click', '.owl-prev', function () {
        slider1.trigger('prev.owl.carousel')
    });

    slider1.owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 1000,
    });
    slider2.owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 1000,
    });
});