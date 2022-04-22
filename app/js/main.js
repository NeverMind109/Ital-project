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
  $(".rate-yo").rateYo({
    readOnly: true,
    spacing: "5px",
  });
});
