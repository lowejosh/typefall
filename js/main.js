// Global variables
let w, h, c, ctx;

// Entry point
function init() {
    // Initialise the canvas
    c = document.getElementById("canvas");
    c.width = w = window.innerWidth;
    c.height = h = window.innerHeight - 42;



    // Set the context
    ctx = c.getContext("2d");

    if( c.getContext ) {
        setup();
//        setInterval( run , 33 );
    }
}

function setup() {
    clearScreen();
    centerText("TypeFall", -20, 36);
    centerText("Press any key to begin", 20, 24);
}

/**
 * Centers text in the canvas with specified font size and offset
 * @param text text to center
 * @param yOffset offset value added to the y axis
 * @param fontSize size of the font
 */
function centerText(text, yOffset, fontSize) {
        ctx.fillStyle = "#33FF00";
        ctx.font = fontSize + "px Arial";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center"
        ctx.fillText(text, w / 2, (h / 2) + yOffset);
        test = true;
}

function clearScreen() {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, w, h);
}
