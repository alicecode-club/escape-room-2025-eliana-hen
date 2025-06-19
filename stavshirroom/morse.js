alert("The forest rangers received the emergency message you sent and they asked for Moti and Noa to the magical forest, So it turns out that Moti and Noa  mission is to go into the forest 🌲 and understand how this company really works..\n🔍 So your mission:\nis  to help them find a mysterious letter in the forest 📜 and decipher their next message.Time is short, danger is near – and this is your last mission! ⏳");
setTimeout(bubble_noa,5000);

function letter(){
alert("📜 You found the letter! 🎉\nYou're halfway there to save the trees and solve the room 🌳🕵️\nNow, decode it using:\n🔡 the word bank\n📟 and the Morse code\n\nThink fast, act smart! 💡⏳\nWe're counting on you! 🌟💪");
setTimeout(open_popup,2000);
}
function bubble_noa(speechBubbleId){
 var bubble = document.getElementById(speechBubbleId);
bubble.style.display = "block";
}
function open_popup(popup_instructions) {
    var popup = document.getElementById("popup_instructions");
    popup.style.display = "block";
}
function close_popup(popup_instructions) {
    var popup = document.getElementById("popup_instructions");
    popup.style.display = "none";
    window.location.replace("question.html");
}
