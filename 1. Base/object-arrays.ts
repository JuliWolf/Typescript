// const person: {
// 	name: string;
// 	age: number;
// 	hobbies: string[];
// 	role: [number, string];
// } = {
// 	name: "Julia",
// 	age: 24,
// 	hobbies: ["Sports", "Cooking"],
// 	role: [2, 'author']
// };

// Wrong
// person.role[0] = "admin";
// Allowed 2 elements: first - number, second - string


// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;


enum Role {
	ADMIN = 5, READ_ONLY = 100, AUTHOR = 200
};

const person = {
	name: "Julia",
	age: 24,
	hobbies: ["Sports", "Cooking"],
	role: Role.ADMIN
};

if (person.role === Role.ADMIN) {
	console.log('is admin');
}

console.log(person);