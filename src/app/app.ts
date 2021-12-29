import Car from "../classes/Car.js";
import Department from "../classes/Department.js";
import Engine from "../classes/Engine.js";
import ITDepartment from "../classes/ITDepartment.js";
import Refactor from "../classes/Refactor.js";
import { nsCar, nsEngine } from "../enum.js";

// Create Output 
const output = document.createElement('div');
output.style.cssText = 'background: #EEE; border: 1px solid #DDD; padding: 1em; margin: 1em';
document.getElementsByTagName('body')[0].appendChild(output);

// Create Engine
const myEngine = new Engine(Refactor.val(nsEngine.enumType,nsEngine.enumType.Elktroantrieb), 300);
console.log(myEngine);

// Create Car
const myCar = new Car(Refactor.val(nsCar.enumBrand, nsCar.enumBrand.Vokswagen) ,'Golf',myEngine);
console.log(myCar);

// Output myCar

output.innerHTML = `Mein Auto ist ein ${myCar._brand} ${myCar._model} und hat ${myCar._engine._horsepower} PS!`;
console.log(typeof(myCar));

for (const [key, value] of Object.entries(myCar)) {
    if (key!='_engine') {
        console.log(`${key}: ${value}`);
    }
    if (key =='_engine') {
        for (const [key, value] of Object.entries(myCar._engine)) {
            console.log(`${key}: ${value}`);
        }
    }
}


// Create Department

const itdepartment = new ITDepartment('IT Department', 1, []);
itdepartment.addAdmin('Max Mustermann');
itdepartment.DepartmentID = 33;
console.log(itdepartment);

console.log('test');