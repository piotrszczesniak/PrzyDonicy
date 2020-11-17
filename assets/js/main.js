function menuWhiteScrolledTop() {
  if (jQuery(window).scrollTop() == 0 && jQuery('nav').hasClass('nav-white')) {
    jQuery(".navbar-toggler").click(function () {
      jQuery('nav').removeClass('nav-white');
    });

  } else {
    jQuery('.navbar-toggler').click(function () {
      jQuery('nav').addClass('nav-white');
    });
  }
}


// Add class to navigation bar on scroll
jQuery(document).ready(function () {
  // scroll effect on navbar
  jQuery(window).on("scroll", function () {
    if (jQuery(window).scrollTop()) {
      jQuery('nav').addClass('nav-white');
    } else {
      jQuery('nav').removeClass('nav-white');
    }
  })


  // Back to top button action on click

  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 50) {
      jQuery('#back-to-top').show();
    } else {
      jQuery('#back-to-top').hide();
    }
  });

  // scroll body to 0px on click
  jQuery('#back-to-top').click(function () {
    jQuery('body,html').animate({
      scrollTop: 0
    }, 400);
    return false;
  });


  // Navigation turns white on hamburger click
  menuWhiteScrolledTop();
})