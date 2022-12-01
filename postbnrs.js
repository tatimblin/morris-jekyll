function pickbnr(){
  var random = Math.floor(Math.random() * $('.bnr').length);
  $('.bnr').hide().eq(random).show();
}
