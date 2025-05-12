function Alert(){
    alert("The cinema is locked! You will have to solve the riddle to open it! TO SEE THE RIDDLE SCROLL DOWN")
    var div = document.getElementById("Iconic_Quotes")
    div.removeAttribute("hidden");
}
    var i = 0
function checkAnswer() {
    var i = 0
    var select = document.getElementById("mammamia");
    var answer = select.value;
    var correct = "mamma mia";
    console.log(answer)
    console.log(correct)
    if (answer == correct) {
      i++
  }
    var select = document.getElementById("gilmoregirls");
    var answer = select.value;
    var correct = "gilmore girls";
    if (answer === correct) {
        i++
  }
  var select = document.getElementById("legallyblonde");
    var answer = select.value;
    var correct = "legally blonde";
    if (answer === correct) {
        i++
  }
  var select = document.getElementById("meangirls");
    var answer = select.value;
    var correct = "mean girls";
    if (answer === correct) {
        i++
  }
  var select = document.getElementById("clueless");
    var answer = select.value;
    var correct = "clueless";
    if (answer === correct) {
      i++
  }
  var select = document.getElementById("gossipgirl");
    var answer = select.value;
    var correct = "gossip girl";
    if (answer === correct) {
        i++
  }
  var select = document.getElementById("princessdiaries");
    var answer = select.value;
    var correct = "princess diaries";
    if (answer === correct) {
        i++
  }
  var select = document.getElementById("10thingsihateaboutyou");
    var answer = select.value;
    var correct = "10 things I hate about you";
    if (answer === correct) {
        i++
  }
  if (i===8){
    alert("You got " + i + " answers correct!");
    alert("You Got It All Right! Let's Move On To The Next Riddle!")
    // i need to add here the puzzle!!!!
  }
  else{
    alert("You got " + i + " answers correct!");
    alert("Well, You're Close! Try Again!" )
  }  
}