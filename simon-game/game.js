var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = []
var isKeyPressed = false;


function nextSequence(){
    var randomNumber= Math.floor(Math.random()*4);
    
    randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor)
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}
console.log(nextSequence())

$('.btn').click(function(){
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor)
    console.log(userClickedPattern);
    animatePress(this);
    playSound(this.id);
})








//indirect functions
function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3")
    audio.play();
}
function animatePress(currentColor){
    $(currentColor).addClass("pressed");
    var timeout =setTimeout(function(){
        $(currentColor).removeClass("pressed")
    }, 100);
}