$(document).ready(function () {


    // Attach fixPoint class for fixing background attachments
    $(window).scroll(function () {
        $('.testimonials, header').each(function () {
            var fromTop = $(this).offset().top;
            if (window.scrollY >= (fromTop)) {
                $(this).addClass('fixPoint');
            } else {
                $(this).removeClass('fixPoint');
            }
        })
    });

    /* For Sticky Navigation */
    var waypoint = new Waypoint({
        element: document.getElementsByClassName('js-section-features'),
        handler: function (direction) {
            if (direction == "down") {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
        },
        offset: '80px'
    })

    /* Scroll on Buttons */
    $('.js-scroll-to-plans').click(function () {
        $('html, body').animate({
            scrollTop: $(".js-section-plans").offset().top
        }, 1000);
    });

   



    /*Smooth Scrolling For Navigation */

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    /* Animation On Scroll */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });

    /* Mobile Navigation */
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200);

        if (icon.hasClass('ion-navicon-round')) {
            icon.removeClass('ion-navicon-round');
            icon.addClass('ion-close-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });

    /* Google Maps */
    var map = new GMaps({
        div: '.map',
        lat: 0.3491826,
        lng: 32.6111855,
    });

    map.addMarker({
        lat: 0.3531804,
        lng: 32.6128433,
        title: 'Ntinda Complex Apartments',
        infoWindow: {
            content: "<p>Our Ntinda Head Quarters</p>"
        }
    });

});