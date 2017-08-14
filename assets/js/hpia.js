$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items:1,
        margin:10,
        autoHeight:true,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        loop:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }

    });

});