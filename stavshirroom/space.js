
function showbutton() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}
function close_popup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
    setTimeout(question,2000);

}
function question() {
    var ans1 = parseInt(prompt("What was the name of the first animal in space?🐶🚀(Enter the number of the corect answer)\n1.Ernest\n2.Laika\n3.Layla\n4.Balka"));
    if (ans1 === 2) {
        alert("🎉✅True,good job,Put her name in gematria convert her name to Hebrew and you will get part of the code");
    }
    else {
        alert("❌False,the answer was 2 laika,dont worry try the next question,Put her name in gematria convert her name to Hebrew and you will get part of the code");
    }
    var ans2 = parseInt(prompt("How many planets are there in the solar system?🌍🪐🌞(Enter the number of the corect answer)\n1. 9\n2. 5\n3. 8\n4. 3"));
    if (ans2 === 3) {
        alert("🎉✅True,good job,for the code What number is written in the correct answer??🔢");
    }
    else {
        alert("❌False,the answer is 8,for the code What number is written in the correct answer??🔢 ");
    }
    var ans3 = parseInt(prompt("Which country was the first to send a human into space?(Enter the number of the corect answer) 🌍👨‍🚀🚀\n1.United States\n2.China\n3.Germany\n4.Soviet Union "));
    if (ans3 === 4) {
        alert("🎉✅True,good job,for the code try to look for a number in the answer(its an amrican question)🔢");
    }
    else {
        alert("❌False,the answer is 4.Soviet Union it was a hard one,🔢for the code try to look for a number in the answer(its an amrican question)?");
    }
    var ans4 = parseInt(prompt("What was the name of the space shuttle that carried Israeli astronaut Ilan Ramon?🧑‍🚀\n1.Columbia\n2.Atlantis\n3.Discovery\n4.Endeavour"));
    if (ans4 === 1) {
        alert("🎉✅True,good job,for the code try to look for a number in the answer(its an amrican question)");
        setTimeout(check_code,2000);
    }
    else {
        alert("❌False,the answer is 1.Columbia it was a hard one,🔢for the code try to look for a number in the answer(its an amrican question)?");
        setTimeout(check_code,2000);
    }
}
function check_code(){
   alert("After you have answered the questions, it's all about numbers. Assemble the code you received according to the instructions you received and The order of the questions🧠🕵️‍♀️");
   var code=parseInt(prompt("Enter the final code:🔐"));
   if(code === 155841){
    alert("🎉 Great job you solve it!,You called for help, You turned on the transmitter📡,thanks to you the forest rangers received the emergency message🌟🏆");
    setTimeout(rocket,2000);
   }

}
function rocket(){
    var show_rocket = document.getElementById("rocket");
    show_rocket.classList.add("fly");
    window.location.replace("morse.html");

}