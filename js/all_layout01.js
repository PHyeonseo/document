$(function() {


  $('.mainSlide').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
    dots:true
  });

  $('.mainVisual .sildeAngle i:first-child').on('click',function() {
    $('.mainSlide').slick('slickPrev')
  });
  $('.mainVisual .sildeAngle i:last-child').on('click',function() {
    $('.mainSlide').slick('slickNext')
  });


})