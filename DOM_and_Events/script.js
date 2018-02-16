// Merry Caroline Purser
// 10/25/2017
// CS 290 HW Assignment DOM and Events

function makeTable () {
    var body = document.getElementsByTagName("body")[0]; 
    var table = document.createElement("table");
    var tbody = document.createElement("tbody"); 
    
    for(var i = 0; i < 4; i++){
        var row = document.createElement("tr");
        
        for(var j = 0; j < 4; j++){
            if(i > 0){
                var cell = document.createElement("td");
                cell.textContent = ((j+1) + " , " + i);
                table.appendChild(cell);
                row.appendChild(cell);

                
            } else {
                var thead = document.createElement("th");
                thead.textContent = ("Header " + (j+1) + " ");
                table.appendChild(thead);
                row.appendChild(thead);
                
            }
            tbody.appendChild(row);
        }
    }
    
    table.appendChild(tbody);
    body.appendChild(table);
    table.setAttribute("border", "1px");
    table.style.border = "1px solid black";
}

// call make table
makeTable();

function makeButtons() {
    var upButton = document.createElement("button");
    var downButton = document.createElement("button");
    var leftButton = document.createElement("button");
    var rightButton = document.createElement("button");
    var markCellButton = document.createElement("button");
    
    // up button
    upButton.textContent = "up";
    upButton.id = "upButton";
    document.body.appendChild(upButton);
    
    // down button
    downButton.textContent = "down";
    downButton.id = "downButton";
    document.body.appendChild(downButton);
    
    // left button
    leftButton.textContent = "left";
    leftButton.id = "leftButton";
    document.body.appendChild(leftButton);
    
    // right button
    rightButton.textContent = "right";
    rightButton.id = "rightButton";
    document.body.appendChild(rightButton);
    
    // Mark Cell button
    markCellButton.textContent = "Mark Cell";
    markCellButton.id = "markCellButton";
    document.body.appendChild(markCellButton);
    
}

// call make buttons
makeButtons();

// create the initial selected cell, with thicker border
var selected = document.getElementsByTagName("td")[0];
selected.id = "this";
selected.style.borderWidth = "4px";

function move(direction){
    
    selected = document.getElementById("this");
    selected.style.borderWidth = "1px";
    selected.removeAttribute("id"); 
    
    switch(direction){
        case 'up': 
            if(selected.parentNode.rowIndex == 1){
                break;
            } else {
                var tempUp = selected.cellIndex;
                selected = selected.parentNode;
                selected = selected.previousElementSibling;
                selected = selected.firstElementChild;
                
                for(var i = 0; i < tempUp; i++){
                    selected = selected.nextElementSibling;
                }

            }
            break;
        case 'right': 
            if(selected.cellIndex == 3){
                break; 
            } else {
                selected = selected.nextElementSibling;
            }
            break;
        case 'down': 
            if(selected.parentNode.rowIndex == 3){ 
                break;
            } else {
                var tempDown = selected.cellIndex; 
                selected = selected.parentNode;
                selected = selected.nextElementSibling;
                selected = selected.firstElementChild;
                
                for(var j = 0; j < tempDown; j++){ 
                    selected = selected.nextElementSibling;
                }

            }   
            break;
        case 'left': 
            if(selected.cellIndex == 0){ 
                break; 
            } else {
                selected = selected.previousElementSibling; 
                
            }  
            break;
        default: // undefined, do not move.
            break;
    }
    
    selected.style.borderWidth = "4px"; 
    selected.id = "this"; 
    
}

// call move by clicking the 4 directional buttons
var up = document.getElementById("upButton");
var right = document.getElementById("rightButton");
var down = document.getElementById("downButton");
var left = document.getElementById("leftButton");

up.addEventListener("click", function(){move('up')});
right.addEventListener("click", function(){move('right')});
down.addEventListener("click", function(){move('down')});
left.addEventListener("click", function(){move('left')});


function makeYellow() {
    selected = document.getElementById("this");
    selected.style.backgroundColor = 'Yellow';
}

// call makeYellow by using the Mark Cell buttons
document.getElementById("markCellButton").addEventListener("click", makeYellow);