$(function () {
  $(".top-slider__wrapper").slick({
    arrows: false,
    dots: true
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