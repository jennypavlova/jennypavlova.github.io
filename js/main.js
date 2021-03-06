/*
Template Name: Effacy - Creative One Page Template
Author: ThemeBite
Author URI: http://themebite.com/
Version: 1.0
Developed and Designed By: ThemeBite
*/
/*
====================================
[ JS TABLE OF CONTENT ]
------------------------------------
    1.0 - Parallax Effect
    2.0 - PreLoader
    3.0 - Sticky Menu
    4.0 - Text-Rotator
    5.0 - jQuery Smooth Scroll
    6.0 - Responsive Menu
    7.0 - Scroll Spy
    8.0 - Testimonial Carousel
    9.0 - Partners Carousel
    10  - Blog Post Carousel
    11  - Photo Gallery
    12  - jQuery Light Box 
    13  - Counter Section 
    14  - Goolge Map 
-------------------------------------
[ END JS TABLE OF CONTENT ]
=====================================
*/
$(window).load(function() {

    "use strict";

    // Parallax Effect
    (function() {

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        } else {
            $(window).stellar({
                horizontalScrolling: false,
                responsive: true,
            });
        }

    }());


});

$(document).ready(function() {
    // PreLoader
    $("body").queryLoader2({
        // Preloader options
        backgroundColor: "#34495e",
        barHeight: 2,
        minimumTime: 1000,
        fadeOutTime: 2000,
        percentage: true,
    });

    // Sticky Menu
    $(".header-area").sticky({
        topSpacing: 0
    });

    // Text Rotator
    if ($('#js-rotating').length > 0) {
        $("#js-rotating").Morphext({
            // The [in] animation type. Refer to Animate.css for a list of available animations.
            animation: "lightSpeedIn",
            // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
            separator: ",",
            // The delay between the changing of each phrase in milliseconds.
            speed: 6000,
            complete: function() {
                // Called after the entrance animation is executed.
            }
        });
    }

    // jQuery Smooth Scroll
    $('.page-scroll').on('click', function(event) {
        var $anchor = $(this),
            headerH = '55';
        $('html , body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px",
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    });

    // Responsive Menu
    $("ul.nav.navbar-nav li a").click(function() {
        $(".navbar-collapse").removeClass("in");
    });

    // jQuery ScrollSpy
    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 70
    });

    // Testimonial Carousel 
    $("#testimonial-carousel").owlCarousel({
        // Testimonial Carousel Settings
        navigation: true, // Show next and prev buttons
        navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        slideSpeed: 1000,
        paginationSpeed: 1000,
        singleItem: true,
        pagination: false,
        autoPlay: true,
        stopOnHover: true,
    });


    // Technologies Carousel
    $("#technologies-carousel").owlCarousel({
        // Technologies Carousel Settings
        navigation: false,
        pagination: false,
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 5,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        stopOnHover: true,
    });



    // BLog Post Carousel 
    $("#blog-post-carousel").owlCarousel({
        // BLog Post Carousel Settings
        navigation: false,
        slideSpeed: 2000,
        paginationSpeed: 1000,
        singleItem: true,
        pagination: true,
        autoPlay: true,
        stopOnHover: true,
    });

    // Portfolio Gallery

    if ($('#grid').length > 0) {
        // Initialize plugin
        var $grid = $('#grid');
        $(window).load(function() {
            $grid.shuffle({
                itemSelector: '.thumbnails' // The Child Item of the parent #grid
            });
        });

        // Re-Shuffle the gallery
        $('#filter li').on('click', function(e) {
            e.preventDefault();

            // Active class on li
            $('#filter li').removeClass('active');
            $(this).addClass('active');

            // Filter item
            var groupName = $(this).attr('data-group');

            // Reshuffle item
            $grid.shuffle('shuffle', groupName);
        });
    }

    // Simple Light Box
    $('.showImagesProjectViktorpo').on('click', function() {
        $.SimpleLightbox.open({
            items: ['./img/projects/vp_home.png', './img/projects/vp_mobile.png', './img/projects/vp_gallery.png' ]
        });
    });
    $('.showImagesProjectIGEM').on('click', function() {
        $.SimpleLightbox.open({
            items: ['./img/projects/igem-site-home.png', './img/projects/igem-site.png', './img/projects/igem-mobile.png']
        });
    });
    $('.showImagesProjectTelehealth').on('click', function() {
        $.SimpleLightbox.open({
            items: ['./img/projects/telehealth1.jpg', './img/projects/telehealth2.png']
        });
    });
    $('.showImagesProjectYcharge').on('click', function() {
        $.SimpleLightbox.open({
            items: ['./img/projects/ycharge.png', './img/projects/ycharge_logo.png']
        });
    });


    // Counter JS
    $('.our-awards-section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function() {
                var $this = $(this);
                $({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });

});