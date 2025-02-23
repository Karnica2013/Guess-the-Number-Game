let rn =Math.floor(Math.random()*10)
function checkAnswer(){
   let userNumber = document.getElementById("userNumber").value
   if(userNumber>10 || userNumber<0){
    alert("Number out of range!!!")
    return
   }
   if(userNumber==rn){
    document.getElementById("p2").innerHTML="  <p>Congratulations! You've Won!! </p><button onclick='resetGame()'>Play Again</button>"
   }
   else if(userNumber<rn){
     document.getElementById("p2").innerHTML="  <p>Higher! Try Again</p>"
   }
   else{
    document.getElementById("p2").innerHTML="  <p>Lower! Try Again</p>"
   }
   if(!userNumber.value){
    alert(
        "Number cannot be empty!"
    )
    return


   }
   console.log(rn)
}
function resetGame(){
    window.location="index.html"
}
