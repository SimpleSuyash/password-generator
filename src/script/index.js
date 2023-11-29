

const symbols = [..."~`!@#$%^&*()_-+={[}]|\:;\"'<,>.?/"];
const ucaseAlphabets = populateUppercaseArray();
const lcaseAlphabets = populateLowercaseArray();
const digits = populateDigitArray();
const msg = " Please enter a whole number between 8 to 128 for password length.";

let pwLength = 8;
let includeLower = false;
let includeUpper = false;
let includeNumeric = false;
let includeSpecial = false;

let characterPool = []; //characters to generate password
let randomCharacters = []; //randomly generated characters

/* 
On window load, the first thing it will do is populate/create
lists of uppercase and lowercase alphabets and numbers
symbols are populated using Spread operator.
For simplicity sake, all other lists can be similarly
populated using Spread operator.
Just for learning purposes, each list is populated differently
*/

window.onload = function () {
    populateUppercaseArray();
    populateLowercaseArray();
    populateDigitArray();
                        // console.log(ucaseAlphabets.toString());
                        // console.log(lcaseAlphabets.toString());
                        // console.log(digits.toString());
                        // console.log(symbols.toString());
}

/*
returns an array of the alphabets in between A and B
two alphabets charcode is converted, and the rest of the characters are populated 
with the consecutive charcode, 
and finally all are converted to equivalent string/character 
*/
function populateUppercaseArray() {
    let alphabets = [];

    let i = "A".charCodeAt(0);//=65
    let j = "Z".charCodeAt(0);//=90
    //(i=65, j=90; i <= j; i++)
    for (; i <= j; i++) {
        //from charcode gives a string/alphabet
        alphabets.push(String.fromCharCode(i));
    }
    return alphabets;
}
/*
from an array with size of 26, a new numeric array is created using 
    map function which adds 97 to each index.
    97 is charcode of "a", 98 of "b" so on.
From that numeric array, another array is created with map function
*/
function populateLowercaseArray() {
    let alphabets = [];
    let indexes = Array.from(Array(26)).map((value, index) => index + 97);
    alphabets = indexes.map(charcode => String.fromCharCode(charcode));
    return alphabets;
}

function populateDigitArray() {
    let digits;
    //length: 10 object, output index ,i.e 0 -9
    digits = Array.from({ length: 10 }, (value, index) => index);
    return digits;
}

function generatePassword() {
    /*before generating a new password
    make sure to reset all the user inputs from previous interaction
    */

    pwLength = 8;
    includeLower = false;
    includeUpper = false;
    includeNumeric = false;
    includeSpecial = false;

    characterPool = []; //characters to generate password
    randomCharacters = []; //randomly generated characters

    //show the prompts
    showPrompts();
    if (pwLength != undefined) {
        //based on th user response, create the pool of eligible characters
        createCharacterPool();

        //create random characters  out of character pool
        createRandomCharacters();

        //write the generated password to the text input to display to the users
        writeThePassword();
    }

}



/* 
activates all the prompts
so user input can be captured
*/
function showPrompts() {
    pwLength = confirmationPWLength();
    /*
    proceed only if user enter the password length and pressed ok
    if pressed cancel, don't proceed
    */

    if (pwLength != undefined) {
        includeLower = confirmation("lower");
        includeUpper = confirmation("upper");
        includeNumeric = confirmation("numeric");
        includeSpecial = confirmation("special");
        //when user chose to include none of the character types
        if (!(includeLower || includeUpper || includeNumeric || includeSpecial)) {
            alert("You have to choose at least one type of character to generate the password. Please try again.");
            showPrompts();
        }
    }

}


/*
gets the desired length of password from user
min 8, max 128 characters long
*/
function confirmationPWLength() {
    let length = prompt(msg, 8);
    if (length == null) {
        //do nothing, user cancelled
    } else if (!validateLength(length)) {
        //validation failed, ask for value again
        confirmationPWLength();
    } else {
        return length;
    }


}

/*
user input for password length is validated
*/
function validateLength(input) {
    let isNumber = false;
    if (input.trim().length == 0) {
        //when empty value enterd
        alert("Length of the password cannot be empty. " + msg);
    } else if (isNaN(input)) {
        //when entered value is not a number
        alert("The value is not a number. " + msg);
    } else if (input > 128) {
        //when value entered is bigger 
        alert("The number is too big. " + msg);
    } else if (input < 8) {
        //when entered value is smaller
        alert("The number is too small. " + msg);
    }
    else if (input % 1 !== 0) {
        //when entered value is not a whole number
        alert("Invalid number. " + msg);
    }
    else {
        isNumber = true;
    }
    return isNumber;
}

/*
displays confirm prompt
*/
function confirmation(characterType) {
    return confirm("Are you sure to include " + characterType + " characters?");
}

function createCharacterPool() {
                            // console.log("Creating eligible characters for the password");
    if (includeLower) { //user chose to include lowercase
        characterPool.push(...lcaseAlphabets);
    }
    if (includeUpper) {//user chose to include uppercase
        characterPool.push(...ucaseAlphabets);
    }
    if (includeNumeric) {//user chose to include numbers
        characterPool.push(...digits);
    }
    if (includeSpecial) {//user chose to include symbols
        characterPool.push(...symbols);
    }
                            // console.log("eligible characters are put in a list");
                            // console.log(characterPool.length + " long of pool");
}

function createRandomCharacters() {
                             //console.log("creating a random character from the types user chose");
    let counter = 0;
    let aRandomChar = " ";
    while (counter < pwLength) {

        //choose a random character from the characterPool array (i.e. available characters)
        aRandomChar = characterPool[Math.floor(Math.random() * characterPool.length)];
                            // console.log("A random char is: " + aRandomChar);
        randomCharacters.push(aRandomChar);
        counter++;
    }
                            //console.log("random character is created " + counter + " times");
}
/*
writes the generated password to textbox so users can see
*/
function writeThePassword() {
    const textbox = document.getElementById("password");
    textbox.value = randomCharacters.join("");
                            // console.log("The PW is " + randomCharacters.join(""));
}

