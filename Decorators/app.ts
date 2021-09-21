//This decorators not execute in run time, run before execution

function Logger(logString: string){
    return function(constructor: Function){
        console.log("Loggin...");
        console.log(constructor);
    }
}

function whithTemplate(template: string, hookId: string){
    console.log("TEMPLATE FACTORY");
    return function(constructor: any){
        console.log("Rendering template");
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if(hookEl){
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name
        }
        return class extends constructor {}; 
    }
}

@Logger('LOGGIN - PERSON')
class Person{
    name ="Max";

    constructor(){
        console.log("Creating person object...");
    }
}

const pers = new Person();

console.log(pers);

function Log(target: any, propertyName: string | symbol){
    console.log("Property decorator!");
    console.log(target, propertyName);
}

function log2(target: any, name: string | symbol, descriptor: PropertyDescriptor){
    console.log("Accessor decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function log3(target: any, name: string | symbol, descriptor: PropertyDescriptor){
    console.log("Method decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function log4(target: any, name: string | symbol, position: number){
    console.log("Method decorator!");
    console.log(target);
    console.log(name);
    console.log(position);
}



class Producto{
    @Log
    tittle: string;
    private _price: number;

    constructor(t: string, p: number){
        this.tittle = t;
        this._price = p;
    }
    @log2
    set price(val: number){
        if(val > 0){
            this._price = val;
        }
        else{
            throw new Error("Please, enter positive number");
        }
    }

    getPriceWithTax(@log4 tax: number){
        return this._price * (1+tax);
    }
}

//Creating autobind Decorator

function autoBind(target: any, methodName: string, descriptor: PropertyDescriptor){
    const originalMehtod = descriptor.value;
}


class Printer {
    message = 'This works!';

    showMessage() {
        console.log(this.message);
    }
}
const p = new Printer();

const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage.bind(p));
//Comments