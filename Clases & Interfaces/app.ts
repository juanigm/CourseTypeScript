//CLASSES
//readonly: asegura que si intentas escribir en esta propiedad después de que fue inicializada, falla.
        //class Department {
abstract class Department {
    static fiscalYear = 2021; //Static variable, cannot acces to this variable in the same class, i have to call this propertie whit the name class. For example: Department.fiscarYear. This.fiscalYear not work.

    //private readonly id: number;            //The id only exist into this class, no one can access id outside of this class
    //public name: string;                //Any can acces name outside of this class.      
    protected employees: string[] = [];   //Any extension class can acces to this property.      
                                                

    constructor(protected readonly id: number, public name : string,) { //Or we can incialize the attributes in the constructor, whit their encapsulations.
        this.id = id;
        this.name = name;
        //console.log(Department.fiscalYear); //I can call this variable with same name of class. Not with this.variable.
    }

    static createEmployee(name: string){
        return {name: name};
    }

    abstract describe(this: Department): void;      //Abstract Method.
    // console.log(`Department (${this.id}: ${this.name})`);

    addEmployee (employee: string){
        //this.id = 'id2';     //Error for the readonly, can´t be modificated after incializated.
        this.employees.push(employee); //Can acces into employees because is protected
    }

    printEmployeeinformation (){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}



//INHERITANCE

class ITDepartment extends Department{
    admins: string[];

    constructor(id: number, admins: string[]){
        super(id, 'IT');                        //Para sobreescritura de metodos.
        this.admins = admins;
    }

    describe(){
        console.log("IT Department - ID: "+ this.id);
    }
}





//GETTERS & SETTERS



class AccountingDepartment extends Department{
    private lastReport: string;

    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport; 
        }
        throw new Error('No report found');      
    }

    set mostRecentReport(text: string){
        if(!text){
            throw new Error("Please pass in a valid value");
        }
        this.addReport(text);
    }

    constructor(id: number, private reports: string[]){
        super(id, 'Accounting');
        this.lastReport = reports[0];                        //Para sobreescritura de metodos.
    }

    describe() {
        console.log("Accounting departmend ID: "+ this.id);
    }

    addEmployee(name: string){
        if(name === "Max"){
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string){
        this.reports.push(text);
        this.lastReport = text;
    }
}











const accounting = new AccountingDepartment(1, []);


//accounting.mostRecentReport = "Set Report";
//accounting.addReport("Add report")

accounting.describe();

//console.log(accounting.mostRecentReport); //Gets & Sets behave like a property;

accounting.addEmployee("Jhon");
accounting.addEmployee("Peter");

accounting.describe();
accounting.printEmployeeinformation();

console.log(accounting);
