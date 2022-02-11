// some CONSTANTS to work with
const container = document.getElementById("container");
const clearButton = document.querySelector(".cleargrid");
const DEFAULT_GRID_SIZE = 10;

let newGridSize;
let color = "black";

// generate defaultGrid
function makeGrid(gridSize) {
    let totalGridArea = gridSize * gridSize;

    for (let i = 0; i < totalGridArea; i++) {
        let cellGrid = document.createElement("div");
        // div.classList.add('cell');

        // mouseover effect
        cellGrid.addEventListener("mouseover", function(e) {
            e.target.style.backgroundColor = color
        })

        container.appendChild(cellGrid).className = "cell";
    }
}

// clear grid
function clearGrid() {
    let gridItems = container.querySelectorAll("div");

    gridItems.forEach(gridItem => gridItem.style.backgroundColor = "#fff")

    newGridSize = Number(prompt(`Enter Grid Size\nInput max of 1 - 99 only.`));

    gridSize(newGridSize);
}

// generate new Grid window
function gridSize(newGridSize) {
    let gridItems = container.querySelectorAll("div");

    gridItems.forEach(gridItem => gridItem.remove());

    // create the new grid
    makeGrid(newGridSize);
}

// Event Listeners
clearButton.addEventListener("click", clearGrid);

// create Grid on function call
makeGrid(DEFAULT_GRID_SIZE);