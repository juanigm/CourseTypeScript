//Code goes here!

//VARIABLES

const userName = 'Max'; //The variable not be a changed.

let age = 30; //The variable can be a changed.

var result = 0; //This varibale can be manipulated globally.

function sum(num1: number, num2: number){
    result = num1 + num2;
}

console.log(result);






//ARROW FUNCTIONS

const add = (a: number, b:number) => {
    return a +b;
};
console.log(add(1,2));

const add2 = (a: number, b:number) => a+b;
console.log(add2(1,2));

//const printOut = (output: string | number) => console.log(output);

/*onst button = document.createElement('button');

if(button){
    button.addEventListener('click', event => console.log(event));
}


*/

//DEFAULT FUNCTION IN PARAMETERS

//I can define a default value on any parameter.




//THE SPREED OPERATOR


const hobbies = ['Sports', 'Cooking'];

const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

activeHobbies.forEach(function(hobbie){
    console.log(hobbie);
});




//REST PARAMETERS

const add3 = (...numbers: number[]) => {
    return numbers.reduce((numResult, num) => {
        return numResult + num;
    }, 0);
};

const addNumbers = add3(5, 6, 7, 8);

console.log(addNumbers);





//ARRAY & OBJECT DESTRUCTURING

//const hobby1 = hobbies[0];
//const hobby2 = hobbies[1];

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const person = {
    firstName: 'max',
    age1: 22
};

const { firstName: userName2, age1 } = person;

console.log(userName, age, person);