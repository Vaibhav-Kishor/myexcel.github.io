// Storage data
let sheetDB =[]

for(let i=0;i<rows;i++){
    let sheetRow = [];
    for(let j=0;j<cols;j++){
        let cellProp = {
            bold: false,
            italic: false,
            underline: false,
            alignment: "left",
            fontFamily: "monospace",
            fontSize: "14",
            fontColor: "#000000",
            bgColor: "#000000", //! just for indication purpose

        }
        sheetRow.push(cellProp);
    }
    sheetDB.push(sheetRow);
}

// selector for cell propertis
let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");
let fontSize = document.querySelector(".cell_font_size_prop");
let fontFamily = document.querySelector(".cell_font_family_prop");
let fontColor = document.querySelector(".font_color_prop");
let bgColor = document.querySelector(".bgColor_prop");
let alignment = document.querySelectorAll(".alignment");
let leftAlign = alignment[0];
let centerAlign = alignment[1];
let rightAlign = alignment[2];


// Application of two-way binding
// Attach property listener
let addressBar = document.querySelector(".address_bar");
bold.addEventListener("click",(e)=>{

})