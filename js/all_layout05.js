$(function() {
//////////////////////////////

// $(this) 나
// $(this).index()번호
  function close() {
    $(this).parent().hide();
    console.log($(this).parent().index());
  }
  $('.popUp button').on('click',close)
  
//////////////////////////////
}) 