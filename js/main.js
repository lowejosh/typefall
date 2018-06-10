// Global variables
let w, h, c, ctx;
let startedTyping = false;

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

/**
 * Sets up the start page and waits for input to begin the game
 */
function setup() {
    // Clear the screen and create the start page
    clearScreen();
    centerText(w / 2, h / 2, "TypeFall", -20, 36, "normal", "#59C9A5");
    centerText(w / 2, h / 2, "Press any key to begin", 20, 24, "normal", "#59C9A5");
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
    drawBorder();
}

function drawBorder() {
    const THICKNESS = 36;
    const BRACE = w / 4;

    ctx.fillStyle = "#59C9A5";
    ctx.fillRect(0, h - THICKNESS, w, THICKNESS);
    ctx.fillStyle = "#56E39F";
    ctx.fillRect(0, h - 2 * THICKNESS, w, THICKNESS);

    ctx.fillStyle = "#3B2C35";
    ctx.fillRect(0, h - 2 * THICKNESS, BRACE, THICKNESS);
    ctx.fillRect(w - BRACE, h - 2 * THICKNESS, BRACE, THICKNESS);

    if (!startedTyping) {
        ctx.fontStyle = "italic";
        centerText(w / 2, h - 2 * THICKNESS + (THICKNESS / 2), "start typing", 0, 18, "italic", "#5B6C5D");
    }
}

/**
 * Centers text at x/y with specified font size and offset
 * @param x x position
 * @param y y position
 * @param text text to center
 * @param yOffset offset value added to the y axis
 * @param fontSize size of the font
 * @param fontStyle style of the font
 * @param color color of the text
 */
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
