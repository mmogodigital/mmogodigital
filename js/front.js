/* global $this: true */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "animationsSlider" }] */

$('#main-slider .slider').slick({
    dots: true,
    infinite: true,
    autoplaySpeed: 2000,
    fade: true,
    autoplay: true,
    speed: 500
});

$('#portfolio-slider .slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// Remove mouse wheel scroll on GMaps
$('.map').click(function () {
    $('.map iframe').css("pointer-events", "auto");
});

$( ".map" ).mouseleave(function() {
    $('.map iframe').css("pointer-events", "none");
});

$('#mc-form').ajaxChimp({
        url: 'https://mmogodigital.us15.list-manage.com/subscribe/post?u=5a03d5bc85ba6cf81c6141735&id=33e6da20d2'
});

$( "#za-office" ).click(function(e) {
    e.preventDefault();
    $('#za-map-block').removeClass("hidden");
    $('#map-block').addClass("hidden");
});

$( "#bw-office" ).click(function(e) {
    e.preventDefault();
    $('#map-block').removeClass("hidden");
    $('#za-map-block').addClass("hidden");
});

$( ".contact-form button" ).click(function(e) {
    e.preventDefault();
    var form = $('form.contact-form');

    var data = form.serializeArray();

    $.ajax({
        url: "https://formspree.io/sales@mmogodigital.com",
        method: "POST",
        data: {message: data},
        dataType: "json",
        success: function () {
            $this[0].reset(); // clear form

            $('#contact-message')
                .html('<div class="alert alert-success" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>Thank you for getting in touch. We will get back to you soon!</div>')
                .fadeIn()
        }
    });

});
