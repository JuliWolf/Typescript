// interface могут использоваться только для описания объектов
// abstract class могут включать в себя реализацию, интерфейсы только макет того, что должно быть в объекте или классе

// interface Person{
// 	name: string;
// 	age: number;


// 	greet(phrase: string): void;
// }

// let user1: Person;

// user1 = {
// 	name: 'Max',
// 	age: 30,
// 	greet(phrase: string) {
// 		console.log(phrase + " " + this.name);
// 	}
// };

// user1.greet('Hi there, i\'am');

interface Named {
	readonly name?: string;
	// Optional property
	outputName?: string;
}

// Interfaces can be inherited from multiple interfaces
interface Greetable extends Named{
	// name: string;
	greet(phrase: string): void;
}

class Person implements Greetable{
	name?: string;

	constructor(n?: string) {
		if(n)
			this.name = n;
	}

	greet(phrase: string) {
		if (this.name) {
			console.log(phrase + " " + this.name);
		} else {
			console.log("Hi");
		}
		
	}
}
let user1: Greetable;
user1 = new Person();

// Two ways of defining functions

// type AddFn = (a: number, b: number) => number;
interface AddFn{
	(n1: number, n2: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
	return n1 + n2;
}