interface Named{
    readonly name: string;
}

interface Greetable extends Named{
    readonly name: string; // The only encapsulation i can add is readonly, public and private don´t work.
    greet(pharse: string): void;
}


class Person implements Greetable{
     name: string;
     age: number = 30;

    constructor(n: string){
        this.name = n;
    }

    greet(pharse: string){
        console.log(pharse + " " + this.name);
    }
}


let user1 = new Person("Jhon");

user1.greet("Hi, Im");