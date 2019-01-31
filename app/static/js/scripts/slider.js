function _sliderFull () {
  let 
    $sliderFull = $('.slider__full');
  
    $('.slider__full').slick({    
      autoplay: true,
      arrows: false,
      autoplaySpeed: 10000,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      dots:true,
      appendDots: '.slider__full--dots'
    });
}

$(document).ready(
  _sliderFull()
);