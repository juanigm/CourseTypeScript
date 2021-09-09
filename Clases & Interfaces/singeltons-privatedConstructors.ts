
abstract class Department {
    static fiscalYear = 2021; 
 
    protected employees: string[] = [];   
                                                

    constructor(protected readonly id: number, public name : string,) { 
        this.id = id;
        this.name = name;
        
    }

    static createEmployee(name: string){
        return {name: name};
    }

    abstract describe(this: Department): void;    

    addEmployee (employee: string){

        this.employees.push(employee); 
    }

    printEmployeeinformation (){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}


class ITDepartment extends Department{
    admins: string[];

    constructor(id: number, admins: string[]){
        super(id, 'IT');                       
        this.admins = admins;
    }

    describe(){
        console.log("IT Department - ID: "+ this.id);
    }
}





//PRIVATED CONSTRUCTORS & SINGLETON






class AccountingDepartment extends Department{
    private lastReport: string;
    private static instance: AccountingDepartment;

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

    private constructor(id: number, private reports: string[]){
        super(id, 'Accounting');
        this.lastReport = reports[0];                        //Poner el constructor en privado hace que pueda instanciar un único objeto de esta clase.
    }

    static getInstance(){
        if(AccountingDepartment.instance){
            return this.instance;
        }
        this.instance = new AccountingDepartment(10, []);
        return this.instance;
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











//const accounting = new AccountingDepartment(1, []);

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);

//accounting.mostRecentReport = "Set Report";
//accounting.addReport("Add report")

accounting.describe();

//console.log(accounting.mostRecentReport); //Gets & Sets behave like a property;

accounting.addEmployee("Jhon");
accounting.addEmployee("Peter");

accounting.describe();
accounting.printEmployeeinformation();

console.log(accounting);
