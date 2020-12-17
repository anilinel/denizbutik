//owl sliders

$(document).ready(function() {
    $('#owl-story').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    responsive: {
        0: {
        items: 4,
        nav: false,
        loop: false,
        margin: 6
        },
        600: {
        items: 3,
        nav: false
        },
        1000: {
        items: 9,
        nav: false,
        loop: false,
        margin: 30
        }
    }
    })
    
    $('#owl-basic').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        smartSpeed:1000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                loop:false
            }
        }
    })

    $('#owl-mobile').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        smartSpeed:1000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                loop:false
            }
        }
    })

    $('#owl-category').owlCarousel({
        loop:true,
        nav:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        smartSpeed:1000,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    })
    
    $('#owl-editorial').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                loop:false,
                margin: 16
            },
            600:{
                items:3,
                nav:true
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
    })

    $('#owl-weekly').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:true,
                loop:false,
                margin: 10
            },
            600:{
                items:3,
                nav:true
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
    })
});

//back to top

    var mybutton = document.getElementById("backtotop");

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }

    function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }

