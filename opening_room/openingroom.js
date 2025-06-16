
function start(){
    var button_s = document.getElementById("red-button");
         button_s.style.display = "none"; 
    
  }

// function hand(){
//        document.getElementById("hand-container").style.display = "block"; 
//        setTimeout(function() {
//         document.getElementById("hand-container").style.display = "none";
//       }, 6000);
//       warning();
//     }

function warning(){
      alert("WHY WOULD YOU CLICK THIS?!!?!??! ARE YOU CRAZY? ")
      alert("THE TIME MACHINE IS NOW WORKING!!!!!")
      alert("YOU WILL HAVE TO TRAVEL TO 4 DIFFERENT PLACES!!!!!!")
      window.location.href = "../mika_yael/escaperoom.html";
}


function hand() {
  document.getElementById("hand-container").style.display = "block"; 
  setTimeout(function() {
    document.getElementById("hand-container").style.display = "none";
    warning(); // זה קורה אחרי 6 שניות
  }, 5500);
}
