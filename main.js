$(document).on('ready', function() {
  var colorArray = ['red', 'peach', 'pink', 'gold'];


  $('.colorContainer').append('<div class="red box"></div>');
  $('.colorContainer').append('<div class="peach box"></div>');
  $('.colorContainer').append('<div class="pink box"></div>');
  $('.colorContainer').append('<div class="gold box"></div>');


  $('.red').data('red', 0);
  $('.peach').data('peach', 1);
  $('pink').data('pink', 2);
  $('gold').data('gold', 3);
  assignWinner();
  $('.colorContainer').on('click', '.box', function(){
    if($(this).hasClass('correct')){
      alert('You got it Right!!!!!!!!!!!!!!!!!!!!');
      removeWinner();
      assignWinner();
    }else {
      alert('nope');
    }

  })

  function assignWinner(){
    var winningIndex = randomNumber(0, 3);
    $('.' + colorArray[winningIndex]).addClass('correct');
  }
  function removeWinner(){
    $('.correct').removeClass('correct');
  }
  function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
});
