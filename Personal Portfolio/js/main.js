/*========================================================================

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Project:        Tweetbirds - HTML5 Personal Portfolio Template
Version:        2.0
Last change:    30/ 12 /2019
Primary use:    Personal Portfolio site. 
Author:         Ingenious_team
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

========================================================================*/
(function ($) {
    "use strict";
    var menuToggler = $('.menu_toggler'),
        offsetMenu = $('.offset_menu'),
        menuQuit = $('.cross');
    menuToggler.on('click', function (e) {
        e.preventDefault();
        offsetMenu.addClass('visible');
    });
    menuQuit.on('click', function () {
        offsetMenu.removeClass('visible');
    });

    $(document).ready(function () {
        // Add scrollspy to <body>
        $('body').scrollspy({
            target: ".nav_area",
            offset: 50
        });
        $("#navbar-example a").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 1000, function () {
                    window.location.hash = hash;
                });
            }
        });

    });

    // ============ Service slick js ===========

    $('.service_slic').slick({

        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        prevArrow: '<i class="fa fa-chevron-left slidprev4"></i>',
        nextArrow: '<i class="fa fa-chevron-right slidNext4"></i>',
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,

                }
    },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
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

    // ============ testimonial slick js =============

    $('.testimonial_slick').slick({
        centerPadding: '0px',
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        prevArrow: '<i class="fas fa-long-arrow-alt-right slidPrev3"></i>',
        nextArrow: '<i class="fas fa-long-arrow-alt-left slidNext3"></i>',
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true

                }
    },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
    }
  ]
    });



    // ================== newsletter =============


    $(window).load(function () {
        setTimeout(function () {
            $('#enquirypopup').modal('show');
        }, 100);
    });
    
    // ============ Preloader ==============
    
    $(window).load(function () {
        $('#page-anim-preloader').fadeOut(3300);
    });


    // ================= bottom to top ===========

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 100) {
            $('#top_to').fadeIn(500);
        } else {
            $('#top_to').fadeOut(300);
        }
    });
    $('#top_to').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1200);
    });

     // ================== Mix js ===================
    var containerEl = document.querySelector('#project_mix');
    var mixer = mixitup(containerEl, {
        selectors: {
            target: '.mix'
        },
        animation: {
            effects: 'fade ',
            duration: 700
        }
    });
    // ================ message js =================

    var pauseBtn = $(".sound_toggle_btn"),
        playing = false;
    pauseBtn.on('click', function () {
        $(this).children('span').toggleClass('fa fa-times fa fa-clone');
    });


})(jQuery);