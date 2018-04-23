---
languages:
- es
- en
---
(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: "{% t 'js.loading-image' %} #%curr%...",
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">{% t "js.loading-image-1" %} #%curr%</a> {% t "js.loading-image-2" %}.'
    }
  });

})(jQuery); // End of use strict

document.addEventListener('DOMContentLoaded', function() {

  new Typed('#typed3-1', {
    strings: ["{% t 'js.masthead-message' %}"],
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 2000,
    smartBackspace: true,
    loop: false,
    onComplete: function () {
      document.querySelectorAll(".typed-cursor")[0].style.display = "none";
      new Typed('#typed3-2', {
        strings: ["{% t 'js.web-design' %}.", "{% t 'js.user-interface' %}.", "{% t 'js.wordpress' %}."],
        typeSpeed: 40,
        backSpeed: 40,
        backDelay: 3000,
        smartBackspace: true,
        loop: true
      });
  }
  });

}); 