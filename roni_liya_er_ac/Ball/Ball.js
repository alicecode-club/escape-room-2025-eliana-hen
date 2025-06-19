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