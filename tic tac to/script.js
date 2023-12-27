const boxes= document.querySelectorAll(".box");
const resgame = document.querySelector("#game-btn"); 
const popUpMsg = document.querySelector(".popup");
const msg = document.querySelector(".msg");
const newGame = document.querySelector(".new-game");
const mark = ["O","X"];
let currentPlayer = 0;
let count = 0;
//Winning Pattern Array
let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
  ];


const displayPopUp = ()=>{
    popUpMsg.style.display = 'block';
};

const winFunction = (letter)=>{
    if (letter == "X") {
        msg.innerHTML = "&#x1F389; <br> 'X' Wins";
      } else {
        msg.innerHTML = "&#x1F389; <br> 'O' Wins";
      }
      displayPopUp();
}


const winChecker = ()=>{
    for( let i of winningPattern)
    {
        let [element1 , element2, element3] = [
            boxes[i[0]].innerText,
            boxes[i[1]].innerText,
            boxes[i[2]].innerText,
        ];
    

    if(element1 != "" && (element2 != "") & (element3 != ""))
    {
        if (element1 == element2 && element2 == element3) {
            //If all 3 buttons have same values then pass the value to winFunction
            winFunction(element1);
          }
    }
}
}


const displayDrawFunction = ()=>{
    msg.innerHTML = "&#x1F60E; <br> It's a Draw";
    displayPopUp();
}

boxes.forEach(box=>{
    box.addEventListener("click",function(){
        if (!box.textContent.trim()) {
            box.textContent = mark[currentPlayer];
            currentPlayer = (currentPlayer + 1) % 2; // Switch players
        }
        count+=1;
        console.log(count);
        if(count == 9)
        {
            displayDrawFunction();
        }
        winChecker();
    });
});

function resetBoard()
{
    boxes.forEach(box => {
        box.textContent = "";
    });
}


resgame.addEventListener("click",function()
{
    resetBoard();
});
newGame.addEventListener("click",function()
{
    popUpMsg.style.display = 'none';
    resetBoard();
});

