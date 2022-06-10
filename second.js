// function generate() {
//     var image = document.createElement("img");
//     var div = document.getElementById("result");
//     image.src = "back.jpg";
//     div.appendChild(image);

// }

// function rpsgame(yourChoice) {
//     // console.log(yourChoice)
//     var humanChoice;
//     humanChoice = yourChoice.id;
//     var botChoice = numberToChoice(rpsfunction());
//     // console.log(botChoice);
//     results = decidewinner(humanChoice, botChoice);
//     console.log(results);
//     message = finalMsg(results);
//     console.log(message);

//     rpsfrontend(humanChoice, botChoice, message);
// }
// function rpsfunction() {
//     return Math.floor(Math.random() * 3);

// }
// function numberToChoice(number) {
//     return ["Rock", "Paper", "Scissors"][number];
// }
// function decidewinner(yourChoice, computerChoice) {
//     var database = {
//         "Rock": { "Scissors": 1, "Rock": 0.5, "Paper": 0 },
//         "Paper": { "Scissors": 0, "Paper": 0.5, "Rock": 1 },
//         "Scissors": { "Paper": 1, "Scissors": 0.5, "Rock": 0 }
//     };
//     var yourscore = database[yourChoice][computerChoice];
//     var computerscore = database[computerChoice][yourChoice];

//     return [yourscore, computerscore];

// }
// function finalMsg([yourscore, computerscore]) {
//     if (yourscore === 0) {
//         return { "message": "You Lost!", "color": "red" }
//     }
//     else if (yourscore === 0.5) {
//         return { "message": "It's a tie!", "color": "yellow" }
//     }
//     else {
//         return { "message": "You Won!", "color": "green" }
//     }
// }
// function rpsfrontend(humanImageChoice, botImageChoice, finalMsg) {
//     var imgdatabase = {
//         "Rock": document.getElementById("Rock").src,
//         "Paper": document.getElementById("Paper").src,
//         "Scissors": document.getElementById("Scissors").src
//     };

//     document.getElementById("Rock").remove();
//     document.getElementById("Paper").remove();
//     document.getElementById("Scissors").remove();

//     var humandiv = document.createElement("div");
//     var botdiv = document.createElement("div");
//     var msgdiv = document.createElement("div");

//     humandiv.innerHTML = "<img src='" + imgdatabase[humanImageChoice] + "' style='box-shadow:0px 10px 10px 10px rgba(69, 93, 228, 0.904)'>";
//     botdiv.innerHTML = "<img src='" + imgdatabase[botImageChoice] + "' style='box-shadow:0px 10px 10px 10px rgba(243, 38, 24, 0.904)'>";
//     msgdiv.innerHTML = "<h1 style='color: " + finalMsg['color'] + ";font-style:60px;padding:30px; '>" + finalMsg["message"] + "</h1>";

//     document.getElementById("img_box").appendChild(humandiv);
//     document.getElementById("img_box").appendChild(msgdiv);
//     document.getElementById("img_box").appendChild(botdiv);
// }



//challenge 4////////////////////////////////////////////
///////////////////////////////////////////////////////////


var all_buttons = document.getElementsByTagName('button');
var copy_all_buttons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copy_all_buttons.push(all_buttons[i].classList[1]);
}
function button_color_change(buttonthg) {
    console.log(buttonthg.value);
    
    if (buttonthg.value === "Red") {
        red();
    }
    else if (buttonthg.value === "Green") {
        green();
    }
    else if (buttonthg.value === "Blue") {
        blue();
    }
    else if (buttonthg.value === "Reset") {
        reset();
    }
    else if (buttonthg.value === "Random") {
        random();
    }
}
// function random() {

// }
function red() {
    for (let i = 0; i < all_buttons.length; i++) {

        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add("btn-danger");
    }
}
function green() {
    for (let i = 0; i < all_buttons.length; i++) {

        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add("btn-success");
    }
}
function reset() {
    for (let i = 0; i < all_buttons.length; i++) {

        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copy_all_buttons[i]);
    }
}
function rand(){
    return Math.floor(Math.random()*4);
}
function choices(num){
    return ['btn-primary','btn-warning','btn-success','btn-danger'][num];
}
function random() {
    let randchoice=choices(rand());
    console.log(choices(rand()));
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(randchoice);
    }
}
// function green() {

// }
// function blue() {

// }
