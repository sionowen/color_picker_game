$(document).on('ready', function() {
  var colorArray = ['red', 'peach', 'pink', 'gold'];


  $('.colorContainer').append('<div class="red box"></div>')
  $('.colorContainer').append('<div class="peach box"></div>')
  $('.colorContainer').append('<div class="pink box"></div>')
  $('.colorContainer').append('<div class="gold box"></div>')



  console.log(randomNumber(0, 3));

  function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
});
