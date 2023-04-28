// js code here
$(window).load(function () {
  $("#loading").fadeOut(100);
});
new WOW().init();
// aos
AOS.init({
  duration: 1000,
});
// load more

// jq code here

$(function () {
  // typed js start
  var typed = new Typed("#typed", {
    strings: ["Web Developer", "Web Designer", "Full-Stack Developer"],
    typeSpeed: 60,
    smartBackspace: true,
    loop: true,
  });
  // typed js end

  // count up
  $(".count").counterUp({
    delay: 10,
    time: 1000,
  });
  // pie chart start
  // pie chart
  $(".chart").easyPieChart({
    barColor: "#e2d810 ",
    trackColor: "#322e2f",
    // scaleColor: "#dfe0e0",
    scaleLength: false,
    lineCap: "round",
    lineWidth: 10,
    size: 150,
    // rotate: 180,
    animate: 2000,
  });
  // pie chart end
  // animation
  // mix it up start
  var mixer = mixitup("#fil", {
    animation: {
      duration: 300,
    },
  });
  // mix it up end
  // slick slider start
  $("#s_slider").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  }); // slick slider end
  // swipper start
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: true,
    loop: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
  // swipper end
  // preloader start

  // preloader end
  // back to top start
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll").fadeIn();
    } else {
      $("#scroll").fadeOut();
    }
  });
  $("#scroll").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 300);
    return false;
  });
  // back to top end
  Dots.generate();
});
