// const names: Array<string> = []; //string[]

// const promise: Promise<number> = new Promise((resolve) => {
// 	setTimeout(() => { 
// 		resolve(1);
// 	}, 2000)
// });

// promise.then(data => {
// 	data.split(' ');
// });


// --------------Create Generic Function--------------
// function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
// 	return Object.assign(objA, objB);
// }

// const mergedObj = merge({ name: 'Julia', hobbies: ['Sport'] }, { age: 25 });
// const mergedObj2 = merge<{ name: string }, {age: number}>({ name: 'Julia'}, { age: 25 });
// console.log(mergedObj.name);


// interface Lengthy{
// 	length: number;
// }

// function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
// 	let descriptionText = 'Got no value';
// 	if (element.length === 1) {
// 		descriptionText = 'Got 1 element'
// 	} else if (element.length > 1) {
// 		descriptionText = 'Got ' + element.length + ' elements'
// 	}
// 	return [element, descriptionText];
// }

// console.log(countAndDescribe('Hi there'));


// --------------Constraint--------------
// function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
// 	return obj[key];
// }

// console.log(extractAndConvert({ name: 'Julia' }, 'name'));


// // --------------Generic Classes--------------
// class DataStorage<T extends string | number | boolean> {
// 	private data: T[] = [];

// 	addItem(item: T) {
// 		this.data.push(item);
// 	}

// 	removeItem(item: T) {
// 		if (this.data.indexOf(item) === -1) {
// 			return;
// 		}
// 		this.data.splice(this.data.indexOf(item), 1);
// 	}

// 	getItems() {
// 		return [...this.data]
// 	}
// }

// const textStorage = new DataStorage<string>();
// textStorage.addItem('Julia');
// textStorage.addItem('Wolf');
// textStorage.removeItem('Wolf');
// textStorage.getItems();

// const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: 'Julia' });
// objStorage.addItem({ name: 'Wolf' });
// objStorage.removeItem({ name: 'Wolf' });
// console.log(objStorage.getItems());


// --------------Utility Types--------------
interface CourseGoal{
	title: string;
	description: string;
	completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
	let courseGoal: Partial<CourseGoal> = {};
	courseGoal.title = title;
	courseGoal.description = description;
	courseGoal.completeUntil = date;
	return courseGoal as CourseGoal;
}

const names:Readonly<string[]> = ['Julia', 'Sport'];
names.push('Wolf'); //error