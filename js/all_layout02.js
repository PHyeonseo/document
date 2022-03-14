$(function() {
////////////////////////////////////////////////

$('.mainSlide').slick({
  arrows:false,
  autoplay:true,
  autoplaySpeed:2000,
  dots:true
});

$('.mainVisual .slideArrow i:first-child').on('click', function(){
  $('.mainSlide').slick('slickPrev')
});
$('.mainVisual .slideArrow i:last-child').on('click', function(){
  $('.mainSlide').slick('slickNext')
});

////////////////////////////////////////////////
})