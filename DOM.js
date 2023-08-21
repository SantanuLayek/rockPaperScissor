let rock = document.getElementById('rock');

let heading = document.getElementById('name');

rock.children[1].addEventListener('click', ()=>{
    document.body.style.transition = "all 0.75s ease-in-out";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    // heading.style.animation = "boxglow1 1s linear infinite"
})
 
let scissor = document.getElementById('scissors');

scissor.children[1].addEventListener('click', () =>{
    document.body.style.transition = "all 0.75s ease-in-out";
    document.body.style.backgroundColor = "gray";
    document.body.style.color = "black"; 
    // heading.style.animation = "boxglow2 1s linear infinite"
})

let paper = document.getElementById('paper');


paper.children[1].addEventListener('click', () =>{
    document.body.style.transition = "all 0.75s ease-in-out";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "seagreen"; 
    // heading.style.animation = "boxglow3 1s linear infinite"
})
