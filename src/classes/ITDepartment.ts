import Department from "./Department.js";

export default class ITDepartment extends Department {

    private admins: string[] = [];
    
    set DepartmentID(i:number) {
        this.ID = i ;
    }

    constructor(DepartmentName: string, ID: number, admins:string[]) {
        super(DepartmentName, ID);      
    }



    addAdmin(admin:string) {
        this.admins.push(admin);
    }
}