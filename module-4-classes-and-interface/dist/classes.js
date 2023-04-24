"use strict";
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        //   private name: string;
        //   private id: string;
        this.employees = [];
    }
    addEmployee(name) {
        this.employees.push(name);
    }
    showEmployeeInformation() {
        console.log(this.employees.length, "--- length --");
        console.log(this.employees);
    }
}
// const department = new Department("Nikhil Singh", "A1");
// const departmentCopy = { name: "Pragya Yadav", describe: department.describe };
// departmentCopy.describe();
// department.describe();
// department.addEmployee("Aman");
// department.addEmployee("Vishal");
// department.showEmployeeInformation();
class ItDepartment extends Department {
    constructor(id, admins) {
        super("It", id);
        this.admins = admins;
    }
    describe() {
        console.log("it department");
    }
}
class AccountDepartment extends Department {
    constructor(id, report) {
        super("Bittu", id);
        this.report = report;
        this.lastReport = "";
    }
    describe() {
        console.log("account department");
    }
    getRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");
    }
    setReport(value) {
        if (!value)
            throw new Error("Please enter a value.");
        this.lastReport = value;
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(name) {
        if (name === "Anu") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.report = text;
        // this.lastReport = text;
    }
    showReport() {
        console.log(this.report, "-- report ----");
    }
}
const it = new ItDepartment("1", ["Vishal"]);
// console.log(it, "-- it --");
console.log(AccountDepartment.createEmployee("Nikhil"));
const report = new AccountDepartment("2", "Ok");
report.setReport("");
console.log(report.getRecentReport());
// report.addReport("Something went wrong...");
// report.showReport();
// report.addEmployee("Akshu");
// report.addEmployee("Anu");
// report.showEmployeeInformation();
