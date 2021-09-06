/*function add(number1, number2){
    return number1 + number2;
};

const num1 = 5;
const num2 = 2.8;

const result = add(num1, num2);

console.log(`The result is ${result}`);
*/


//In TypeScript you work with types like strings, number all the times. IMPORATNT, it is string and number, not String, Number, etc.
//The core primitives types in TypeScript are all lowercase!!.
//In TypeScript all numbers are float for default


function add(num1: number, num2: number){ //here, i am applaying a CAST directly in the parameters.
    return num1 + num2; 
};

const num1 = 5; //If they enter a String in an int, i could have an error, for that i use that cast.
const num2 = 2.8;

const result = add(+num1, +num2); //later, when i call the function, i put the + so that it can cast me.

console.log(`The result is ${result}`);

