var tries = 0;
function start() {
    alert("  Warm-up activity: Before you begin, our main character in the story is the tree Moti. You will soon understand why. But before that, in order to continue in the room, you will need to find as many hidden pictures as possible on the screen of the tree Moti. Only if you find them all can you continue on your way and receive the rest of the instructions. You have two minutes on the clock. Good luck :)♡");
    setInterval(timer, 120000);
}
function timer() {
    var answer = parseInt(prompt("How many figures of the Moti tree did you find? Please enter the number, not in words. "));//  מספר הודעה קופצת קלט
    if (answer === 5) {
        alert("Well done! Now you can continue solving the riddles.");//הודעת הצלחה
    }
    //להוסיף הודעה מתאימה כשהמשתמש כתב באותיות במקום במספרים
    else {
        alert("You didn't succeed, it's okay. You have 2 more minutes to find all of Moti's pictures and then you can continue solving the riddels.");//הודעה לנסיון שני
        tries += 1;
        setInterval(timer2, 120000);
    }
    function timer2() {
        var answer2 = parseInt(prompt("second try:How many figures of the Moti tree did you find?,Please enter the number,not in words. "));
        if (answer2 === 5) {
            alert("Well done! Now you can continue solving the riddles.");
        }
        else {
            tries += 1
        }
        if (tries == 2) {
            alert("you dont have any tries,bit dont worry read the instructions and keep going,enjoy");
        }
    }
}
