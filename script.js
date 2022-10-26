// Creating the 16 by 16 grid
const grid = document.getElementById('container')

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.innerText = '';
      container.appendChild(cell).className = "grid-item";
    };
  };
  
  makeRows(16, 16);

// Setting each grid in my container to this variable
let colorGrid = document.getElementsByClassName('grid-item')

// Because each grid grabbed with getElementsByClassName() are an HTMLCollection (or a NodeList), which is like an array.
// I Loop through each of them and add a function to change the background of whatever div a mouse hovers over
for (const colorGrids of colorGrid){
  colorGrids.addEventListener('mouseover', function changeColor(){
    colorGrids.style.backgroundColor = 'black'
  })
}