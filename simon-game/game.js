var gamePattern = [];
var userClickedPattern = []

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3")
    audio.play();
}

function nextSequence(){
    var randomNumber= Math.floor(Math.random()*4);
    var buttonColors = ["red","blue","green","yellow"];
    randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor)
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(""+randomChosenColor);
}
console.log(nextSequence())

$('.btn').click(function(){
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor)
    console.log(userClickedPattern)
    playSound(this.id)
})