function nextPage(){
    window.open("p1-athena.html", "_self");
}
function nextPage2(){
    window.open("p2-hephaestus.html", "_self");
}

let score = 0
document.addEventListener("DOMContentLoaded", function () {
    const circles = document.getElementsByClassName("t");

    for (let i = 0; i < circles.length; i++) {
        circles[i].addEventListener("click", function () {
            this.style.display = "none";
            score++;
            console.log(score);
        });
    }
    if (score == 3){
        
    }
});
