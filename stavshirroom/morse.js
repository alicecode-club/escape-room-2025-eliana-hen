alert("The Guardians of the Forest received the emergency message you sent and they asked for Moti and Noa to go to the magical forest, So it turns out that Moti and Noa mission is to go into the forest 🌲 and understand how this company really works..\n🔍 So your mission:\nis  to help them find a mysterious letter in the forest 📜 and decipher their next message.Time is short, danger is near – and this is your last mission! ⏳");
setTimeout(question,2000);
function question(){
    alert("Hey genius you are very close to solve the room!.Are you awake or just pretending?😜\nIf you're really alert, prove it by answering this question!📢\n👇 Let's see what you've got!👇");
    correct_answer1="noa and moti";
    correct_answer2="Noa and Moti";
    correct_answer3="moti and noa";
    correct_answer4="Moti and Noa";
    var ans1 = prompt("Who are the characters that appear on the screen?");
    if(ans1==correct_answer1||ans1==correct_answer2||ans1==correct_answer3||ans1==correct_answer4){
        alert("You’ve proven you’re alert!🎯\n Now, it’s time to find the hidden letter📜\nLet the search begin!");
    }
    else{
        alert("That wasn't it❌\n📜 The letter is still out there, waiting to be found.\nKeep looking — you’re getting closer");

    }
}
function letter(){
alert("📜 You found the letter! 🎉\nYou're halfway there to save the trees and solve the room 🌳🕵️\nNow, decode it using:\nto find the hidden massege 👀,try looking closely\n📟 and the Morse code\n\nThe truth is there… you just have to highlight it.✨🖱️\nThink fast, act smart! 💡⏳\nWe're counting on you! 🌟💪");
setTimeout(open_popup,2000);
}
//function bubble_noa(speechBubbleId){
   //var bubble = document.getElementById(speech_bubble1);
   //bubble.style.display = "block";
function open_popup(popup_instructions) {
    var popup = document.getElementById("popup_instructions");
    popup.style.display = "block";
}
function checkAnswer(){
    var popup = document.getElementById("popup_instructions");
    popup.style.display = "none";
    correct_word="robots";
    word_input=document.getElementById("word").value;
    if (correct_word==word_input){
        window.alert(" Hi we are stav and shir and we are saying: Wow, this one was not easy… but you did it!🎉✨\nYou solved all the riddels and the escaped room\nThe room is open now hope you enjoy the journey!🎇🗝️");
        setTimeout(transition,2000);
    }else if(word_input=="robot"){
        alert("You're so close!,Just take another look at the translate and the word you wrote.\nMaybe it needs a little adjustment\nTry thinking in multiples instead of one🌟");
        setTimeout(open_popup,2000);

    }else{
        alert("wrong word,try again\nand don’t give up – the answer is hiding somewhere😅");
        setTimeout(open_popup,2000);
    }
     
}
function transition(){
  window.location.replace("closing-room/index.html");
}
//function close_popup(popup_instructions) {
    //var popup = document.getElementById("popup_instructions");
    //popup.style.display = "none";
    //window.location.replace("question.html");


