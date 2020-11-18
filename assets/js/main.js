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

// Scroll to top
function backToTop() {
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
}

// Turn navbar white on scroll down
function NavTurnWhite() {
  jQuery(window).on("scroll", function () {
    if (jQuery(window).scrollTop()) {
      jQuery('#navigation').addClass('nav-white');
    } else {
      jQuery('#navigation').removeClass('nav-white');
    }
  })
}

//*****************************//
jQuery(document).ready(function () {
  // ALL FUNCTIONS GO HERE
  backToTop()
  NavTurnWhite()
})