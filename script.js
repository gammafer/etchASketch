let container =     document.getElementById('container');
let navBar=         document.getElementById('navbar');
let clearButton =   document.getElementById ('clearButton');
let isGridOnline=true;

function makeGrid(squarePerSide){
    for(let i=0; i<(squarePerSide*squarePerSide);i++){
            let gridPart = document.createElement('div');
            gridPart.classList=`gridPart`;
            gridPart.style.height=`${90/squarePerSide}vh`;
            gridPart.style.width=`${100/squarePerSide}vw`;
            container.appendChild(gridPart);
            gridPart.addEventListener('mouseover',function(e){
            e.target.style.backgroundColor="black"});
    }
}

function clearGrid(){
    container.innerHTML='';
    input.hidden=false;
    isGridOnline=false;
    clearButton.innerText='Create my grid!';
     
    //Adding a placeholder to our sketchpad for fun.
    let placeholder=document.createElement('p');
    placeholder.innerHTML='Grid is currently offline :(';
    container.appendChild(placeholder);
    

    /*let squarePerSide=100;
    makeGrid(squarePerSide);*/
}

function prepareForNewGrid(){
    container.innerHTML='';
    makeGrid(input.value);
    input.hidden=true;
    clearButton.innerText='Clear this thing';
    isGridOnline=true;
}
function whatToDo(){
    if(isGridOnline) clearGrid();
    else prepareForNewGrid();
}

makeGrid(16);

let input=document.createElement('input');
    input.placeholder="Give me a number";
    input.style.alignContent="center";
    input.hidden=true;
 navBar.insertBefore(input,navBar.firstChild);

clearButton.addEventListener('click',  whatToDo);