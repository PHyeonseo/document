$(function () {
  /////////////////////////////////

  //topBanner : park 2022.03.17

  function topBannerHandle() {
    // $('.topBanner').hide(); //display:none;
    $('.topBanner').slideUp();
  }
  $('.topBanner .container i ').on('click', topBannerHandle)



  $('.visualSilde').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true, //슬라이드 숫자
    pauseOnHover: false,
    prevArrow: '<div class="msLeft"></div>',
    nextArrow: '<div class="msRight"></div>'
  });


  $('.visualSlide figure').eq(1).addClass('oo');
  $('.visualSilde').on('afterChange', function (e,s,c){
    $('.visualSlide figure').eq(c+1).addClass('oo').siblings().removeClass('oo');
  })

  // eventProduct : park 2022.03.18 최종수정
  $('.eProductSlide').slick({
    arrows:false,
    autoplay: true,
  })

  // allProduct : park 2022.03.18 최종수정
  $('.aproductSlide').slick({
    arrows:false,
    dots: true,
    slidesToShow: 5 //슬라이드 보여주는 개수
  })
  $('.allProduct i:first-child').on('click',function() {
    $('.aproductSlide').slick('slickPrev');
  })
  $('.allProduct i:last-child').on('click',function() {
    $('.aproductSlide').slick('slickNext');
  })


  /////////////////////////////////
})