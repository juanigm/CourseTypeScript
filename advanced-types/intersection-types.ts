// Intersection types allow us to combine our types

type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;                                   //I can do this too applying interfaces.
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'max',
    privileges: ['create server'],
    startDate: new Date()
};


type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

//

class Car{
    drive(){
        console.log("Driving a car..");
    }
}

class Truck{
    drive(){
        console.log("Driving a truck...");
    }
    loadCargo(amount: number){
        console.log("Loading cargo..." + amount);
    }
}

type Vehicle =  Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    if(vehicle instanceof Truck){
        vehicle.loadCargo(1000);
    }
}


//DISCRIMINATED UNION
//Is a pattern can be use when work with two types of union that facilitates
//the type implementation of protectors

//En cada interface defino un type para tener una propiedad comun en cada objeto
//relacionada con la union

interface Bird{
    type: 'Bird';
    flyingSpeed: number;
}

interface Horse{
    type: 'Horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){
    let speed;
    switch(animal.type){
        case 'Bird':
            speed = animal.flyingSpeed;
            break;
        case 'Horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Mooving at speed: ' + speed);
}

//const userInputElement = document.getElementById('user.iput') ! as HTMLInputElement;
//Alternative of exclamation mark !
const userInputElement = document.getElementById('user-input');
if(userInputElement){    //Si no es null
    (userInputElement as HTMLInputElement).value = 'Hi There!';
} 


//INDEX PROPERTIES

interface errorCountainer {
    [prop: number]: string;             //Defino que la clave y el valor van a ser de tipo string.
}

const errorBag: errorCountainer = {
    1: 'Not valid email',
    2: 'Not valid username'
    //passw: 'Not valid passw'      i can´t do this beacuse the type of key is number
};


const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: {title: 'CEO', description: 'My own company'}
};

console.log(fetchedUserData?.job?.title);  //Lo que hace el signo de interrogación es verificar si la propiedad anterior esta vacía, para poder evitar errores en tiempod e ejecuion.



//NULLISH COALESCING

const userInput = 'data';

const storedData = userInput ?? 'DEFAULT'; //Lo que hace el ?? acá que si el primer valor es nulo, le asigno el segundo valor.

console.log(storedData); 