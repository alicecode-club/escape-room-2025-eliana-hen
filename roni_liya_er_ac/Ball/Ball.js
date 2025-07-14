function oopen_btn1() {
    document.getElementById('lock-container').style.display = "flex";
    //document.getElementById('btn1').style.display = "none";
}
function close_btn1() {
    document.getElementById('lock-container').style.display = "none";
    //document.getElementById('btn1').style.display = "flex";
}

function checkCode() {
      const input = document.getElementById('codeInput').value;
      if (input === '2589'){ 
        alert('יופי צדקת');
        window.location.href = "..Ball/room.html";
      }
     else {
        alert('אפשר לנסות שוב');
      }
}

var codeTry = null;

  while (codeTry === null || codeTry.trim() === "") {
  codeTry = prompt("מספרים בנשף מקטן לגדול");
  } 


if (codeTry=="2589") {
  alart("נהדר!!!");
  setTimeout(function() {
    window.location.href = "..Ball/room.html";
  }, 700);
}
else {
  alart("נסה\י שוב")
  setTimeout(function() {
    codeTry = prompt("מספרים בנשף מקטן לגדול");  }, 1000);
}

