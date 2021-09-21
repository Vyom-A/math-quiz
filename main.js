var mode ;
var number1 ; 
var number2  ;
var round1;
var round2;

function easy_button_click() {
    document.getElementById("audio2").play();
mode =1;
localStorage.setItem("game_mode",mode);
number1 = Math.random()* 11;
round1 = Math.round(number1);
localStorage.setItem("Number1",round1);
number2 = Math.random()* 11;
round2 = Math.round(number2);
localStorage.setItem("Number2",round2);
window.location ="quiz_page.html";
}

function medium_button_click() {
    document.getElementById("audio2").play();
    mode =2;
    localStorage.setItem("game_mode",mode);
    number1 = Math.random()* 21;
    round1 = Math.round(number1);
    localStorage.setItem("Number1",round1);
    number2 = Math.random()* 21;
    round2 = Math.round(number2);
    localStorage.setItem("Number2",round2);
    window.location ="quiz_page.html";
    }

    function hard_button_click() {
        document.getElementById("audio2").play();
        mode =3;
        localStorage.setItem("game_mode",mode);
        number1 = Math.random()* 31;
        round1 = Math.round(number1);
        localStorage.setItem("Number1",round1);
        number2 = Math.random()* 31;
        round2 = Math.round(number2);
        localStorage.setItem("Number2",round2);
        window.location ="quiz_page.html";
        }  
        
        function extreme_button_click() {
            document.getElementById("audio2").play();
            mode =4;
            localStorage.setItem("game_mode",mode);
            number1 = Math.random()* 41;
            round1 = Math.round(number1);
            localStorage.setItem("Number1",round1);
            number2 = Math.random()* 41;
            round2 = Math.round(number2);
            localStorage.setItem("Number2",round2);
            window.location ="quiz_page.html";
            } 

    function play_music() {
    document.getElementById("audio").play();
    }