window.jQuery(document).ready(function($){

    'use strict';

    // Script for Header Background - Height 100% //
    if ($(document).width() >= 769) {
        $(window).on("resize", function () {
            if ($(window).width() < 769) {
                $('.header-content').height("auto");  // Mobile version size "auto"
            }
            else {
                var height = $(window).height();        //Get the height of the browser window
                $('.header-content').height(height -150);  //Resize the videocontainer div, with a size of 64 - page height.
            }
        }).resize();
    } else {
    }
    // End Script for Header Background - Height 100% //


    // jQuery smooth scrolling //
    $('a[href*="#"]').on('click',function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
    // End jQuery smooth scrolling //

    jQuery(document).ready(function($) {
        // Scroll to top button
        // browser window scroll (in pixels) after which the "back to top" link is shown
        var offset = 300,
            //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
            offset_opacity = 1200,
            //duration of the top scrolling animation (in ms)
            scroll_top_duration = 700,
            //grab the "back to top" link
            $back_to_top = $('.cd-top');

        //hide or show the "back to top" link
        $(window).scroll(function() {
            ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
            if ($(this).scrollTop() > offset_opacity) {
                $back_to_top.addClass('cd-fade-out');
            }
        });

        //smooth scroll to top
        $back_to_top.on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({
                    scrollTop: 0,
                }, scroll_top_duration
            );
        });
        // End Scroll to top

        // Mobile Menu Show Hide Submenu
        $('#header .navbar-default li.subnav ul').after('<div class="nav__expand"><i class="fas fa-chevron-down"></i></div>');
        $("#header .navbar-default li.subnav .nav__expand").on('click',function(){
            $(this).prev("ul").slideToggle("slow");
        });
    });


    // Navigation menu scrollspy to anchor section //
    $('body').scrollspy({
        target: '#navigation .navbar-collapse',
        offset: parseInt($('#navigation').height(), 0)
    });
    // End navigation menu scrollspy to anchor section //


    // sticky-menu on scroll
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $("#header").removeClass("sticky-menu");
        } else {
            $("#header").addClass("sticky-menu");
        }
    });
    // End sticky-menu on scroll


    


    // jQuery tooltips //
    $('.btn-tooltip').tooltip();
    $('.btn-popover').popover();
    // End jQuery tooltips //


    // Team Slider Slick
    $('.carousel-slider.gallery-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        draggable: true,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 3,
                    draggable: true
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 1,
                    draggable: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    draggable: true
                }

            }
        ]
    });
    // End Team Slider Slick


    // Projects Slider Slick
    $('.carousel-slider.projects-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        draggable: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    draggable: true
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                    draggable: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    draggable: true
                }

            }
        ]
    });
    // End Projects Slider Slick

    // Sponsor Slider Slick
    $('.carousel-slider.sponsor-slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        draggable: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                    draggable: true
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 4,
                    draggable: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    draggable: true
                }

            }
        ]
    });
    // End Projects Slider Slick

    // Students Review Slider Slick
    $('.carousel-slider.general-slider').each(function() {
        $(this).slick({
            arrows: true,
            dots: true,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
            margin:0,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            draggable: true,
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    draggable: true
                }
            }]
        });
    });
    // End Students Review Slider Slick


    // Preview images popup gallery with Fancybox //
    $('.fancybox').fancybox({
        loop: false
    });
    // End Preview images popup gallery with Fancybox //



    // Counter animation //
    $('.counter-number > h4').counterUp ({
        delay: 10,
        time: 3000
    });
    // End Counter animation //


    // Navigation Burger animation //
    $('.burger-icon').on('click touchstart', function(e) {
        $(this).toggleClass('change');
        $("#navbarCollapse").slideToggle();
        e.preventDefault();
    });
    // END Navigation Burger animation //


    // Contact form submit process //
    $('#contact-us-form').submit(function() {
        var form = $(this),
            hasError = false;

        form.find('.error-msg, .success-msg').remove();

        form.find('.required-field').each(function() {
            $(this).removeClass('not-valid');
            if($.trim($(this).val()) === '') {
                $(this).addClass('not-valid').parent().append('<div class="error-msg">This is a required field.</div>');
                hasError = true;
            } else if($(this).hasClass('email-field')) {
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if(!emailReg.test($.trim($(this).val()))) {
                    $(this).addClass('not-valid').parent().append('<div class="error-msg">You entered an invalid Email.</div>');
                    hasError = true;
                }
            }
        });
        if(!hasError) {
            var formData = $(this).serialize();
            $.post('contact-process.php', formData, function(data) {
                form.find('.required-field').val('');
                form.append('<div class="success-msg">Thank you! We will contact you shortly.</div>');
            }).fail(function() {
                //form.find('.required-field').val('');
                form.append('<div class="error-msg">Error occurred. Please try again later.</div>');
            });
        }
        return false;
    });
    // End contact form submit process //

    // Slider Home 6 - with arrows Prev Next
    $('.owl-navigation ').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        touchDrag:true,
        mouseDrag:true,
        autoplay:true,
        autoplayTimeout:5000,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            }
        }
    });
    // Slider End

    // Slider Home 2
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        touchDrag:true,
        mouseDrag:true,
        autoplay:true,
        autoplayTimeout:5000,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            }
        }
    });
    // Slider End

    //newsletter mailchimp
    ajaxMailChimpForm($("#subscribe-form"), $("#subscribe-result"));

            // Turn the given MailChimp form into an ajax version of it.
            // If resultElement is given, the subscribe result is set as html to
            // that element.
            function ajaxMailChimpForm($form, $resultElement){

                // Hijack the submission. We'll submit the form manually.
                $form.submit(function(e) {
                    e.preventDefault();

                    if (!isValidEmail($form)) {
                        var error =  "A valid email address must be provided.";
                        $resultElement.html(error);
                        $resultElement.css("color", "red");
                    } else {
                        $resultElement.css("color", "black");
                        $resultElement.html("Subscribing...");
                        submitSubscribeForm($form, $resultElement);
                    }
                });
            }

            // Validate the email address in the form
            function isValidEmail($form) {
                // If email is empty, show error message.
                // contains just one @
                var email = $form.find("input[type='email']").val();
                if (!email || !email.length) {
                    return false;
                } else if (email.indexOf("@") == -1) {
                    return false;
                }

                return true;
            }

            // Submit the form with an ajax/jsonp request.
            // Based on http://stackoverflow.com/a/15120409/215821
            function submitSubscribeForm($form, $resultElement) {
                $.ajax({
                    type: "GET",
                    url: $form.attr("action"),
                    data: $form.serialize(),
                    cache: false,
                    dataType: "jsonp",
                    jsonp: "c", // trigger MailChimp to return a JSONP response
                    contentType: "application/json; charset=utf-8",

                    error: function(error){
                        // According to jquery docs, this is never called for cross-domain JSONP requests
                    },

                    success: function(data){
                        if (data.result != "success") {
                            var message = data.msg || "Sorry. Unable to subscribe. Please try again later.";
                            $resultElement.css("color", "red");

                            if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
                                message = "You're already subscribed. Thank you.";
                                $resultElement.css("color", "black");
                            }

                            $resultElement.html(message);

                        } else {
                            $resultElement.css("color", "black");
                            $resultElement.html("Thank you!<br>You must confirm the subscription in your inbox.");
                        }
                    }
                });
            }

});