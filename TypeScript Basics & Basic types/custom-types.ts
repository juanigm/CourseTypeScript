//CUSTOM TYPES

type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text"

function combine(input1: Combinable, input2: Combinable | Combinable, resultConversion: ConversionDescriptor ){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === "as-number"){
        result = +input1 + +input2;
    }else{
        result = input1.toString() + input2.toString();
    }
    return result;

//    if(resultConversion === "as-numer"){
//        return +result;
//    }else{
//        return result.toString();
//    }
};

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringNames = combine("30", "36", "as-text");
console.log(combinedStringNames);

const combinedNames = combine("Max", "Ana", "as-text");
console.log(combinedNames);