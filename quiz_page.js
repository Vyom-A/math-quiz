var number1 = localStorage.getItem("Number1")
var number2 = localStorage.getItem("Number2")
var answer = number1 * number2;
console.log("answer");
var user_answer;
var code = " &nbsp; &nbsp;  <button class ='btn btn-primary' onclick = 'setWindow();'>" + " Try again " + "</button>";
var code2 = "<h4>"+ "The correct answer is " + answer + "</h4>"
var timer = "0";
var timerOut = "<h2>The timer is up now you cannot solve the sum</h2>" + "<hr>" + "<button class = 'btn btn-primary' onclick = 'setWindow();'>Back</button>";

function setText() {
document.getElementById("number").innerHTML = number1 + "X" + number2 ;
window.alert ("You have only ten seconds for solving the sums");
timerFunction();
}
 function submit() {
   user_answer = document.getElementById("text_input").value;
   
   if(timer == "0"){
 
   if (user_answer == answer){
    document.getElementById("number").innerHTML = "Your answer is correct!" + code;
   };
   if(user_answer != answer){
    document.getElementById("number").innerHTML = "Your answer is wrong!" + code + code2;
   };

   };

   if (timer == "1"){
    document.getElementById("the_div").innerHTML = timerOut;
   };
 }

 function setWindow() {
    window.location = "index.html";
    localStorage.removeItem("Number1");
    localStorage.removeItem("Number2");
 }

 function timerFunction() {
  setTimeout(function(){
  window.alert("Time up");
  timer = "1";
  },10000);
 }