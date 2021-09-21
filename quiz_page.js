var number1 = localStorage.getItem("Number1")
var number2 = localStorage.getItem("Number2")
var answer = number1 * number2;
console.log("answer");
var user_answer;
var code = " &nbsp; &nbsp;  <button class ='btn btn-primary' onclick = 'setWindow();'>" + " Try again " + "</button>";
var code2 = "<h4>"+ "The correct answer is " + answer + "</h4>"

function setText() {

  
      document.getElementById("number").innerHTML = number1 + "X" + number2 ;
      
}
 function submit() {
   user_answer = document.getElementById("text_input").value;
   if (user_answer == answer){
    document.getElementById("number").innerHTML = "Your answer is correct!" + code;
   };
   if(user_answer != answer){
    document.getElementById("number").innerHTML = "Your answer is wrong!" + code + code2;
   };
   
 }

 function setWindow() {
    window.location = "index.html";
    localStorage.removeItem("Number1");
    localStorage.removeItem("Number2");
 }