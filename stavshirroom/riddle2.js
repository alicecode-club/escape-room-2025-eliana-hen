var score = 0;
setTimeout(start,2000);
function start(){
    alert("Hi welcome to the next riddle!,here you have to click on the pictures. Use the clues and the picture to choose the correct name of the tree, good luck! 🌳");
    setTimeout(5000);
    alert("Click on the image again after you have chosen the answer.");
}
function image1() {
    alert("Your clues are:🔍\nmy fruit wears a little hat and falls to the ground in autumn and start with the letter a 🍂🔤\n 🚢 long ago,I helped build boats and ships and i am very old\n🛡️⚡️ In ancient myths, i was sacred to Zeus and Thor\n🏅my leaves decorate military ranks and academic honors in several countries");
    var answer1 = document.getElementById("name1").value;//לקיחת תשובה מהמשתמש
    if (answer1.toLowerCase() === "oak tree") {//בדיקת תשובה 1
        score++;
        console.log(score);
    }
}
function image2() {
    alert("your clues are:🔍\nYou won't find me in Israel, I need rain, heat, and humidity all year round 🌦️\nI am the origin of a sweet thing that people of all ages love ☕️\nInside I have purple or brown seeds 🌰");
    var answer2 = document.getElementById("name2").value;//לקיחת תשובה מהמשתמש
    if (answer2.toLowerCase() === "cocoa tree") {//בדיקת תשובה 2
        score++;
        console.log(score);
    }
}
function image3() {
    alert("your clues are:🔍\nMy leaf is on a country’s flag 🍁 that starts with c\nPeople tap my trunk to get something delicious 🥞\nIn fall, my leaves turn red, yellow, and gold\nGuess who I am, and go forth!");
    var answer3 = document.getElementById("name3").value;//לקיחת תשובה מהמשתמש
    if (answer3.toLowerCase() === "maple tree") {//בדיקת תשובה 3{
        score++;
        console.log(score);
    }
}
function image4() {
    alert("your clues  are:🔍\nI carry a brown fruit with water inside\nMy leaves are long, I love the sun🌴☀️\nI live where the sea and land meet🌊🏕️");
    var answer4 = document.getElementById("name4").value;//לקיחת תשובה מהמשתמש
    if (answer4.toLowerCase() === "palm tree") {
        //בדיקת תשובה 4{
        score++;
        console.log(score)
    }
}
function image5() {
    alert("your clues  are:🔍\nI am the first tree to bloom when spring begins and israeli kids sing about me!🌸\nMy fruit is hidden inside a hard green shell🌱\nBees love my pink and white flowers🐝\nI share a name with a nut that people eat and part of my name is also a popular name for girls.");
    var answer5 = document.getElementById("name5").value;//לקיחת תשובה מהמשתמש
    if (answer5.toLowerCase() === "almond tree") {
        //בדיקת תשובה 5{
        score++;
        console.log(score);
    }
}
function image6() {
    alert("your clues are:🔍\nI'm tall, strong, and smell great.I grow in mountains  and i have layers like a green umbrella 🌲\nI appear on the flag of a country close to Israel that starts with L\nI’m a symbol of strength, peace, and eternity. You’ll find me in ancient myths and holy books✨📜");
    var answer6 = document.getElementById("name6").value;
    if (answer6.toLowerCase() === "cedar tree") {
        score++;
        console.log(score);
    }
}

function check_riddle_2() {
    if (score >= 4) {
        alert("you won!🏆,your score:" + score);
        window.location.replace("space.html");
    } 
    else {
        alert("you lose,your score:" + score);
        alert("opps,but you can try again\nTry looking at the clues again.🙃\nReminder: Click on the image after selecting the answer.");
        setTimeout(start,2000);
    }

}





