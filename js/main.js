// Global variables
let w, h, c, ctx, activeWordList, wordCount, danger, points, multiplier, dangerColor, addNewWord, seconds, pointNotes;
let textInput = document.getElementById("text-input");
let wordList = ["the","of","to","and","a","in","is","it","you","that","he","was","for","on","are","with","as","I","his","they","be","at","one","have","this","from","or","had","by","hot","word","but","what","some","we","can","out","other","were","all","there","when","up","use","your","how","said","an","each","she","which","do","their","time","if","will","way","about","many","then","them","write","would","like","so","these","her","long","make","thing","see","him","two","has","look","more","day","could","go","come","did","number","sound","no","most","people","my","over","know","water","than","call","first","who","may","down","side","been","now","find","any","new","work","part","take","get","place","made","live","where","after","back","little","only","round","man","year","came","show","every","good","me","give","our","under","name","very","through","just","form","sentence","great","think","say","help","low","line","differ","turn","cause","much","mean","before","move","right","boy","old","too","same","tell","does","set","three","want","air","well","also","play","small","end","put","home","read","hand","port","large","spell","add","even","land","here","must","big","high","such","follow","act","why","ask","men","change","went","light","kind","off","need","house","picture","try","us","again","animal","point","mother","world","near","build","self","earth","father","head","stand","own","page","should","country","found","answer","school","grow","study","still","learn","plant","cover","food","sun","four","between","state","keep","eye","never","last","let","thought","city","tree","cross","farm","hard","start","might","story","saw","far","sea","draw","left","late","run","don't","while","press","close","night","real","life","few","north","open","seem","together","next","white","children","begin","got","walk","example","ease","paper","group","always","music","those","both","mark","often","letter","until","mile","river","car","feet","care","second","book","carry","took","science","eat","room","friend","began","idea","fish","mountain","stop","once","base","hear","horse","cut","sure","watch","color","face","wood","main","enough","plain","girl","usual","young","ready","above","ever","red","list","though","feel","talk","bird","soon","body","dog","family","direct","pose","leave","song","measure","door","product","black","short","numeral","class","wind","question","happen","complete","ship","area","half","rock","order","fire","south","problem","piece","told","knew","pass","since","top","whole","king","space","heard","best","hour","better","true","during","hundred","five","remember","step","early","hold","west","ground","interest","reach","fast","verb","sing","listen","six","table","travel","less","morning","ten","simple","several","vowel","toward","war","lay","against","pattern","slow","center","love","person","money","serve","appear","road","map","rain","rule","govern","pull","cold","notice","voice","unit","power","town","fine","certain","fly","fall","lead","cry","dark","machine","note","wait","plan","figure","star","box","noun","field","rest","correct","able","pound","done","beauty","drive","stood","contain","front","teach","week","final","gave","green","oh","quick","develop","ocean","warm","free","minute","strong","special","mind","behind","clear","tail","produce","fact","street","inch","multiply","nothing","course","stay","wheel","full","force","blue","object","decide","surface","deep","moon","island","foot","system","busy","test","record","boat","common","gold","possible","plane","stead","dry","wonder","laugh","thousand","ago","ran","check","game","shape","equate","hot","miss","brought","heat","snow","tire","bring","yes","distant","fill","east","paint","language","among","grand","ball","yet","wave","drop","heart","am","present","heavy","dance","engine","position","arm","wide","sail","material","size","vary","settle","speak","weight","general","ice","matter","circle","pair","include","divide","syllable","felt","perhaps","pick","sudden","count","square","reason","length","represent","art","subject","region","energy","hunt","probable","bed","brother","egg","ride","cell","believe","fraction","forest","sit","race","window","store","summer","train","sleep","prove","lone","leg","exercise","wall","catch","mount","wish","sky","board","joy","winter","sat","written","wild","instrument","kept","glass","grass","cow","job","edge","sign","visit","soft","fun","bright","gas","weather","month","million","bear","finish","happy","hope","flower","clothe","strange","gone","jump","baby","eight","village","meet","root","buy","raise","solve","metal","whether","push","seven","paragraph","third","shall","held","hair","describe","cook","floor","either","result","burn","hill","safe","cat","century","consider","type","law","bit","coast","copy","phrase","silent","tall","sand","soil","roll","temperature","finger","industry","value","fight","lie","beat","excite","natural","view","sense","ear","else","quite","broke","case","middle","kill","son","lake","moment","scale","loud","spring","observe","child","straight","consonant","nation","dictionary","milk","speed","method","organ","pay","age","section","dress","cloud","surprise","quiet","stone","tiny","climb","cool","design","poor","lot","experiment","bottom","key","iron","single","stick","flat","twenty","skin","smile","crease","hole","trade","melody","trip","office","receive","row","mouth","exact","symbol","die","least","trouble","shout","except","wrote","seed","tone","join","suggest","clean","break","lady","yard","rise","bad","blow","oil","blood","touch","grew","cent","mix","team","wire","cost","lost","brown","wear","garden","equal","sent","choose","fell","fit","flow","fair","bank","collect","save","control","decimal","gentle","woman","captain","practice","separate","difficult","doctor","please","protect","noon","whose","locate","ring","character","insect","caught","period","indicate","radio","spoke","atom","human","history","effect","electric","expect","crop","modern","element","hit","student","corner","party","supply","bone","rail","imagine","provide","agree","thus","capital","won't","chair","danger","fruit","rich","thick","soldier","process","operate","guess","necessary","sharp","wing","create","neighbor","wash","bat","rather","crowd","corn","compare","poem","string","bell","depend","meat","rub","tube","famous","dollar","stream","fear","sight","thin","triangle","planet","hurry","chief","colony","clock","mine","tie","enter","major","fresh","search","send","yellow","gun","allow","print","dead","spot","desert","suit","current","lift","rose","continue","block","chart","hat","sell","success","company","subtract","event","particular","deal","swim","term","opposite","wife","shoe","shoulder","spread","arrange","camp","invent","cotton","born","determine","quart","nine","truck","noise","level","chance","gather","shop","stretch","throw","shine","property","column","molecule","select","wrong","gray","repeat","require","broad","prepare","salt","nose","plural","anger","claim","continent","oxygen","sugar","death","pretty","skill","women","season","solution","magnet","silver","thank","branch","match","suffix","especially","fig","afraid","huge","sister","steel","discuss","forward","similar","guide","experience","score","apple","bought","led","pitch","coat","mass","card","band","rope","slip","win","dream","evening","condition","feed","tool","total","basic","smell","valley","nor","double","seat","arrive","master","track","parent","shore","division","sheet","substance","favor","connect","post","spend","chord","fat","glad","original","share","station","dad","bread","charge","proper","bar","offer","segment","slave","duck","instant","market","degree","populate","chick","dear","enemy","reply","drink","occur","support","speech","nature","range","steam","motion","path","liquid","log","meant","quotient","teeth","shell","neck"];
const WORD_FONT_SIZE = 16;
const THICKNESS = 36;
// magic numbers for constant speed across all window heights
const SLOW_SPEED_DIVISOR = 580;
const NORMAL_SPEED_DIVISOR = SLOW_SPEED_DIVISOR / 2;
const FAST_SPEED_DIVISOR = NORMAL_SPEED_DIVISOR / 2;


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

    // Wait for any key press
    window.addEventListener("keypress", startGame);
}

function startGame() {
    // Set vars
    wordCount = 0;
    points = 0;
    multiplier = 1;
    activeWordList = [];
    startedTyping = false;
    danger = false;
    addNewWord = false;
    seconds = 0;
    pointNotes = [];

    textInput.style.display = "inline";

    window.removeEventListener("keypress", startGame);

    // If a user submits a word
    document.addEventListener('keydown', function(e) {
        // Clear the input if enter or space is pressed
        if(e.keyCode == 32 || e.keyCode == 13) {
            // If the word is correct
            if (checkForMatch()) {
                // Show success color
                dangerColor = "#10572C";
                danger = true;
                setTimeout(function() {
                    danger = false;
                }, 150);
                // If it is the tenth word success, add a new one
                if ((wordCount % 10) == 0) {
                    addNewWord = true;
                }
            } else {
                dangerColor = "#615756";
                danger = true;
                setTimeout(function() {
                    danger = false;
                }, 150);
            }
            textInput.value = "";
        }
    });

    // BUG FIX from a rogue space upon word submit pushing to the input after it has cleared (because it submits upon keypress)
    document.addEventListener('keyup', function(e) {
        if(e.keyCode == 32) {
            if (textInput.value.substr(0,1) == " ") {
                textInput.value = textInput.value.substr(1 ,textInput.value.length);
            }
        }
    });


    // Clear the screen
    clearScreen();

    // First word
    let word = new Word(wordList[randomNumber(0, wordList.length)]);
    activeWordList.push(word)

    // Second word
    setTimeout(function() {
        let word = new Word(wordList[randomNumber(0, wordList.length)]);
        activeWordList.push(word)
    }, 2000);

    // Start the counter
    setInterval(function() {
        seconds++;
    }, 1000);

    // Begin the game
    setInterval(process, 50);
}

function process() {
    // Focus on the text input
    textInput.focus();

    // Clear the screen
    clearScreen();

    // Update the words and border
    updateWords();
    drawBorder();
    drawStats();
}

function updateWords() {

    // Every x wordCounts, create a new random word
    if (addNewWord) {
        let word = new Word(wordList[randomNumber(0, wordList.length)]);
        activeWordList.push(word)
        addNewWord = false;
    }

    // For every active word
    for (let i = 0; i < activeWordList.length; i++) {
        // vars
        let w = activeWordList[i]; // active word


        // Update the x and y value
        w.y+=w.speed;
        w.x+=Math.sin(w.y/w.period);

        // Check if it has collided with the bottom
        if ((w.y + WORD_FONT_SIZE / 2) > (h - 2 *THICKNESS) + 2) {

            activeWordList[i] = new Word(wordList[randomNumber(0, wordList.length)]);

            dangerColor = "#9E3A3A";
            danger = true;
            setTimeout(function() {
                danger = false;
            }, 150);
        }

        centerText(w.x, w.y, w.text, 0, WORD_FONT_SIZE, "normal", "#59C9A5");
    }

    // Update point notes
    for (let i = 0; i < pointNotes.length; i++) {
        ctx.fillStyle = "#604767";
        ctx.fillText("+ " + pointNotes[i].points + "pts", pointNotes[i].x, pointNotes[i].y);
    }
}

// Draws the games layout
function drawBorder() {
    const BRACE = w / 4;

    ctx.fillStyle = "#59C9A5";
    ctx.fillRect(0, h - THICKNESS, w, THICKNESS);
    ctx.fillStyle = "#56E39F";
    ctx.fillRect(0, h - 2 * THICKNESS, w, THICKNESS);

    if (!danger) {
        ctx.fillStyle = "#3B2C35";
    } else {
        ctx.fillStyle = dangerColor;
    }
    ctx.fillRect(0, h - 2 * THICKNESS, BRACE, THICKNESS);
    ctx.fillRect(w - BRACE, h - 2 * THICKNESS, BRACE, THICKNESS);
}

// Draw the current game stats
function drawStats() {
    // Set the fillStyle
    ctx.fillStyle = "#3B2C35";

    let ts = formatTime(Math.round(seconds % 60));
    let tm = formatTime(Math.round(seconds / 60));

    // Draw the elapsed time
    ctx.fillText(tm + ":" + ts, w - (40 + WORD_FONT_SIZE ), h - THICKNESS / 2);

    // Draw the WPM
    ctx.fillText(getWordsPerMinute() + " WPM", w - w / 5, h - THICKNESS / 2);

    // Draw points and multiplier
    multiplier = getWordsPerMinute()/10;    // multiplier is just the wpm divided by 10
    if (multiplier < 1) { multiplier = 1; } // multiplier cannot be less than 0
    ctx.fillText(Math.round(points) + " points", w / 5, h - THICKNESS / 2);
    ctx.fillText(multiplier + "x", 40, h - THICKNESS / 2);

}

// Return the current words per minute
function getWordsPerMinute() {
    if (wordCount == 0) {
        return 0;
    } else {
        return Math.round(wordCount / (seconds / 60));
    }
}

// Formats a single digit integer to 0n
function formatTime(n){
    return n > 9 ? "" + n: "0" + n;
}

// Check if current words in input match any active words
function checkForMatch() {
    for (let i = 0; i < activeWordList.length; i++) {
        if (textInput.value == activeWordList[i].text) {
            pointNotes.push(new PointNote(activeWordList[i]));
            let addedPoints = Math.round(multiplier * activeWordList[i].text.length);
            points+=addedPoints;                                                        // add the points
            wordCount++;                                                                // record the successful word count
            activeWordList[i] = new Word(wordList[randomNumber(0, wordList.length)]);   // add a new word
            return true;
        }
    }
    return false;
}

// PointNote object
function PointNote(word) {
   this.points = Math.round(multiplier * word.text.length);
   this.x = word.x;
   this.y = word.y
}

// Word object
function Word(text) {
    this.text = text;
    this.x = randomNumber(60, w - 60);
    this.y = -5;
    // set the speed to a certain ratio of speed to game area height
    this.speed = randomNumber((h - 2 * THICKNESS) / SLOW_SPEED_DIVISOR, (h - 2 * THICKNESS) / NORMAL_SPEED_DIVISOR);

    //TODO MIN/MAX
    if(this.speed > 2 / 2) {
        this.period = randomNumber(4, 16);
    } else {
        this.period = randomNumber(16, 32);
    }
}

// Center text on screen
function centerText(x, y, text, yOffset, fontSize, fontStyle, color) {
        ctx.fillStyle = color;
        ctx.font = fontStyle + " " + fontSize + "px Arial";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center"
        ctx.fillText(text, x, y + yOffset);
        test = true;
}

// Clears the screen with a blank rectangle
function clearScreen() {
    ctx.fillStyle = "#2A1F2D";
    ctx.fillRect(0, 0, w, h);
}

// Returns a random number between the set values
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

