//recent_course_slider
var cc = $("#recent_course_slider");
cc.owlCarousel({
  autoplay: true,
  loop: true,
  nav: false,
  dots: false,
  margin: 30,
  animationSpeed: 200,

  //animateOut: 'fadeOut',
  items: 1,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],

  responsive: {
    // breakpoint from 0 up
    0: {
      items: 1,
      nav: false,
    },
    // breakpoint from 480 up
    480: {
      items: 1,
      nav: false,
    },
    // breakpoint from 768 up
    768: {
      items: 2,
      nav: false,
    },

    992: {
      items: 3,
      nav: false,
    },
  },
});
//recent_training_slider
var cc = $("#recent_training_slider");
cc.owlCarousel({
  autoplay: true,
  loop: true,
  nav: false,
  dots: false,
  margin: 30,
  animationSpeed: 200,

  //animateOut: 'fadeOut',
  items: 1,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],

  responsive: {
    // breakpoint from 0 up
    0: {
      items: 1,
      nav: false,
    },
    // breakpoint from 480 up
    480: {
      items: 1,
      nav: false,
    },
    // breakpoint from 768 up
    768: {
      items: 2,
      nav: false,
    },

    992: {
      items: 3,
      nav: false,
    },
  },
});

var cc = $("#testimonal_slider");
cc.owlCarousel({
  autoplay: true,
  loop: true,
  nav: true,
  dots: false,
  margin: 30,
  animationSpeed: 200,

  //animateOut: 'fadeOut',
  items: 1,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],

  responsive: {
    // breakpoint from 0 up
    0: {
      items: 1,
      nav: false,
    },
    // breakpoint from 480 up
    480: {
      items: 1,
      nav: false,
    },
    // breakpoint from 768 up
    768: {
      items: 1,
      nav: false,
    },

    992: {
      items: 1,
      nav: true,
    },
  },
});

var cc = $("#day_select_slider");
cc.owlCarousel({
  autoplay: false,
  loop: true,
  nav: true,
  dots: false,
  margin: 10,
  animationSpeed: 200,

  //animateOut: 'fadeOut',
  items: 1,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],

  responsive: {
    // breakpoint from 0 up
    0: {
      items: 3,
      nav: false,
    },
    // breakpoint from 480 up
    480: {
      items: 3,
      nav: false,
    },
    // breakpoint from 768 up
    768: {
      items: 4,
      nav: false,
    },

    992: {
      items: 4,
      nav: true,
    },
  },
});

jQuery(document).ready(function () {
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 100) {
      jQuery("#scrollup").fadeIn();
    } else {
      jQuery("#scrollup").fadeOut();
    }
  });
  jQuery("#scrollup").click(function () {
    jQuery("html, body").animate({ scrollTop: 0 }, 400);
    return false;
  });
});

//script to create sticky header
jQuery(function () {
  createSticky(jQuery("#sticky-wrap"));
});

function createSticky(sticky) {
  if (typeof sticky != "undefined") {
    var pos = sticky.offset().top,
      win = jQuery(window);

    win.on("scroll", function () {
      if (win.scrollTop() > pos) {
        sticky.addClass("stickyhead");
      } else {
        sticky.removeClass("stickyhead");
      }
    });
  }
}

jQuery(document).ready(function ($) {
  jQuery(".stellarnav").stellarNav({
    theme: "dark",
    breakpoint: 991,
    position: "right",
    //phoneBtn: '18009997788',
    //locationBtn: 'https://www.google.com/maps'
  });
});

$(document).ready(function () {
  $("#reg_lnk_btn").click(function () {
    $("#loginModal").modal("hide");
  });
  $("#for_pass").click(function () {
    $("#loginModal").modal("hide");
  });
});

// $(document).ready(function () {
//   // console.log(JSON.parse(localStorage.getItem("userInfo")) !== null);
//   if (JSON.parse(localStorage.getItem("userInfo")) !== null) {
//     // $("#loginModal").modal("hide");
//     alert("hhhhhhfhhfh");
//   }
// });
