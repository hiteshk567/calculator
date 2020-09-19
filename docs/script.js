let a = "",
    b = "",
    operation = "";


function clearField() {
    a = "";
    b = "";
    operation = "";
    display("");
}

let calculate = {
    "+": function (a, b) {
        return a + b;
    },
    "-": function (a, b) {
        return a - b;
    },
    "*": function (a, b) {
        return a * b;
    },
    "/": function (a, b) {
        return a / b;
    },
    "%": function (a, b) {
        return a % b;
    }
}
document.querySelector(".container").addEventListener("click", (e) => {
    let event = e.target.value;
    if (!event)
        return;
    if (event === "clear") {
        clearField();
        return;
    }
    if (event === "=") {
        if (a.length !== 0 && b.length !== 0 && operation.length !== 0) {
            let result = calculate[operation](+a, +b);
            display(result);
            a = result;
            operation = "";
            b = "";
        }
        operation = "";
        return;
    }
    if (event === "+" || event === "-" || event === "*" || event === "/" || event === "%") {
        if (a.length !== 0) {
            operation = event;
            display(a + " " + operation);
        }
        return;
    }
    if (operation.length === 0) {
        if (a.length > 10) {
            return;
        }
        a += event;
        display(a);
    } else {
        if (b.length > 10) {
            return;
        }
        b += event;


        display(a + " " + operation + " " + b);
    }
});

document.body.addEventListener("keypress", (e) => {
    let event = e.key;

    if ((event === "=" || e.key === "Enter" || e.keyCode === 13) && (a.length !== 0) && b.length !== 0 && operation.length !== 0) {
        let result = calculate[operation](+a, +b);
        display(result);
        a = result;
        operation = "";
        b = "";
        return;
    }

    if (e.keyCode >= 48 && e.keyCode <= 57) {
        if (operation.length === 0) {
            if (a.length > 10) {
                return;
            }
            a += event;

            display(a);
        } else {
            if (b.length > 10)
                return;
            b += event;
            display(a + " " + operation + " " + b);
        }
    }
    if (event === "+" || event === "-" || event === "*" || event === "/" || event === "%") {
        if (a.length !== 0) {
            operation = event;
            display(a + " " + operation);
        }
        return;
    }
});

function display(current) {
    document.querySelector(".display").innerHTML = current;
}