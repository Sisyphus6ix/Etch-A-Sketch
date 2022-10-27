// Creating the 16 by 16 grid
const grid = document.getElementById('container')
const chosenColor = document.getElementById('colorPicker')
const clearBtn = document.getElementById('clearBtn')

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
for (const grids of colorGrid){
  grids.addEventListener('mouseover', function changeColor(){
    grids.style.backgroundColor = 'black'
  })
}

// Function for looping through each grid of my container and setting all of them back to white
const clearGrid = () => {
  for (const grids of colorGrid){
    grids.style.backgroundColor = 'white'
  };
}

// Adding event listener to the button that calls the clearGrid() function when its clicked
clearBtn.addEventListener('click', clearGrid)