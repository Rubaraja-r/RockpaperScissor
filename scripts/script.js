const computerScore = document.getElementById('cscore');
const userScore = document.getElementById('uscore');
let cScore=0,uScore=0;
const gsContainer =document.getElementById('gastart');
const grContainer =document.getElementById('garesult');
const btnGs = document.getElementById('game');
const hand =document.querySelector('.hands');
const  fresult=document.getElementById('result');
const des =document.querySelector('.design');
const gameStart=function()
{
    computerScore.innerText=cScore;
    userScore.innerText=uScore;
    grContainer.classList.remove('hidden');
    gsContainer.classList.add('hidden');
    hand.classList.remove('hidden');
    des.classList.add('hide');
   
};


const check = function(input){
    const userInput=input;
    const choices=['Rock','Paper','Scissors'];
    const num=Math.trunc(Math.random()*3);
    const computerInput=choices[num];
    calculate(userInput,computerInput);
    

}


function calculate(userInput,computerInput)
{
    if(userInput===computerInput)
    {
        updateDom(userInput,computerInput);
        fresult.innerHTML = "DRAW";
        return;
       
    }
    else if(((userInput ==='Rock') && (computerInput ==='Paper')) || ((userInput ==='Paper') && (computerInput ==='Scissors')) || ((userInput ==='Scissors') && (computerInput ==='Rock')))
    {
        cScore++;
        updateDom(userInput,computerInput);
        fresult.innerHTML = "YOU LOST";
        return;
    }
   else{
       uScore++;
       updateDom(userInput,computerInput);
       fresult.innerHTML = "YOU WON";
       return;
   }
    
};
function updateDom(userInput, computerInput)
 {
     computerScore.innerText =cScore;
     userScore.innerText =uScore;
     document.getElementById('c-choice').innerHTML = `Computer Choose ${computerInput}`;
     document.getElementById('u-choice').innerHTML = `User Choose  ${userInput }`;
    
   
 };
 

 game.addEventListener('click',gameStart);
