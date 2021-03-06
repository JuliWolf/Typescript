import "reflect-metadata";
import { plainToClass } from 'class-transformer';
import { Product } from './product.model';
import _ from 'lodash';

console.log(_.shuffle([1, 2, 3]));

const products = [{ title: 'A carpet', price: 29.99 }, { title: 'A book', price: 10.99 }];

// const p1 = new Product('A Book', 12.99);
// console.log(p1.getInformation());

// const loadedProducts = products.map(prod => {
// 	return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
	console.log(prod.getInformation());
}