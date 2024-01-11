let boxes= document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let h1=document.querySelector("h1");

let turn=false;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText="X";
            turn=false;
        }
        else{
            box.innerText="O";
            turn=true;
        }
        box.disabled=true;
        checkWinner();
    });

});

reset.onclick=()=>{
    for(let i of boxes){
        i.innerText="";
    }
    h1.classList.remove("margin")
    h1.innerText="Tic Tac Toe";
    enable();
}

const checkWinner=()=>{
    winPattern.forEach((pattern)=>{

        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&& pos2!=""&& pos3!="")
        {
            if(pos1==pos2 &&pos2==pos3){
                h1.classList.add("margin");
                h1.innerText=`PLAYER '${pos1}' WINS!`;
                disable();
            }
    }
    });
}
const disable=()=>{
    for(let i of boxes){
        i.disabled=true;
    }
}

const enable=()=>{
    for(let i of boxes){
        i.disabled=false;
    }
}