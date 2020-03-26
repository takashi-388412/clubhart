// Top img-slider (swiper.js)
$(function () {
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true, // ループの指定
    effect: "fade", //フェードの指定
    autoplay: {
    delay: 4000, //４秒後に次のスライドへ
    disableOnInteraction: false //ユーザー側で操作してもスライドを止めない
    },
    speed: 2000, //２秒かけてフェードで切り替わる
  });
});
// sticky header
$(function () {
  jQuery(window).on('scroll', function ($) {
    if (550 < jQuery(this).scrollTop()) {
      jQuery('#header').addClass('m_scroll');
    } else {
      jQuery('#header').removeClass('m_scroll');
    }
  });
});
//hamberger-menu click(open close)
$(function () {
  var sp_menu = $('.hamberger-menu');
  var sp_menu_target = $('.nav');

  //hamberger-menu click動作
  sp_menu.on('click', function () {
    $(this).toggleClass('active');
    sp_menu_target.toggleClass('active');
  });
  // 【sp】リンク内クリック時の動作
  $('.nav-item a').on('click', function () {
    sp_menu.removeClass('active');
    sp_menu_target.removeClass('active');
  });
});
//scroll-top
$(function () {
  var Backtotop = $('.scroll-top');
  //スルスルっとスクロールでトップへもどる
  Backtotop.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 2500);
    return false;
  });
});
//scroll-down
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
//fade-in
$(function() {
　$(window).scroll(function (){
    $('.fade-up').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + windowHeight/2){
          $(this).addClass('effect-scroll');
      } else {
        $(this).removeClass('effect-scroll');
      }
    });
  });
});