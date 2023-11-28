const btnPassword = document.querySelector("button");
let pwLength = 0;
let includeLower, includeUpper, includeNumeric, includeSpecial;
let msg = " Please enter a whole number between 8 to 128 for password length."

function showPrompts(){
    pwLength = askPWLength();
    includeLower = confirmation("lower");
    includeUpper = confirmation("upper");
    includeNumeric = confirmation("numeric");
    includeSpecial = confirmation("special");

    confirm("Password length is " + pwLength +
            " Lowercase: " + includeLower +
            " Uppercase: " + includeUpper +
            " Numeric: " + includeNumeric +
            " Special: " + includeSpecial 
    
    );
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

