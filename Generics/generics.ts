//Existe en TS 
//El tipo generico es un tipo que está conectado con algún otro tipo y es felxible


const names: Array<string> = []; //I define what type of variables is going to store

/*
function merge(objA: object,  objB: object){
    return Object.assign(objA, objB);
}
const mergObj = merge({anme: 'Max'}, {age: 30});
mergObj.name; //No me deja porque TS no reconoce el tipo.
*/


/*function merge<T, U>(objA: T,  objB: U){
    return Object.assign(objA, objB);
}
const mergObj = merge({name: 'Max', hobbies: 'Sports'}, {age: 30});//Poniendo esos tipos genericos, le puedo pasar cualquier tipo de objeto
const mergObj2 = merge({anme: 'Max'}, {age: 30}); 

console.log(merge({anme: 'Max', hobbies: 'Sports'}, {age: 30}));
*/



//CONSTRAINS


function merge<T extends object, U extends object>(objA: T,  objB: U){ //Le estoy restrigniendo que T es de tipo objecto. Y así puedo hacer con todos los tipos, es muy flexible.
    return Object.assign(objA, objB);
}
const mergObj = merge({name: 'Max', hobbies: 'Sports'}, {age: 30});//Poniendo esos tipos genericos, le puedo pasar cualquier tipo de objeto
const mergObj2 = merge({anme: 'Max'}, {age: 30}); 


//More generics functions


interface Lengthy{
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T){
    let descriptionText = 'Got no value';
    if(element.length === 1){
        descriptionText = 'Got 1 element'
    } else if(element.length > 1){
        descriptionText = 'Got ' + element.length + ' elements';
    }
    
    return [element, descriptionText];
}


console.log(countAndDescribe([1, 'ads', 'asd']));




//KEYOF CONSTRAIN

function extractAndConvert<T extends object, U extends keyof T> (obj: T, key: U) { //El primer parametro puede recibir cualquier tipo de objeto. 
    return 'Value: ' +  obj[key];                                                 //Y el segundo parametro puede recibir cualquier tipo de clave de ESE MISMO objeto      
} 

console.log(extractAndConvert({name: 'Max'}, 'name'))



/*
class Storage {
    private data =[];

    addItem(item){
        this.data = item;
    }

    removeItem(item){
        this.date = item;
    }

    getItems(){
        return [...this.data];
    }
}
*/

class DataStorage<T extends string | number | boolean | object> {
    private data: T[] =[];

    addItem(item){
        this.data.push(item); 
    }

    removeItem(item){
        if(this.data.indexOf(item) === -1){
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems(){
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Jhon');

console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);

console.log(numberStorage.getItems());

const objectStorage = new DataStorage<object>();
objectStorage.addItem({name:'Jhon', age: 20});
objectStorage.addItem({name:'Peter', age: 30});
objectStorage.removeItem({name:'Peter', age: 30});

console.log(objectStorage.getItems());

