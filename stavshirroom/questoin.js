alert("🎉 You did it! You found all of Moti's characters and completed the warm-up activity🎉\nNow it's time for the first ridlle🧭 – answer the questions and choose the most correct answer.✨\nCount your correct answers – they’ll lead you to the solution ✅ ");
function number() {
   corrctnumber="13"
   number=document.getElementById("number").value
   if (number==corrctnumber){
    window.alert("Good job! You're one step closer to unlocking the mystery and save the trees.🔍🗝️");
    setTimeout(2000);
    window.location.replace("riddle2.html");
   }
   else{
    window.alert("Wrong number!❌,The door stays locked... for now🚫\nDon't quite!💡 Try again – you’re getting closer!");
  }
}