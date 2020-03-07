
//defaul value for boxes
let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 0, 0)",
    "rgb(255, 0, 0)",
    "rgb(255, 0, 0)",
    "rgb(255, 0, 0)",
    "rgb(255, 0, 0)",
]
//game status button
let winningMessage = document.getElementById("message");
//reset button
let resetButton =document.getElementById("reset")

let header = document.getElementById("header");
//generates random color
function colorGen(){
    let color =Math.floor(Math.random()*256);
    return color

}//colorGen
 


///randomizes colors
for(let j=0;j<colors.length;j++){
    colors[j]="rgb("+colorGen()+", "+colorGen()+", "+colorGen()+")";
    
}//for

//set the winning color
let goalColor = colors[Math.floor(Math.random()*5)];
console.log(goalColor);

//outputs winning color
let winningOutput = document.getElementById("winner")
winningOutput.textContent = goalColor

///set array of boxes equal to the squares
let boxButtons = document.querySelectorAll(".square");

//Box operations
for(let i =0; i<boxButtons.length;i++){
    //add colours
    boxButtons[i].style.backgroundColor = colors[i];

    //listeners and winners
    boxButtons[i].addEventListener("click",function(){
       if(this.style.backgroundColor === goalColor){
           winningMessage.textContent = 'Winner';
           resetButton.textContent = "Play Again!";
           resetButton.style.color = "#232323"
           header.style.backgroundColor = goalColor;
           winningBoxes();
           
       }//if
       else if(winningMessage.textContent != "Winner"){
           this.style.backgroundColor = "#232323";
           winningMessage.textContent = "Try Again!"
       }//else

    });
}//for


///reset
resetButton.addEventListener("click",function(){
colorGen()
///randomizes colors
for(let j=0;j<colors.length;j++){
    colors[j]="rgb("+colorGen()+", "+colorGen()+", "+colorGen()+")";
    
}//for

//set the winning color
 goalColor = colors[Math.floor(Math.random()*5)];
console.log(goalColor);
for(let i =0; i<boxButtons.length;i++){
    //add colours
    boxButtons[i].style.backgroundColor = colors[i];
}//for
    winningOutput.textContent =goalColor;   
    resetButton.textContent ="Choose a diffrent colour set";
    winningMessage.textContent = "";
    header.style.backgroundColor ="steelblue";

});///resetButton

////changes all colour to winning color if right choose is chosen
function winningBoxes(){
    for(let f=0;f<boxButtons.length;f++){
        boxButtons[f].style.backgroundColor = goalColor;
    }

}//winingBoxes




