// Global variables
let w, h, c, ctx;

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
//        setInterval( run , 33 );
    }
}

/**
 * Sets up the start page and waits for input to begin the game
 */
function setup() {
    // Clear the screen and create the start page
    clearScreen();
    centerText("TypeFall", -20, 36);
    centerText("Press any key to begin", 20, 24);
    // Wait for any key press
    window.addEventListener("keypress", startGame);
}

function startGame(e) {
    window.removeEventListener("keypress", startGame);
    clearScreen();
    setInterval(process, 50);
}

function process() {
   drawBorder();
}

function drawBorder() {
    const THICKNESS = 36;

    ctx.fillStyle = "#59C9A5";
    ctx.fillRect(0, h - THICKNESS, w, THICKNESS);
    ctx.fillStyle = "#56E39F";
    ctx.fillRect(0, h - 2 * THICKNESS, w, THICKNESS);

    ctx.fillStyle = "#3B2C35";
    ctx.fillRect(0, h - 2 * THICKNESS, 300, THICKNESS);
    ctx.fillRect(w - 300, h - 2 * THICKNESS, 300, THICKNESS);

}

/**
 * Centers text in the canvas with specified font size and offset
 * @param text text to center
 * @param yOffset offset value added to the y axis
 * @param fontSize size of the font
 */
function centerText(text, yOffset, fontSize) {
        ctx.fillStyle = "#56E39F";
        ctx.font = fontSize + "px Arial";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center"
        ctx.fillText(text, w / 2, (h / 2) + yOffset);
        test = true;
}

function clearScreen() {
    ctx.fillStyle = "#2A1F2D";
    ctx.fillRect(0, 0, w, h);
}
