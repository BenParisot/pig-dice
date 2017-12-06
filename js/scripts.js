//back end logic

function playerOne () {
  this.roll1 = 1;
  this.score1 = 0;
  this.total1 = 0;
  this.turn = "yes";
}

playerOne.prototype.Random = function() {
  if (this.turn === "no"){
    console.log("It's not your turn!");
  } else {
    min = 1;
    max = 6;
    this.roll1 = Math.floor(Math.random() * (max - min + 1)) + min;
    if (this.roll1 === 1) {
      this.score1 = 0;
      newPlayerTwo.turn = "yes";
      this.turn = "no";
      $("#current-roll01").text(this.roll1);
      $("#current-score01").text(this.score1)
    } else {
      $("#current-roll01").text(this.roll1);
      this.score1 += this.roll1;
      if ((this.score1 + this.total1) < 100) {
        $("#current-roll01").text(this.roll1);
        $("#current-score01").text(this.score1)
      } else {
        $("#current-roll01").text(this.roll1);
        $("#total-score01").text(this.total1 + this.score1 + " You Win!");
      };
    };
  };
};

playerOne.prototype.Tally = function() {
  if ((this.score1 + this.total1) < 100) {
    this.total1 += this.score1;
    $("#current-score01").text(this.score1);
    $("#total-score01").text(this.total1)
  } else {
    $("#current-roll01").text(this.roll1);
    $("#total-score01").text((this.total1 + this.roll) + " You Win!")
  }
  this.score1 = 0;
  this.roll1 = 0;
  newPlayerTwo.turn = "yes";
  this.turn = "no";
};

playerOne.prototype.Playability = function() {
  if (this.roll1 === 0){
    console.log("It's not your turn!");
  };
};

function playerTwo () {
  this.roll2 = 1;
  this.score2 = 0;
  this.total2 = 0;
  this.turn = "no";
}

//user interface logic
$(document).ready(function(){
  newPlayerOne = new playerOne();
  newPlayerTwo = new playerTwo();
  $("#roll01").click(function(event){
    event.preventDefault();
    // newPlayerOne.Playability();
    newPlayerOne.Random();
    console.log("okay great");
  });
  $("#hold01").click(function(event){
    event.preventDefault();
    newPlayerOne.Tally();
  });
});
