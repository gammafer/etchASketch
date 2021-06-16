let container = document.getElementById('container');

for(let i=0; i<255;i++){
    let gridPart = document.createElement('div');
    gridPart.classList=`gridPart`;
    container.appendChild(gridPart);
}