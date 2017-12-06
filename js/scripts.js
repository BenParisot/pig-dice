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
  if (this.roll1 === 1) {
    this.score1 = 0;
    console.log("you rolled a one, and lose your points this turn.");
  } else {
    this.score1 += this.roll1;
    if ((this.score1 + this.total1) < 100) {
      console.log("Your roll is: " + this.roll1);
      console.log("Your score this round is: " + this.score1);
    } else {
      console.log("Your roll is: " + this.roll1);
      console.log("That mean's you've reached " + (this.total1 + this.score1) + ", and win the game!");
    }
  };
};

playerOne.prototype.Tally = function() {
  if ((this.score1 + this.total1) < 100) {
    this.total1 += this.score1;
    console.log("Your score this round is: " + this.score1 + ", and your total so far is: " + this.total1);
  } else {
    console.log("Your roll is: " + this.roll1);
    console.log("You've reached " + this.total1 + ", and win the game!");
  }
  this.score1 = 0;
};

function playerTwo (roll2, score2, total2) {
  this.roll2 = roll2;
  this.score2 = score2;
  this.total2 = total2;
}







//user interface logic
$(document).ready(function(){
  newPlayerOne = new playerOne();
  newPlayerTwo = new playerTwo();
  $("#roll01").click(function(event){
    event.preventDefault();
    newPlayerOne.Random();

    console.log("okay great");

  });
  $("#hold01").click(function(event){
    event.preventDefault();
    newPlayerOne.Tally();
  });

  // var currentScore = 0;
  // if (roll === 1) {
  //   currentScore = 0;
  // } else {
  //   newScore = new Score(roll);
  // }

});
