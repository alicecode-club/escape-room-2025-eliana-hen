
var tries = 0;
function start() {
    alert("🌳Warm-up activity: Before you begin, our main character in the story is the tree Moti. You will soon understand why. But before that \n\nYour mission starts with finding the smiling tree hidden on the screen! 🧐🌟\nHe's not just any tree he is very special – he has big eyes 👀 and a happy face and he also can talk 😊, and he’ll guide you through the journey.\n\nFind ALL the hidden versions of the Tree Moti in under 2 minutes! ⏱️ Only then will you unlock the next clue.\n\nReady? Let’s go");
    setTimeout(timer, 90000);
    alert(" 🌳Warm-up activity: Before you begin, our main character in the story is the tree Moti. You will soon understand why. But before that \n\nYour mission starts with finding the smiling tree hidden on the screen! 🧐🌟\nHe's not just any tree – he has big eyes 👀 and a happy face and he also can talk 😊, and he’ll guide you through the journey.\n\nFind ALL the hidden versions of the Tree Moti in under 2 minutes! ⏱️ Only then will you unlock the next clue.\n\nReady? Let’s go");
    setInterval(timer, 120000);
}
function timer() {
    var answer = parseInt(prompt("How many figures of the Moti tree did you find?🌳 Please enter the number, not in words. "));//  מספר הודעה קופצת קלט
    var userinput=parseInt(answer);//  מספר הודעה קופצת קלט
    if (answer === 5) {
        alert("🎉Well done! Now you can continue solving the riddles.");//הודעת הצלחה
        setTimeout(open_popup,5000);
        bubble.style.display = "none";
    }
    else {
        if(isNaN(answer)){//בדיקה האם נכתב מספר?
            alert("please write only in numbers❗");
            setTimeout(timer,2000);  
        }  
        else {
            alert("❌You didn't succeed, it's okay🙃. You have 2 more minutes to find all of Moti's pictures and then you can continue solving the riddels.");//הודעה לנסיון שני
            tries += 1;
            setTimeout(timer2, 120000);
        }
    }
}
    function timer2() {
        var answer2 = parseInt(prompt("second try🙃:How many figures of the Moti tree did you find?🌳,Please enter the number,not in words. "));
        var userinput2=parseInt(answer2);
        if(isNaN(answer2)){//בדיקה האם נכתב מספר?
            alert("please write only in numbers❗")
            setTimeout(timer2,2000);
        }
        if (answer2 === 5) {
            alert("🎉Well done! Now you can continue solving the riddles.");
            setTimeout(open_popup,5000);
            bubble.style.display = "none";
        }
        else {
            tries += 1
        }
        if (tries == 2) {
            alert("❌you dont have any tries,but don't worry read the instructions and keep going,enjoy");
            setTimeout(open_popup,5000);
            bubble.style.display = "none";
        }
    }
function trees(speechBubbleId){
        var bubble = document.getElementById(speechBubbleId);
        bubble.style.display = "block";

    
}

function open_popup(popup_instructions) {
    var popup = document.getElementById("popup_instructions");
    popup.style.display = "block";
}
function close_popup(popup_instructions) {
    var popup = document.getElementById("popup_instructions");;
    popup.style.display = "none";
    window.location.replace("question.html");
}


