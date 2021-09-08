// NEVER TYPE

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Juani";


if(typeof userInput === 'string'){
    userName = userInput;
}

//This function never produce a value, it does not return anything
function generateError(message: string, code: number): never{
    throw{message: message, errorCode: code};

}
generateError("Page not found", 404);
