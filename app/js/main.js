$(function () {
  $(".hero__slider").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(function () {
    $(".menu__btn").on("click", function () {
      $(".menu-list").toggleClass("menu-list--active");
      $("body").toggleClass("overflow--hidden");
    });
    $(".menu-list__link").on("click", function () {
      $(".menu-list").removeClass("menu-list--active");
      $("body").removeClass("overflow--hidden");
    });
    $(".menu-list__dropdown").on("click", function () {
      $(".menu-list").addClass("menu-list--active");
    });
  });

  $(".footer__title-dropdown").on("click", function () {
    $(this).next().slideToggle();
    $(".footer__title-dropdown").toggleClass("footer__title-dropdown--active");
  });

  $(".reviews__slider").slick({
    centerMode: true,
    centerPadding: "500px",
    slidesToShow: 1,
    dots: false,
    infinite: true,
    prevArrow:
      '<button class="reviews__slider-btn reviews__slider-prev" type="button"><svg class="reviews__slider-icon"><use class="reviews__slider-lines" xlink:href="images/icons.svg#reviews-slider-prev-btn"></use></svg></button>',
    nextArrow:
      '<button class="reviews__slider-btn reviews__slider-next" type="button"><svg class="reviews__slider-icon"><use class="reviews__slider-lines" xlink:href="images/icons.svg#reviews-slider-next-btn"></use></svg></button>',
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          centerPadding: "400px",
        },
      },
      {
        breakpoint: 1500,
        settings: {
          centerPadding: "300px",
        },
      },
      {
        breakpoint: 1300,
        settings: {
          centerMode: false,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 375,
        settings: {
          centerMode: false,
          centerPadding: "0",
          arrows: false,
          autoplay: true,
        },
      },
    ],
  });

  $(window).on("load resize", function () {
    var width = $(document).width();
    if (width <= 992) {
      $(".slider").not(".slick-initialized").slick({
        dots: true,
        autoplay: false,
        speed: 300,
        arrows: false,
        infinite: true,
      });
    } else {
      if ($(".slider").hasClass("slick-initialized")) {
        $(".slider").slick("unslick");
      }
    }
  });

  $(".tudor__dining-room-slider").slick({});
  $(".tudor__holl-additional-slider").slick({});
  $(".tudor__master-bedroom-slider").slick({});
  $(".tudor__bathroom-slider").slick({});
  $(".tudor__guest-bedroom-slider").slick({});
  $(".tudor__bathroom-additional-slider").slick({});
  $(".tudor__story-slider").slick({});

  $(".rate-yo").rateYo({
    readOnly: true,
    spacing: "5px",
  });
});
