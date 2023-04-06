let rows = 100;
let cols = 26;

let addressColCont = document.querySelector(".address_col_cont");
for(let i=0;i<rows;i++){
    addressColDiv = document.createElement("div");
    addressColDiv.setAttribute("class","address_col");
    addressColDiv.innerText = i+1;
    addressColCont.appendChild(addressColDiv);
}

let addressRowCont = document.querySelector(".address_row_cont");
for(let i=0;i<cols;i++){
    addressRowDiv = document.createElement("div");
    addressRowDiv.setAttribute("class","address_row");
    addressRowDiv.innerText = String.fromCharCode(65+i);
    addressRowCont.appendChild(addressRowDiv);
}

let cellCont = document.querySelector(".cell_cont");
for(let i=0;i<rows;i++){
    let rowDivS = document.createElement("div");
    rowDivS.setAttribute("class","row_cont")
    for(let j=0;j<cols;j++){
        let cell = document.createElement("div");
        cell.setAttribute("class","cell");
        cell.setAttribute("contenteditable",true);

        cell.setAttribute("rid",i);
        cell.setAttribute("cid",j);
        cell.setAttribute("spellchek","false");
       
        rowDivS.appendChild(cell);
        addListenerForAddressDisplay(cell,i,j);
    }
    cellCont.appendChild(rowDivS);
}


let addressBar = document.querySelector(".address_bar");
function addListenerForAddressDisplay(cell,i,j) {
    cell.addEventListener("click",(e)=>{
        let rowId = i+1;
        let colId = String.fromCharCode(65+j);
        addressBar.value = `${colId}${rowId}`;
    })
}

// By default click on first cell via dom
let firstCell = document.querySelector(".cell");
firstCell.click();