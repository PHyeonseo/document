$(function () {
  /////////////////////////////////

  //topBanner : park 2022.03.17

  function topBannerHandle() {
    // $('.topBanner').hide(); //display:none;
    $('.topBanner').slideUp();
  }
  $('.topBanner .container i ').on('click', topBannerHandle)



  $('.visualSlide').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true, //슬라이드 숫자
    pauseOnHover: false,
    prevArrow: '<div class="msLeft"></div>',
    nextArrow: '<div class="msRight"></div>'
  });


  $('.visualSlide figure').eq(1).addClass('oo');
  $('.visualSlide').on('afterChange', function (e, s, c) {
    $('.visualSlide figure').eq(c + 1).addClass('oo').siblings().removeClass('oo');
  })

  // eventProduct : park 2022.03.18 최종수정
  $('.eProductSlide').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0.8
  })
  $('.eventProduct i:nth-of-type(1)').on('click', function () {
    $('.eProductSlide').slick('slickPause')
  });
  $('.eventProduct i:nth-of-type(2)').on('click', function () {
    $('.eProductSlide').slick('slickPlay')
  });



  // allProduct : park 2022.03.18 최종수정
  $('.aproductSlide').slick({
    arrows: false,
    dots: true,
    slidesToShow: 5 //슬라이드 보여주는 개수
  })
  $('.allProduct i:first-child').on('click', function () {
    $('.aproductSlide').slick('slickPrev');
  })
  $('.allProduct i:last-child').on('click', function () {
    $('.aproductSlide').slick('slickNext');
  })



  // 동영상넣기 : park 2022.03.21 최종수정

  $("#bgndVideo").YTPlayer({
    videoURL: 'https://www.youtube.com/watch?v=U1z00Oj0jdI',
    containment: '.movieBg',
    autoPlay: true,
    mute: true,
    startAt: 0,
    opacity: 1,
    showControls: false,
    playOnlyIfVisible: true
  });

  $('.movieBg i:first-child').on('click', function () {
    $("#bgndVideo").YTPPause();
  })
  $('.movieBg i:last-child').on('click', function () {
    $("#bgndVideo").YTPPlay();
  })

  // 클래스 추가,삭제: park 2022.03 .21 최종수정

  $('.tabMenu li').on('click', function () {
    var idx = $(this).index();
    $(this).addClass('oo').siblings().removeClass('oo');
    $('.tabContent>div').eq(idx).addClass('oo').siblings().removeClass('oo');
  })


  /////////////////////////////////
})