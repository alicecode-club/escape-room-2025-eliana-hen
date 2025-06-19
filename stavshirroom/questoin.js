function number() {
   corrctnumber="13"
   number=document.getElementById("number").value
   if (number==corrctnumber){
    window.alert("good job");
    setTimeout(2000);
    window.location.replace("riddle2.html");
   }
   else{
    window.alert("number incorrect");
  }
}