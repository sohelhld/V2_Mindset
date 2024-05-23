function drawShape(shapeType, alignment, drawChar, rows, columns) {
    if (shapeType.toLowerCase() === "triangle") {
        drawTriangle(alignment, drawChar, rows);
    } else if (shapeType.toLowerCase() === "square") {
        drawRectangle(alignment, drawChar, rows, rows);
    } else if (shapeType.toLowerCase() === "rectangle") {
        drawRectangle(alignment, drawChar, rows, columns);
    } else {
        console.log("Invalid shape type");
    }
}

function drawTriangle(alignment, drawChar, rows) {
    for (let i = 1; i <= rows; i++) {
        let line = drawChar.repeat(i);
        printAligned(line, alignment, rows);
    }
}

function drawRectangle(alignment, drawChar, rows, columns) {
    for (let i = 0; i < rows; i++) {
        let line = drawChar.repeat(columns);
        printAligned(line, alignment, columns);
    }
}

function printAligned(line, alignment, maxLength) {
    if (alignment.toLowerCase() === "left") {
        console.log(line);
    } else if (alignment.toLowerCase() === "right") {
        console.log(line.padStart(maxLength));
    } else if (alignment.toLowerCase() === "center") {
        let totalPadding = maxLength - line.length;
        let paddingLeft = Math.floor(totalPadding / 2);
        let paddingRight = totalPadding - paddingLeft;
        console.log(" ".repeat(paddingLeft) + line + " ".repeat(paddingRight));
    } else {
        console.log("Invalid alignment");
    }
}

let shapeType = "triangle";
let alignment = "right";
let drawChar = "1";
let rows = 3;
let columns = 10;

drawShape(shapeType, alignment, drawChar, rows, columns);
