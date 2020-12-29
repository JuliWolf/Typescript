function add(n1: number, n2: number): number {
	return n1 + n2;
}

function printResult(num: number): void {
	console.log('Result: ' + num);
}

// function printResult(num: number): undefined {
// 	console.log('Result: ' + num);
// 	return;
// }

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
	const result = n1 + n2;
	cb(result);
}


printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

// OK
combineValues = add;
// Error
// combineValues = printResult;

addAndHandle(10, 20, (result) => {
	console.log(result);
 });