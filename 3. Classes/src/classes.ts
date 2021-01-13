abstract class Department {
	static fiscalYear = 2020;

	// private readonly id: string;
	// private name: string;
	protected employees: string[] = [];

	constructor(protected readonly id: string, public name: string) {
		// this.id = id;
		// this.name = n;
	}


	static createEmployee(name: string) {
		return { name }
	}

	abstract describe(this: Department): void;

	addEmployee(employee: string) {
		// this.id = 'd2'; // error
		this.employees.push(employee);
	}

	printEmployeeInformation() {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}


class ITDepartment extends Department {
	// admins: string[];
	constructor(id: string, public admins: string[]) {
		super(id, 'IT');
	}
	
	describe() {
		console.log('IT Department - ID: ' + this.id);
	}
}

class AccountingDepartment extends Department{
	private lastReport: string;

	private static instance: AccountingDepartment;

	get mostRecentReport() {
		if (this.lastReport) {
			return this.lastReport;
		}
		throw new Error('No report found.');
	}

	set mostRecentReport(value: string) {
		if (!value) {
			throw new Error('Not valid value.');
		}

		this.addReport(value);
	}

	// Ensure that will be the only one class
	// Singleton pattern
	private constructor(id: string, private reports: string[]) {
		super(id, 'Accounting');
		this.lastReport = reports[0];
	}

	static getInstance() {
		if (!AccountingDepartment.instance) {
			this.instance = new AccountingDepartment('d2', []);
		}
		return this.instance
	}

	addEmployee(name: string) {
		if (name === 'Julia') {
			return;
		}
		this.employees.push(name)
	}

	addReport(text: string) {
		this.reports.push(text);
		this.lastReport = text;
	}

	printReports() {
		console.log(this.reports);
	}

	describe() {
		console.log('Accounting Department - ID: ' + this.id);
	}
}

// const accounting = new Department('d1', 'Accounting');
const it = new ITDepartment('d1', ['Julia']);

it.addEmployee('Max');
it.addEmployee('Many');

// Error
// accounting.employees[2] = 'Anna';

console.log(it.describe());
// console.log(it.printEmployeeInformation());

// const accountingCopy = { name: 'String', describe: accounting.describe };
// accounting.describe(); // Department: Accounting
// accountingCopy.describe(); // Department: undefined


// const accounting = new AccountingDepartment('d2', []);
// console.log(accounting.mostRecentReport);

// accounting.addReport('Something went wrong...');
// console.log(accounting.mostRecentReport);
// accounting.mostRecentReport = 'New report';
// console.log(accounting.mostRecentReport);

// console.log(accounting.printReports());


// const employee1 = Department.createEmployee('Julia');
// console.log(employee1, Department.fiscalYear);

// accounting.describe();


const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting === accounting2);
