let userScore=0;
let compScore=0;


// let rock=document.querySelector("#rock");
// let  paper=document.querySelector("#paper");
// let scissor=document.querySelector("#scissor");

// rock.addEventListener("click",()=>{
//     console.log(`rock has been selceted`);
// });
let msg=document.querySelector("#msg");
let computerScore=document.querySelector("#computerScore");
let yourScore=document.querySelector("#yourScore");
let boxes=document.querySelectorAll(".box");
const genChoice=()=>{
    const options=["rock","paper","scissor"];
    let val=Math.floor(Math.random()*3);
    return options[val];
};

const playGame=(userChoice)=>{
    const compChoice=genChoice();
    console.log(compChoice);
    if(userChoice==compChoice)
    msg.innerText=`draw`;

    if(userChoice=="rock" && compChoice=="paper"){
    msg.innerText=`loss paper beat rock`;
    compScore++;
    
    }

    if(userChoice=="rock" && compChoice=="scissor"){
    msg.innerText=`win rock beat scissor`;
    userScore++;
    }

    if(userChoice=="paper" && compChoice=="scissor"){
    msg.innerText=`loss scissor beat paper`;
    compScore++;
    }

    if(userChoice=="paper" && compChoice=="rock"){
    msg.innerText=`win paper beat rock`;
    userScore++;
    }

    if(userChoice=="scissor" && compChoice=="paper"){
    msg.innerText=`win scissor beat paper`;
    userScore++;
    }

    if(userChoice=="scissor" && compChoice=="rock"){
    msg.innerText=`loss rock beat scissor`;
    compScore++;
    }
    computerScore.innerText=compScore;
    yourScore.innerText=userScore;
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        const userChoice=box.getAttribute("id");
        console.log(`user selected ${userChoice}`);
        playGame(userChoice);
    });
});