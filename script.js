let container = document.getElementById('container');
let clearButton = document.getElementById ('clearButton');

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

makeGrid(16);
function clearGrid(){
    container.innerHTML='';
}
clearButton.addEventListener('click',clearGrid);