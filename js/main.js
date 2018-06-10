// Global variables
let w, h, c, ctx;
let startedTyping = false;
let danger = false;
let wordList;

// Entry point
function init() {
    // Initialise the canvas
    c = document.getElementById("canvas");
    c.width = w = window.innerWidth;
    c.height = h = window.innerHeight;

    // Set the context
    ctx = c.getContext("2d");
    if( c.getContext ) {
        setup();
    }
}

// Sets up the start page and waits for input to begin the game
function setup() {
    // Clear the screen and create the start page
    clearScreen();
    centerText(w / 2, h / 2, "TypeFall", -20, 36, "bold", "#59C9A5");
    centerText(w / 2, h / 2, "Press any key to begin", 20, 24, "normal", "#59C9A5");

    // Retrieve the word list
    fetch('words.txt')
        .then(response => response.text())
        .then(text => console.log(text.split("\n")))

    // outputs the content of the text file
//    wordList = text.split("\n")


    // Wait for any key press
    window.addEventListener("keypress", startGame);
}

function startGame(e) {
    window.removeEventListener("keypress", startGame);
    clearScreen();
    setInterval(process, 50);
}

function process() {
    clearScreen();
    drawScreen();
    //updateWords();
}

function drawScreen() {
    drawBorder();
}

// Draws the games layout
function drawBorder() {
    const THICKNESS = 36;
    const BRACE = w / 4;

    ctx.fillStyle = "#59C9A5";
    ctx.fillRect(0, h - THICKNESS, w, THICKNESS);
    ctx.fillStyle = "#56E39F";
    ctx.fillRect(0, h - 2 * THICKNESS, w, THICKNESS);

    if (!danger) {
        ctx.fillStyle = "#3B2C35";
    } else {
        ctx.fillStyle = "#9E3A3A";
    }
    ctx.fillRect(0, h - 2 * THICKNESS, BRACE, THICKNESS);
    ctx.fillRect(w - BRACE, h - 2 * THICKNESS, BRACE, THICKNESS);

    if (!startedTyping) {
        ctx.fontStyle = "italic";
        centerText(w / 2, h - 2 * THICKNESS + (THICKNESS / 2), "start typing", 0, 18, "italic", "#5B6C5D");
    }
}

function centerText(x, y, text, yOffset, fontSize, fontStyle, color) {
        ctx.fillStyle = color;
        ctx.font = fontStyle + " " + fontSize + "px Arial";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center"
        ctx.fillText(text, x, y + yOffset);
        test = true;
}

function clearScreen() {
    ctx.fillStyle = "#2A1F2D";
    ctx.fillRect(0, 0, w, h);
}
