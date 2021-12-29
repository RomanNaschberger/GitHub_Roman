export default class Department {
    constructor(_DepartmentName, ID) {
        this._DepartmentName = _DepartmentName;
        this.ID = ID;
    }
    get DepartmentName() {
        return this._DepartmentName;
    }
    set DepartmentName(value) {
        this._DepartmentName = value;
    }
}
//# sourceMappingURL=Department.js.map