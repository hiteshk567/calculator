let container = createEle("div", "container");

let heading = createEle("h1", "heading");
heading.innerHTML = "CALCULATOR";

let displayRow = createEle("div", "row screen");

let displayHeader = createEle("h1", "display");
displayRow.append(displayHeader);
container.append(displayRow);


let fourRows = [];

let map = {
    0: "1",
    1: "2",
    2: "3",
    3: "+",
    4: "4",
    5: "5",
    6: "6",
    7: "-",
    8: "7",
    9: "8",
    10: "9",
    11: "*",
    12: "/",
    13: "0",
    14: "%",
    15: "="
}
let counter = 0;

for (let i = 0; i < 4; i++) {
    let div = createEle("div", "row");
    for (let j = 0; j < 4; j++) {
        let col = createEle("div", "col-3");
        let button = createBut("button", map[counter++]);
        col.append(button);
        div.append(col);
    }
    container.append(div);
}

function createBut(tagName, value) {
    let element = document.createElement(tagName);
    element.value = value;
    element.innerHTML = value;
    return element;
}

function createEle(tagName, className = "", id = "") {
    let element = document.createElement(tagName);
    let arr = className.split(" ");
    for (let i = 0; i < arr.length; i++) {
        element.classList.add(arr[i]);
    }
    element.id = id;
    return element;
}

let last_row = createEle("div", "row");
let clearButton = createBut("button", "clear");
last_row.append(clearButton);

container.append(last_row);

document.body.append(heading);
document.body.append(container);