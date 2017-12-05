//back end logic
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//user interface logic
$(document).ready(function(){
  $("#roll01").click(function(event){
    event.preventDefault();
    console.log("okay great");


    var roll = getRandomIntInclusive(1, 6);
    console.log(roll);

  });
});
