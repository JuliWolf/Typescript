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


interface Greetable{
	name: string;
	greet(phrase: string): void;
}

class Person implements Greetable{
	name: string;

	constructor(n: string) {
		this.name = n;
	}

	greet(phrase: string) {
		console.log(phrase + " " + this.name);
	}
}