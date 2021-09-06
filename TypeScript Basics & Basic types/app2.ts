//Understanding types of TypeScript
//Class 16.


function add(n1: number, n2: number, showResult: boolean, pharse: string){
    if(showResult){
        console.log(pharse + (n1 + n2));
    }else{
        return n1 + n2;
    }
};

const num3 = 5;
const num4 = 2.8;
const printResult = true;
const resultPharse = "The result is: ";

add(num3, num4, printResult, resultPharse);


