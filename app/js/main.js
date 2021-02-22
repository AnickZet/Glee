$(function () {

  $(".top-slider__wrapper").slick({
    arrows: false,
    dots: true
  });

  $(".header-icon__link-grid").on("click", function () {
    $(".products-list__cards").toggleClass("products-list__cards--list")
    $(".products__cards").toggleClass("products__cards--list")
    $(".products-card").toggleClass("products-card--list")
    $(".pagination").toggleClass("pagination--list")
    $(this).toggleClass("header-icon__link-grid--active")
  });

  $(window).on("resize", function () {
    if ($(window).width() <=768) {
      $(".products-list__cards").removeClass("products-list__cards--list")
      $(".products__cards").removeClass("products__cards--list")
      $(".products-card").removeClass("products-card--list")
      $(".pagination").removeClass("pagination--list")
    }
  });

  $(".recent__star").rateYo({
    starWidth: "11px",
    spacing: "8px",
    readOnly: true
  });

  $(".products-card__star").rateYo({
    starWidth: "16px",
    spacing: "12px",
    readOnly: true
  });

  $('.price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.price__from').text(data.from);
      $('.price__to').text(data.to);
    },
    onChange: function (data) {
      $('.price__from').text(data.from);
      $('.price__to').text(data.to);
    },
  });

  $(".menu__link-add").on("click", function () {
    $(this).toggleClass("menu__link-add--active")
  });

  $(".burger, .menu a").on("click", function () {
    $(".burger__line").toggleClass("burger__line--active")
    $(".menu").toggleClass("menu--active")
  });

  $(".partner__inner").slick({
    arrows: false,
    dots: false,
    slidesToShow: 5,
    autoplay: true,
    speed: 300,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    }
    ]
  });

  var containerEl1 = document.querySelector('[data-ref="products"]');
  var containerEl2 = document.querySelector('[data-ref="design"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

});