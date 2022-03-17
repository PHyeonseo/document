$(function() {
/////////////////////////////////

//topBanner : park 2022.03.17

function topBannerHandle() {
  // $('.topBanner').hide(); //display:none;
  $('.topBanner').slideUp();
}
$('.topBanner .container i ').on('click',topBannerHandle)



$('.visualSilde').slick( {
  arrows:false,
  autoplay:true,
  autoplaySpeed:1000,
  dots:true  //슬라이드 숫자
});










/////////////////////////////////
})