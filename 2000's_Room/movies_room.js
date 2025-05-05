function Alert(){
    alert("The cinema is locked! You will have to solve the riddle to open it! TO SEE THE RIDDLE SCROLL DOWN")
    var div = document.getElementById("Iconic_Quotes")
    div.removeAttribute("hidden");
}
function checkAnswer() {
    var i = 0
    var select = document.getElementById("mammamia");
    var answer = select.value;
    var correct = "mamma mia";
    if (answer === correct) {
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
    var correct = "princessdiaries";
    if (answer === correct) {
        i++
  }
  var select = document.getElementById("10thingsihateaboutyou");
    var answer = select.value;
    var correct = "10 things i hate about you";
    if (answer === correct) {
        i++
  }
  console.log(i)
  
}

