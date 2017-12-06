//back end logic


function playerOne () {
  this.roll1 = 0;
  this.score1 = 0;
  this.total1 = 0;
}


playerOne.prototype.Random = function() {
  min = 1;
  max = 6;
  this.roll1 = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(newPlayerOne.roll1);
  if (this.roll1 === 1) {
    this.score1 = 0;
    console.log("you rolled a one, and lose your points this turn.");
  } else {
    this.score1 += this.roll1;
    console.log(this.score1);
  };
};

function playerTwo (roll2, score2, total2) {
  this.roll2 = roll2;
  this.score2 = score2;
  this.total2 = total2;
}







//user interface logic
$(document).ready(function(){
  newPlayerOne = new playerOne();
  $("#roll01").click(function(event){
    event.preventDefault();
    newPlayerOne.Random();

    console.log("okay great");

  });
  // var currentScore = 0;
  // if (roll === 1) {
  //   currentScore = 0;
  // } else {
  //   newScore = new Score(roll);
  // }

});
