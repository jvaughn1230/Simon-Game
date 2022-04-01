var gamePattern = [];
var buttonColors = ["red", "green", "blue", "yellow"];

function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];
  $(#randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

