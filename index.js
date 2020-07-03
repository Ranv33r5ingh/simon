var col = ["red","blue","green","yellow"];
var ucp = [];
var gp = [];

var started = false;
var level = 0;
$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    newGame();
    started = true;
  }
});
$(".btn").click(function() {
  var ucc = $(this).attr("id");
  ucp.push(ucc);
  playSound(ucc);
  animatePress(ucc);
  checkk(ucp.length - 1);
});

function checkk(currLevel) {
  if (gp[currLevel] === ucp[currLevel]) {
    if (gp.length === ucp.length) {
      setTimeout(function() {
        newGame();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to to Restart.");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
      startOver();
  }
}

function newGame() {
  ucp = [];
  level++;
  $("#level-title").text("Level " + level);
  var rnum = Math.floor(Math.random() * 4);
  var rc = col[rnum];
  gp.push(rc);
  $("#" + rc).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(rc);
}

function playSound(name) {
  var aud = new Audio("sounds/" + name + ".mp3");
  aud.play();
}

function animatePress(cc) {
  $("#" + cc).addClass("pressed");
  setTimeout(function() {
    $("#" + cc).removeClass("pressed")
  }, 100);
}

function startOver() {
  level = 0;
  gp = [];
  started = false;
}
