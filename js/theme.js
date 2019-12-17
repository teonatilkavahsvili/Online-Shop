// -----------------------------

//   js index
/* =================== */
/*  
    preloader
    wow js active
    datepicker
    datepicker-2
    jQuery MeanMenu
    meanmenu 
    meanmenu-remove-class
    sticky
    sticky-2
    sticky-3
    scroll-up
    counter
    smooth scroll
    countdown
    fancybox
    home2-gallery-isotope
    home3-gallery-isotope
    cart-plus-minus-button 
    price slider
    home1 main slider carousel
    tacher-carousel
    home2 main slider carousel
    h2-testimonial-carousel
    h2-teacher-carousel
    h2-brand-carousel
    education-main-3
    h3-testimonial-carousel
    h3-teacher-carousel
    pt-menu-carousel
    best-sale-gsw-carousel
    Ajax Contact Form

*/
// -----------------------------


(function($) {
    "use strict";

    /*---------------------
    When document is loaded
    --------------------- */
    $(window).on('load', function() {
        handlePreloader();
        datepicker();
        datepicker_2();
        wowHendler();
        CounterUphendle();
        SlideRangehandle();
    });


    /*---------------------
    Preloader
    --------------------- */
    function handlePreloader() {
        if ($('#preloader').length) {
            $('#preloader').fadeOut('slow', function() { $(this).remove(); });
        }
    }


    /*----------------------------
    wow js active
    ------------------------------ */
    function wowHendler() {
        new WOW().init();
    }


    /*---------------------
    datepicker
    --------------------- */
    function datepicker() {
        if ($('#datepicker').length) {
            $('#datepicker').datepicker();
        };
    }


    /*---------------------
    datepicker
    --------------------- */

    function datepicker_2() {
        if ($('#datepicker_2').length) {
            $("#datepicker_2").datepicker();
        };
    }

    /*----------------------------
     jQuery MeanMenu
    ------------------------------ */
    $('nav#dropdown').meanmenu();


    /*-----------------
    meanmenu 
    -----------------*/
    $('nav#mobile_menu_active').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.menu',
    });


    /*------------------------
    meanmenu-remove-class
    ------------------------*/
    $(window).on('resize', function() {
        var wWidth = $(this).width();

        if (wWidth < 991) {
            // removing class
            $('.drop').addClass('m-d-removed');
            $('.m-d-removed').removeClass('drop');

            $('.third').addClass('t-h-m-removed');
            $('.t-h-m-removed').removeClass('third');

            $('.mega-menu').addClass('m-g-removed');
            $('.m-g-removed').removeClass('mega-menu');
        } else {
            // adding class
            $('.m-d-removed').addClass('drop');
            $('.drop').removeClass('m-d-removed');

            $('.third').removeClass('t-h-m-removed');
            $('.t-h-m-removed').addClass('third');

            $('.mega-menu').removeClass('m-g-removed');
            $('.m-g-removed').addClass('mega-menu');
        }
    }).resize();


    /*-----------------
    sticky
    -----------------*/
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 116) {
            $('.header-1').addClass('navbar-fixed-top');
        } else {
            $('.header-1').removeClass('navbar-fixed-top');
        }
    });


    /*-----------------
    sticky-2
    -----------------*/
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 116) {
            $('.header-2-menu-area').addClass('navbar-fixed-top');
        } else {
            $('.header-2-menu-area').removeClass('navbar-fixed-top');
        }
    });


    /*-----------------
    sticky-3
    -----------------*/
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 116) {
            $('.h3-menu').addClass('navbar-fixed-top');
        } else {
            $('.h3-menu').removeClass('navbar-fixed-top');
        }
    });


    /*-----------------
    scroll-up
    -----------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-arrow-up" aria-hidden="true"></i>',
        easingType: 'linear',
        scrollSpeed: 1500,
        animation: 'fade'
    });


    /*------------------------------
         counter
    ------------------------------ */
    function CounterUphendle() {
        $('.counter-up').counterUp();
    };


    /*---------------------
    fancybox
    --------------------- */
    $('[data-fancybox]').fancybox({
        image: {
            protect: true
        }
    });

    /*---------------------
    home2-gallery-isotope
    --------------------- */
    $('.h2-all-gallery-item').imagesLoaded(function() { //image loaded

        // filter items on button click
        $('.wtn-menu').on('click', 'ul li', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
            $('.wtn-menu').find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });

        // masonary activation
        var $grid = $('.h2-all-gallery-item').isotope({
            itemSelector: '.grid',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid'
            }
        })
    });

    /*---------------------
    home3-gallery-isotope
    --------------------- */
    $('.h3-all-gallery-item').imagesLoaded(function() { //image loaded

        // filter items on button click
        $('.wtn-menu').on('click', 'ul li', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
            $('.wtn-menu').find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });

        // masonary activation
        var $grid = $('.h3-all-gallery-item').isotope({
            itemSelector: '.grid',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid'
            }
        })
    });



    /*-----------------------
    cart-plus-minus-button 
    -------------------------*/
    $(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find("input").val(newVal);
    });



    /*-----------------------
    price slider
    -------------------------*/
    function SlideRangehandle() {
        $("#slider-range").slider({
            range: true,
            min: 10,
            max: 900,
            values: [75, 500],
            slide: function(event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));
    };


    /*----------------------------
    home1 main slider carousel
    --------------------------- */
    function education_main() {
        var owl = $(".education-main");
        owl.owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 1,
            smartSpeed: 2000,
            dots: false,
            autoplay: true,
            autoplayTimeout: 4000,
            center: true,
            animateIn: 'fadeInUp',
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 1
                }
            }
        });
    }
    education_main();

    /*----------------------------
    tacher-carousel
    --------------------------- */
    function tacher_carousel() {
        var owl = $(".tacher-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 4,
            smartSpeed: 2000,
            dots: false,
            autoplay: true,
            autoplayTimeout: 4000,
            center: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 3
                },
                991: {
                    items: 4
                }
            }
        });
    }
    tacher_carousel();


    /*----------------------------
    home2 main slider carousel
    --------------------------- */
    function education_main_2() {
        var owl = $(".education-main-2");
        owl.owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 1,
            smartSpeed: 2000,
            dots: false,
            autoplay: true,
            autoplayTimeout: 6000,
            center: true,
            animateIn: 'zoomInDown',
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 1
                }
            }
        });
    }
    education_main_2();


    /*----------------------------
    h2-testimonial-carousel
    --------------------------- */
    function h2_testimonial_carousel() {
        var owl = $(".h2-testimonial-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: false,
            items: 1,
            smartSpeed: 2000,
            dots: true,
            autoplay: true,
            autoplayTimeout: 4000,
            center: true,
            animateIn: 'flipInX',
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 1
                }
            }
        });
    }
    h2_testimonial_carousel();


    /*----------------------------
    h2-teacher-carousel
    --------------------------- */
    function h2_teacher_carousel() {
        var owl = $(".h2-teacher-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 4,
            smartSpeed: 2000,
            dots: false,
            autoplay: true,
            autoplayTimeout: 4000,
            center: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });
    }
    h2_teacher_carousel();


    /*----------------------------
    h2-brand-carousel
    --------------------------- */
    function h2_brand_carousel() {
        var owl = $(".h2-brand-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 6,
            smartSpeed: 2000,
            dots: false,
            autoplay: true,
            autoplayTimeout: 4500,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 3
                },
                760: {
                    items: 5
                }
            }
        });
    }
    h2_brand_carousel();


    /*----------------------------
    education-main-3
    --------------------------- */
    function education_main_3() {
        var owl = $(".education-main-3");
        owl.owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 1,
            smartSpeed: 2000,
            dots: false,
            autoplay: true,
            autoplayTimeout: 4000,
            center: true,
            animateIn: 'flipInX',
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 1
                }
            }
        });
    }
    education_main_3();


    /*----------------------------
    h3-testimonial-carousel
    --------------------------- */
    function h3_testimonial_carousel() {
        var owl = $(".h3-testimonial-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            false: true,
            items: 2,
            smartSpeed: 2000,
            dots: true,
            autoplay: true,
            autoplayTimeout: 4500,
            center: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 1
                },
                992: {
                    items: 2
                }
            }
        });
    }
    h3_testimonial_carousel();


    /*----------------------------
    h3-teacher-carousel
    --------------------------- */
    function h3_teacher_carousel() {
        var owl = $(".h3-teacher-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 4,
            smartSpeed: 2000,
            dots: false,
            autoplay: true,
            autoplayTimeout: 4000,
            center: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                760: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });
    }
    h3_teacher_carousel();


    /*----------------------------
    pt-menu-carousel
    --------------------------- */
    function pt_menu_carousel() {
        var owl = $(".pt-menu-carousel");
        owl.owlCarousel({
            loop: false,
            margin: 20,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 3,
            smartSpeed: 2000,
            dots: false,
            autoplay: false,
            autoplayTimeout: 4000,
            center: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                760: {
                    items: 3
                },
                992: {
                    items: 3
                }
            }
        });
    }
    pt_menu_carousel();


    /*----------------------------
    best-sale-gsw-carousel
    --------------------------- */
    function best_sale_gsw_carousel() {
        var owl = $(".best-sale-gsw-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 1,
            smartSpeed: 2000,
            dots: false,
            autoplay: false,
            autoplayTimeout: 4000,
            center: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        });
    }
    best_sale_gsw_carousel();

    /*---------------------
    // Ajax Contact Form
    --------------------- */

    $('.cf-msg').hide();
    $('form#cf button#submit').on('click', function() {
        var fname = $('#fname').val();
        var subject = $('#subject').val();
        var email = $('#email').val();
        var msg = $('#msg').val();
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!regex.test(email)) {
            alert('Please enter valid email');
            return false;
        }

        fname = $.trim(fname);
        subject = $.trim(subject);
        email = $.trim(email);
        msg = $.trim(msg);

        if (fname != '' && email != '' && msg != '') {
            var values = "fname=" + fname + "&subject=" + subject + "&email=" + email + " &msg=" + msg;
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: values,
                success: function() {
                    $('#fname').val('');
                    $('#subject').val('');
                    $('#email').val('');
                    $('#msg').val('');

                    $('.cf-msg').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
                    setTimeout(function() {
                        $('.cf-msg').fadeOut('slow');
                    }, 4000);
                }
            });
        } else {
            $('.cf-msg').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please fillup the informations correctly.</div>')
        }
        return false;
    });



}(jQuery));