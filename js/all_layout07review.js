$(function () {
  /////////////////////////////////

  //topBanner : park 2022.03.17

  function topBannerHandle() {
    // $('.topBanner').hide(); //display:none;
    $('.topBanner').slideUp();
  }
  $('.topBanner .container i ').on('click', topBannerHandle)



  // mainVisual : park 2022.03.17 최종수정
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
    autoplaySpeed: 2000
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
    slidesToShow: 5, //슬라이드 보여주는 개수
    centerMode:true
  })
  $('.allProduct i:first-child').on('click', function () {
    $('.aproductSlide').slick('slickPrev');
  })
  $('.allProduct i:last-child').on('click', function () {
    $('.aproductSlide').slick('slickNext');
  })



  // movieBg : park 2022.03.21 최종수정
  $("#bgndVideo").YTPlayer({
    videoURL: 'https://www.youtube.com/watch?v=sTqtrke-eLw',
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



  // customerArea 클래스 추가,삭제: park 2022.03 .21 최종수정
  $('.tabMenu li').on('click', function () {
    var idx = $(this).index();
    $(this).addClass('oo').siblings().removeClass('oo');
    $('.tabContent>div').eq(idx).addClass('oo').siblings().removeClass('oo');
  })



  // footerWrap top, bottom : park 2022.03.22 최종수정
  $('#link').on('change', function () {
    let linkSite = $(this).val();
    if (!linkSite) return;
    window.open(linkSite)
  })

  // 팝업창 닫기
  $('.popup01 button').on('click', function () {
    $(this).parent().hide();
  })
  ///////////////////////////////// sex
})