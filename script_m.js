let grid = document.querySelector(".grid");
let count = 0;
for (let i = 1; i <= 21; i++) {
    let row = document.createElement('div');
    row.setAttribute('class', "row"); 
    row.setAttribute('id', i);
    
    for (let j = 1; j <= 21; j++) {
        let cell = document.createElement('button');
        cell.setAttribute('class', "cell"); 
        cell.setAttribute('id', count + "cell"); 
        cell.setAttribute("style", 'background-color: white');
        row.appendChild(cell);
        count++;
    }
    
    grid.appendChild(row);
}

function clicked(cell) {
    let color = cell.style.backgroundColor;
    console.log(color);
    if (color == "black") {
        cell.style.backgroundColor = "white";
        current[parseInt(cell.id, 10)] = 0;
    }
    if (color == "white" || color == "red") {
        cell.style.backgroundColor = "black";
        current[parseInt(cell.id, 10)] = 1;
    }
}

let cells = document.getElementsByClassName('cell');
let clicking = false;
for (let i = 0; i < cells.length; i++){
    cells[i].addEventListener("mouseover", function( event ) {
        
        if (clicking) {
            clicked(event.target)
        } 
    });
    
    cells[i].addEventListener("mousedown", function( event ) {
        clicked(event.target);
    });
}

grid.addEventListener("mousedown", function (event) {
    clicking = true;
});

grid.addEventListener("mouseup", function (event) {
    clicking = false;
});

let current = [];
let correct = [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0];

for (let i = 0; i <= 440; i++) {
    current.push(0);
}

function check() {
    let cor = true;
    for (let i = 0; i <= correct.length; i++) {
        if (current[i] != correct[i]) {
            cor = false;
        }
        if (current[i] == 0 && correct[i] == 1 || current[i] == 1 && correct[i] == 0) {
            document.getElementById(i+"cell").style.backgroundColor = "red";
            return;
        }
    }
    if (cor) {
        alert("SOLVED!");
    }
}



