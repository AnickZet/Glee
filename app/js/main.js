$(function () {
  $(".top-product__slider").slick({
    arrows: false,
    dots: true
  });

  $(".partner").slick({
    arrows: false,
    dots: false,
    slidesToShow: 5,
    autoplay: true,
    speed: 300,
    slidesToScroll: 1
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