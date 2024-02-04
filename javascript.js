var colors = ["blue", "green", "red", "yellow"];
var sequence = [];
var playerSequence = [];
function playSound(id){
    var audio = new Audio("./sounds/" + id + ".mp3");
    audio.play;
}
function makeSequence(){
    var randomNum = Math.floor(Math.random()*4);
    var randomColor = colors[randomNum];
    sequence.push(randomColor);
    $("#"+randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomColor);
}
$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    playSound(userChosenColor);
    playerSequence.push(userChosenColor);
})
