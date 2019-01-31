let 
  $header = $('.header'),
  $jsAncor = $('.jsAncor'),
  $dot = $('.header-nav--dot');

function _headerMenu () {
  let
    $navItem = $('.header-nav--item').not('.header-logo');

  $navItem.click(function () {
    $navItem.removeClass('header-nav--item__active');
    $(this).addClass('header-nav--item__active');
    let
      $dotPosition = $('.header-nav--item__active')[0].offsetLeft + ($('.header-nav--item__active').width() / 2 + 22);
    $dot.fadeIn().css('transform', 'translateX(' + $dotPosition + 'px)');
  });

  $(window).resize( function () {
    let
      $dotPosition = $('.header-nav--item__active')[0].offsetLeft + ($('.header-nav--item__active').width() / 2 + 22);
    $dot.css('transform', 'translateX(' + $dotPosition + 'px)');
  });
}

function _stickyHeader () {
  _sticky();
  $(window).scroll(function () {
    _sticky();
  });
}

function _sticky () {
  $(window).scrollTop() > $header.height() ? $header.addClass('header__sticky') : $header.removeClass('header__sticky');
}

function _ancors () {
  $jsAncor.click(function () {
    let 
      $href = $(this).attr('href'),
      $target = $($href)[0].offsetTop - 120;
    $("body,html").animate({"scrollTop":$target},500)
  })
}

function _setDot () {
  $(window).scroll(function () {
    let $sections = $('.jsMenuItem');
    $sections.each(function(i,el){
      let top  = $(el).offset().top - 500,
          bottom = top +$(el).height(),
          scroll = $(window).scrollTop(),
          id = $(el).attr('id');
      if( scroll > top && scroll < bottom){
        $('a.header-nav--item__active').removeClass('header-nav--item__active');
        $('a[href="#'+id+'"]').addClass('header-nav--item__active');
        let
          $dotPosition = $('.header-nav--item__active')[0].offsetLeft + ($('.header-nav--item__active').width() / 2 + 22);
        $dot.css('transform', 'translateX(' + $dotPosition + 'px)').show();
      }
    })
    if ($(window).scrollTop() < $('.slider').height()) {
      $dot.css('transform', 'translateX(0)').hide();
    }
  });
}
function _hideDots () {
  $('.header-logo, .footer-logo').click(function () {
    $dot.css('transform', 'translateX(0)').hide();
  })
}


$(document).ready(
  _headerMenu(),
  _stickyHeader(),
  _ancors(),
  _hideDots(),
  _setDot()
);