// function alert - telling the user the theater is locked and that they need to solve riddles
function Alert(){
    alert("The cinema is locked! You will have to solve the riddle to open it! TO SEE THE RIDDLE SCROLL DOWN");
    document.getElementById("Iconic_Quotes").style.display = "block";
}


// checking answers functions
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
    var correct = "10 Things I Hate About You";
    console.log(answer)
    if (answer === correct) {
        i++
  }
//   in case of a win - showing the puzzle and displaying everything else
  if (i===8){
    alert("You got " + i + " answers correct!");
    alert("You Got It All Right! Let's Move On To The Next Riddle!");
    document.getElementById("pazzle").style.display = "block";
    document.getElementById("Iconic_Quotes").style.display = "none";
    document.getElementById("lock").style.display = "none";
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "lightblue";
}
  else{
    alert("You got " + i + " answers correct!");
    alert("Well, You're Close! Try Again!" )
  }  
}

const rows = 5;
const columns = 5;
let currTile;
let otherTile;
let turns = 0;

window.onload = () => {
    setupBoard();
    setupPieces();
};

function setupBoard() {
    const board = document.getElementById("board");
    for (let i = 0; i < rows * columns; i++) {
        const tile = document.createElement("img");
        addDragEvents(tile);
        board.append(tile);
    }
}

function setupPieces() {
    const pieces = [];
    for (let i = 1; i <= rows * columns; i++) {
        pieces.push(i.toString());
    }

    shuffleArray(pieces);

    const piecesContainer = document.getElementById("pieces");
    pieces.forEach(piece => {
        const tile = document.createElement("img");
        tile.src = `./images/${piece}.jpg`;
        addDragEvents(tile);
        piecesContainer.append(tile);
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function addDragEvents(tile) {
    tile.addEventListener("dragstart", dragStart);
    tile.addEventListener("dragover", dragOver);
    tile.addEventListener("dragenter", dragEnter);
    tile.addEventListener("dragleave", dragLeave);
    tile.addEventListener("drop", dragDrop);
    tile.addEventListener("dragend", dragEnd);
}

function dragStart() {
    currTile = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {}

function dragDrop() {
    otherTile = this;
}

function dragEnd() {
    if (!otherTile || currTile === otherTile || currTile.src.includes("blank")) {
        return;
    }

    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

    turns++;
    document.getElementById("turns").innerText = turns;

}



function checkWin() {
    const boardTiles = document.querySelectorAll("#board img");
    let correct = true;

    boardTiles.forEach((tile, index) => {
        const expected = `${index + 1}.jpg`;
        if (!tile.src.includes(expected)) {
            correct = false;
        }
    });

    if (correct) {
        if (correct) {
            setTimeout(() => {
                let answer = prompt("What Is The Name Of The Of The Movie In The Picture?");
                if (answer && answer.toLowerCase() === "harry potter") {
                    alert("WOW! You solved the puzzle!");
                    showItems()
                } 
                else{
                    alert("Incorrect! Try Again");
                    alert("Good Job! Now scroll down and continue to the next riddle!");
                } 
            }, 100);
        }
        
    } else {
        alert("The Puzzle Isn't Solved Yet!");
    }
}


 function moveRandom() {
    const container = document.getElementById("imagesriddle");
    const items = document.querySelectorAll('.items');
    const minX = 0;
    const maxX = 1200;
    const minY = 1100;
    const maxY = 1300;

    items.forEach(item => {
        const randomX = Math.floor(Math.random() * (maxX - minX)) + minX;
        const randomY = Math.floor(Math.random() * (maxY - minY)) + minY;

        item.style.left = `${randomX}px`;
    item.style.top = `${randomY}px`;
    });
  }


function showItems() {
  document.getElementById("imagesriddle").style.display = "block";
  moveRandom(); 
  setInterval(moveRandom, 1000);                   // start moving once visible
}


function puzzlepage(){
    document.getElementById("pazzle").style.display = "block";
    document.getElementById("Iconic_Quotes").style.display = "none";
    document.getElementById("lock").style.display = "none";
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "lightblue";
    showItems()

}



let correct = [
  "glima.png",
  "snich.png",
  "Scarf-Hogwarts-HarryPotter-Product_1-4895205601277-removebg-preview.png",
  "sharvit.png",
  "Harry-Potter-Glasses-Flat-990x990.png",
  "03487-removebg-preview.png",
  "eb0fbfc1b0e4af0e249ec909f93e5893-removebg-preview.png"
  
];


  let clicked = [];

  let images = document.querySelectorAll(".items");

  for (let i = 0; i < images.length; i++) {
    images[i].onclick = function () {
      let src = images[i].src;
      let filename = src.substring(src.lastIndexOf("/") + 1); // לוקח רק את שם הקובץ

      if (correct.includes(filename) && !clicked.includes(filename)) {
        clicked.push(filename);
        images[i].style.border = "3px solid green";
        alert("Correct!");
      } else if (!correct.includes(filename)) {
        images[i].style.border = "3px solid red";
        alert("Wrong item, try again!");
      }

      if (clicked.length === correct.length) {
        alert("Well done, you did it!");
        alert("To The Next Room!");

      }
    };
  }

  