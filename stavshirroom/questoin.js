function number() {
  corrctnumber="13"
  
  number=document.getElementById("number").value
  if (number==corrctnumber)
  window.alert("good job");
  else {
    window.alert("number incorrect")
  }
}