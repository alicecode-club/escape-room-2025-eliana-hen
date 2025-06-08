function nextPage(){
    window.open("p1-athena.html", "_self");
}
function nextPage2(){
    window.open("p2-hephaestus.html", "_self");
}
function nextPage3(){
    window.open("p3-apollo.html", "_self");
}
function nextPage4(){
    window.open("p4-hades.html", "_self");
}
function nextPage5(){
    let b = document.createElement('div');
    b.style = `
      position:fixed;
      top:0; left:0;
      width:100%; height:100%;
      background:black;
      opacity:0;
      transition:1s;
      z-index:9999;
    `;
    document.body.appendChild(b);
    requestAnimationFrame(b.style.opacity = 1);
    window.open("p5.1-demeter.html", "_self");

}

function nextPage6(){
    window.open("p5.2 - hermes.html", "_self");
}