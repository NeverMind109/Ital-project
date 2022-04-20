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
});
