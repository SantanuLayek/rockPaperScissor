let divbuttonr = document.getElementById('rock');
let divbuttons = document.getElementById('scissors');
let divbuttonp = document.getElementById('paper');
let score = document.getElementsByClassName('score');
let move = document.getElementsByClassName('computerChose');
let oldcss = document.style;
let reset = document.getElementById('reset');
let computerMove = '';

let UserScore = 0;
let ComputerScore = 0;

divbuttonr.addEventListener('click', ()=>{
    const random = Math.random();
    if (random >= 0 && random < 1/3){
        computerMove = 'rock';
    }
    else if(random >= 1/3 && random < 2/3){
        computerMove = 'scissors';
    }
    else{
        computerMove = 'paper';
    }

    let result = '';

    if (computerMove === 'rock'){
        result = 'You Tied.';
        UserScore += 1;
        ComputerScore += 1;
        score[0].innerText = `Your Score : ${UserScore} | Computer Score: ${ComputerScore}`
    }
    else if(computerMove === 'scissors'){
        result = 'You Win.';
        UserScore += 1;
        score[0].innerText = `Your Score : ${UserScore} | Computer Score: ${ComputerScore}`
    }
    else{
        result = 'Computer Wins.';
        ComputerScore += 1;
        score[0].innerText = `Your Score : ${UserScore} | Computer Score: ${ComputerScore}`
    }
    console.log(UserScore, ComputerScore);
    alert(`You chose Rock. Computer Chose ${computerMove}. ${result}`);
})

divbuttons.addEventListener('click', ()=>{
    const random = Math.random();

    if (random >= 0 && random < 1/3){
        computerMove = 'rock';
    }
    else if(random >= 1/3 && random < 2/3){
        computerMove = 'scissors';
    }
    else{
        computerMove = 'paper';
    }

    let result = '';

    if (computerMove === 'rock'){
        result = 'Computer Wins.';
        ComputerScore += 1;
        score[0].innerText = `Your Score : ${UserScore} | Computer Score: ${ComputerScore}`
    }
    else if(computerMove === 'scissors'){
        result = 'You Tied.';
        UserScore += 1;
        ComputerScore += 1;
        score[0].innerText = `Your Score : ${UserScore} | Computer Score: ${ComputerScore}`
    }
    else{
        result = 'You Win.';
        UserScore += 1;
        score[0].innerText = `Your Score : ${UserScore} | Computer Score: ${ComputerScore}`
    }
    console.log(UserScore, ComputerScore);
    alert(`You chose Scissors. Computer Chose ${computerMove}. ${result}`);
    
})

divbuttonp.addEventListener('click', ()=>{
    const random = Math.random();
    
    if (random >= 0 && random < 1/3){
        computerMove = 'rock';
    }
    else if(random >= 1/3 && random < 2/3){
        computerMove = 'scissors';
    }
    else{
        computerMove = 'paper';
    }

    let result = '';

    if (computerMove === 'rock'){
        result = 'You Win.';
        UserScore += 1;
        score[0].firstChild.innerText = `Your Score : ${UserScore} | Computer Score: ${ComputerScore}`
        
    }
    else if(computerMove === 'scissors'){
        result = 'Computer Wins.';
        ComputerScore += 1;
        score[0].firstChild.innerText = `Your Score : ${UserScore} | Computer Score: ${ComputerScore}`
    }
    else{
        result = 'You Tied.';
        UserScore += 1;
        ComputerScore += 1;
        score[0].firstChild.innerText = `Your Score : ${UserScore} | Computer Score: ${ComputerScore}`
    }
    console.log(UserScore, ComputerScore);
    score[0].innerText = `Your Score : ${UserScore} | Computer Score: ${ComputerScore}`
    alert(`You chose Paper. Computer Chose ${computerMove}. ${result}`);
})

reset.addEventListener('click', ()=>{
    ComputerScore = 0;
    UserScore = 0;
    score[0].innerText = `Your Score : ${UserScore} | Computer Score: ${ComputerScore}`
    document.body.style.transition = "all 0.75s ease-in-out";
    document.body.style.backgroundColor = "rgb(0, 155, 106)";
    document.body.style.color = "black";
})