export default class Department {
    
    get DepartmentName(): string {
        return this._DepartmentName;
    }
    set DepartmentName(value: string) {
        this._DepartmentName = value;
    }

    constructor(private _DepartmentName: string, protected ID:number) {

    }
}