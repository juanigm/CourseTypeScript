//We do not know what type of variable they can save, 
//They can save any value in this varaible, we don´t know.

//UNKNOWN TYPE

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Juani";

//userName = userInput; First i have to validate if userInput contains a string value

if(typeof userInput === 'string'){
    userName = userInput;
}


