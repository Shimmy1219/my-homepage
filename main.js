//スライドショー
$('.my-slider').slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
});
//ナビゲーションバーの固定
$(function() {
  var menu = $('.global-nav'),
  offset = menu.offset();
  $(window).scroll(function () {
    if($(window).scrollTop() > offset.top) {
      menu.addClass('fixed');
    } else {
      menu.removeClass('fixed');
    }
  });
});
//サイト内検索
$(function() {
  var str = 'サイト内検索'
  $('.keyword')
  .addClass('watermark')
  .val(str)
  .focus(function() {
    $(this).removeClass('watermark');
    if ($(this).val() === str) {
      $(this).val('');
    }
  })
  .blur(function() {
    if ($(this).val() ==='' ) {
      $(this).val(str);
      $(this).addClass('watermark');
    }
  });
  $('.form')
  .submit(function() {
    if ($('.keyword').val() === str) {
      $('.keyword').val('');
    }
  });
});
ScrollReveal().reveal('.article-box:nth-of-type(odd)', {
  duration:1600,
  viewFactor:0.2,
  easing: 'ease',
  origin: 'bottom',
  distance: '50px',
  reset:false,
  scale:1,
  opacity:0,
});
ScrollReveal().reveal('.article-box:nth-of-type(even)', {
  duration:1600,
  viewFactor:0.5,
  easing: 'ease',
  origin: 'bottom',
  distance: '50px',
  reset:false,
  scale:1,
  opacity:0,
});
