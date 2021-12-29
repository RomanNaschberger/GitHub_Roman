import Department from "./Department.js";
export default class ITDepartment extends Department {
    constructor(DepartmentName, ID, admins) {
        super(DepartmentName, ID);
        this.admins = [];
    }
    set DepartmentID(i) {
        this.ID = i;
    }
    addAdmin(admin) {
        this.admins.push(admin);
    }
}
//# sourceMappingURL=ITDepartment.js.map