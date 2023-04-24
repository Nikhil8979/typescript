abstract class Department {
  //   private name: string;
  //   private id: string;
  protected employees: string[] = [];
  constructor(private name: string, private id: string) {}
  abstract describe(this: Department): void;

  addEmployee(name: string) {
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
  constructor(id: string, private admins: string[]) {
    super("It", id);
  }
  describe(this: Department): void {
    console.log("it department");
  }
}

class AccountDepartment extends Department {
  private lastReport: string = "";
  constructor(id: string, private report: string) {
    super("Bittu", id);
  }

  describe(this: Department): void {
    console.log("account department");
  }

  getRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  setReport(value: string) {
    if (!value) throw new Error("Please enter a value.");
    this.lastReport = value;
  }
  static createEmployee(name: string) {
    return { name: name };
  }
  addEmployee(name: string): void {
    if (name === "Anu") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
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
