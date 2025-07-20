let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#new-btn")

let trueO = true;//playerX,playerO

const  winPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(trueO){
            box.innerHTML = "O";
            trueO=false;
        }
        else{
             box.innerHTML = "X";
            trueO=true;
        }
        box.disabled=true;
        checkWinner(winPatterns);
    })
})
let checkWinner = (winPatterns)=>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos2Val = boxes[pattern[1]].innerHTML;
        let pos3Val = boxes[pattern[2]].innerHTML;
        
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val ){
                showWinner(pos1Val);
            }
        }
    }
}
const showWinner = (winner) =>{
    msg.innerHTML = `congratulations! winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}
const disabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const resetGame = ()=>{
    trueO = true;
    msgContainer.classList.add("hide");
    enabledBoxes();
}
const enabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}
resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);