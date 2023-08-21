let rock = document.getElementById('rock');



rock.children[1].addEventListener('click', ()=>{
    document.body.style.transition = "all 0.75s ease-in-out";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
})

let scissor = document.getElementById('scissors');

scissor.children[1].addEventListener('click', () =>{
    document.body.style.transition = "all 0.75s ease-in-out";
    document.body.style.backgroundColor = "gray";
    document.body.style.color = "black"; 
})

let paper = document.getElementById('paper');


paper.children[1].addEventListener('click', () =>{
    document.body.style.transition = "all 0.75s ease-in-out";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "seagreen"; 
})
