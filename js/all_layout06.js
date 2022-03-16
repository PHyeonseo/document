$(function() {
  //////////////////////////////
  
  // $(this) 나
  // $(this).index()번호

  function tabHandler() {
    var num = $(this).index();
    $('.tabLink li').removeClass('active');
    $(this).addClass('active');
    $('.tabContent>div').removeClass('active');
    $('.tabContent>div').eq(num).addClass('active');
    // $('.tabContent>div').eq(num).addClass('active').siblings().removeClass('active');
  }

  $('.tabLink li').on('click',tabHandler);

  $('.xi-close').on('click',function() {
    $('.headerWrap').slideToggle(200);
  })
    
  //////////////////////////////
  }) 