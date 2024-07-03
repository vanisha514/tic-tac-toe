let blocks = document.querySelectorAll(".block");
let Btn = document.querySelector("#btn");
let newGameBtn = document.querySelector("#new-btn");
let message = document.querySelector(".message");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;

const winPatterns = [ [0,1,2] ,[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];


const resetGame = () => {
    turnO = true;
    count = 0;
    enableBlocks();
    message.classList.add("hide");
  };

blocks.forEach((block) => {
    block.addEventListener("click" ,() =>{
    console.log("block was clicked");
    if(turnO)
    {
        block.innerText="o";
        turnO = false;
    }
    else{
        block.innerText="x";
        turnO = true; 
    }
    block.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
});
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    message.classList.remove("hide");
    disableBlocks();
  };
  
  const disableBlocks = () => {
    for (let block of blocks) {
      block.disabled = true;
    }
  };
  
  const enableBlocks = () => {
    for (let block of blocks) {
      block.disabled = false;
      block.innerText = "";
    }
  };
  
  const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    message.classList.remove("hide");
    disableBlocks();
  };
  
  const checkWinner = () => {
    for (let pattern of winPatterns) {
      let pos1Val = blocks[pattern[0]].innerText;
      let pos2Val = blocks[pattern[1]].innerText;
      let pos3Val = blocks[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
          return true;
        }
      }
    }
  };
  
  newGameBtn.addEventListener("click", resetGame);
  Btn.addEventListener("click", resetGame);
