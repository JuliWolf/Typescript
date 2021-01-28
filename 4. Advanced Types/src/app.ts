// type Admin = {
// 	name: string;
// 	privileges: string[];
// };

// type Employee = {
// 	name: string;
// 	startDate: Date;
// };

// // --------------------intersection types--------------------
// type ElevatedEmployee = Admin & Employee;


// interface Admin {
// 	name: string;
// 	privileges: string[];
// };

// interface Employee {
// 	name: string;
// 	startDate: Date;
// };
// interface ElevatedEmployee extends Employee, Admin {}

// const e1: ElevatedEmployee = {
// 	name: 'Julia',
// 	privileges: ['create-server'],
// 	startDate: new Date()
// };

// type Combinable = string | number;
// type Numeric = number | boolean;

// // intersection types
// type Universal = Combinable & Numeric;



// --------------------Type Guards--------------------
// function add(a: Combinable, b: Combinable) {
// 	if (typeof a === 'string' || typeof b === 'string') {
// 		return a.toString() + b.toString();
// 	}
// 	return a + b;
// }


// interface Admin {
// 	name: string;
// 	privileges: string[];
// };

// interface Employee {
// 	name: string;
// 	startDate: Date;
// };

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
// 	console.log('Name: ' + emp.name);
// 	if('privileges' in emp)
// 		console.log('Privileges: ' + emp.privileges);
	
// 	if ('startDate' in emp)
// 		console.log('StartDate: ' + emp.startDate)
// }

// printEmployeeInformation({ name: 'Many', startDate: new Date() });

// class Car {
// 	drive() {
// 		console.log('Driving...')
// 	}
// }

// class Truck {
// 	drive() {
// 		console.log('Driving a truck...')
// 	}

// 	loadCargo(amount: number) {
// 		console.log('Loading cargo...' + amount)
// 	}
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
// 	vehicle.drive();

// 	// Only for classes
// 	if (vehicle instanceof Truck) {
// 		vehicle.loadCargo(1000);
// 	}
// }

// useVehicle(v1);
// useVehicle(v2);


// --------------------Discriminating Unions--------------------
// interface Bird {
// 	type: 'bird';
// 	flyingSpeed: number;
// }

// interface Horse {
// 	type: 'horse';
// 	runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
// 	let speed;
// 	switch (animal.type) {
// 		case 'bird': speed = animal.flyingSpeed; break;
// 		case 'horse': speed = animal.runningSpeed; break;
		
// 	}

// 	console.log('Moving with speed: ' + speed);
	
// }

// moveAnimal({ type: 'bird', flyingSpeed: 100 });


// // --------------------Type Casting--------------------
// const paragraph = document.querySelector('p'); // HTMLParagraphElement
// const paragraph1 = document.getElementById('message-output'); // HTMLElement

// // const userInputElement = <HTMLInputElement>document.getElementById('user-input')!; // HTMLElement
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement; // HTMLElement

// userInputElement.value = 'Hi there!';


// --------------------Index Properties--------------------
// interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character!' }
// 	[prop: string]: string;
// }

// const errorBag: ErrorContainer = {
// 	email: 'Not a valid email!',
// 	password: 'Not a valid password',
// };


// // --------------------Function Overloads--------------------
// type Combinable = string | number;

// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: Combinable, b: Combinable) {
// 	if (typeof a === 'string' || typeof b === 'string') {
// 		return a.toString() + b.toString();
// 	}
// 	return a + b;
// }

// const result = add('Julia', 'Wolf');
// result.split(" ")


// --------------------Optional Chaining--------------------
// const fetchedUserData = {
// 	id: 'u1',
// 	name: 'Julia',
// 	job: { title: 'Ceo', description: 'my own company'}
// }

// console.log(fetchedUserData?.job?.title);


// --------------------Nullish Coalescing--------------------
const userInput = '';

// only if null or undefined
const storedData = userInput ?? 'DEFAULT';

console.log(storedData)