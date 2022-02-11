// some CONSTANTS to work with
const container = document.getElementById("container");
let rows = document.getElementsByClassName("row");
let cells = document.getElementsByClassName("cell");

function createGrid() {
    makeRows(16);
    makeColumns(16);
}

// to create Rows
function makeRows(rowNum) {
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "row";
    }
}

// to create Columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        }
    }
}

// create Grid on function call
createGrid();