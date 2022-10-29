// const eraserBtn = document.getElementById('eraserBtn')
const grid = document.getElementById('container')
const chosenColor = document.getElementById('colorPicker')
const clearBtn = document.getElementById('clearBtn')
const gridSize = document.getElementById('sizeSlider')
const gridSizeNumber = document.getElementById('sizeValue')
const colorGrid = document.getElementsByClassName('grid-item')

// Creating the 16 by 16 grid
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

//Function for deleting the entire grid
const deleteGrid = () => {
  grid.innerHTML = '';
}

// Because each grid grabbed with getElementsByClassName() are an HTMLCollection (or a NodeList), which is like an array.
// I Loop through each of them and add a function to change the background of whatever div a mouse hovers over
for (const grids of colorGrid){
  grids.addEventListener('mouseover', function changeColor(){
    grids.style.backgroundColor = 'black'
  })
}

// Function for looping through each grid of my container and setting all of them back to white
const resetGridColor = () => {
  for (const grids of colorGrid){
    grids.style.backgroundColor = 'white'
  };
}

// Adding event listener to the button that calls the clearGrid() function when its clicked
clearBtn.addEventListener('click', resetGridColor)

// Making the grid size number get displayed by pulling the current value of the slider
gridSizeNumber.innerHTML = `${gridSize.value} by ${gridSize.value}`;

// Function for changing the size of my grid
gridSize.addEventListener('click', function() {
  gridSizeNumber.innerHTML = `${gridSize.value} by ${gridSize.value}`;
  deleteGrid()
  makeRows(`${gridSize.value}`, `${gridSize.value}`)
});

// const eraser = () => {
//   for (const grids of colorGrid){
//     grids.style.backgroundColor = 'white'
//   };
// }

// eraserBtn.addEventListener('click', eraser)