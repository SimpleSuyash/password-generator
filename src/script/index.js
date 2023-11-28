const Alphabet_length=26;
const btnPassword = document.querySelector("button");
const symbols = [..."~`!@#$%^&*()_-+={[}]|\:;\"'<,>.?/"];
const ucaseAlphabets = createUppercaseAlphabets();
const lcaseAlphabets = createLowercaseAlphabets();
const digits = createDigits();

let pwLength = 0;
let includeLower, includeUpper, includeNumeric, includeSpecial;


window.onload = function(){
    createUppercaseAlphabets();
    createLowercaseAlphabets();
    createDigits();
}

/*
returns an array of the alphabets in between A and B
two alphabets charcode is converted, and the rest of the characters are populated 
with the consecutive charcode, 
and finally all are converted to equivalent string/character 
*/
function createUppercaseAlphabets() {
    let alphabets = [];
    
    let i = "A".charCodeAt(0);//=65
    let j = "Z".charCodeAt(0);//=90
    //(i=65, j=90; i <= j; i++)
    for ( ; i <= j; i++){
        //from charcode gives a string/alphabet
        alphabets.push(String.fromCharCode(i));
    }
    console.log(alphabets);
    
    return alphabets;
   
}
function createLowercaseAlphabets(){
    let alphabets = [];
    const indexes = Array.from(Array(26)).map((value, index) => index + 97);
    alphabets = indexes.map(charcode => String.fromCharCode(charcode));
    console.log(alphabets);
    return alphabets;

}

function createDigits(){
    let digits;
    //length: 10 object, output index ,i.e 0 -9
    digits = Array.from({length: 10}, (value, index) => index);
    console.log(digits);
    return digits;
}




function showPrompts(){
    createUppercaseAlphabets("A", "Z");
    
    // pwLength = askPWLength();
    // includeLower = confirmation("lower");
    // includeUpper = confirmation("upper");
    // includeNumeric = confirmation("numeric");
    // includeSpecial = confirmation("special");

    // confirm("Password length is " + pwLength +
    //         " Lowercase: " + includeLower +
    //         " Uppercase: " + includeUpper +
    //         " Numeric: " + includeNumeric +
    //         " Special: " + includeSpecial 
    
    // );
}

function askPWLength(){
    let length = prompt(msg, 8);
    if (length == null){
        //do nothing, user cancelled
    }else if(!validateLength(length)){
        askPWLength();
    }else{
        return length;
    }
    alert("the number you entered is " + length);
    
}

function validateLength(input){
    
    let isNumber = false;
    let msg = " Please enter a whole number between 8 to 128 for password length.";

    if(input.trim().length == 0){
        //when empty value enterd
        alert("Length of the password cannot be empty. " + msg);
    }else if (isNaN(input)){
        //when entered value is not a number
        alert("The value is not a number. " + msg);
    }else if (input>128){
        //when value entered is bigger 
        alert("The number is too big. " + msg);
    }else if (input<8){
        //when entered value is smaller
        alert("The number is too small. " + msg);
    }
    else if (input % 1 !== 0){
        //when entered value is not a whole number
        alert("Invalid number. " + msg);
    }
    else{
        isNumber = true;
    }
    return isNumber;
}

function confirmation(characterType){
    return confirm("Are you sure to include " +  characterType + " characters?");
}

