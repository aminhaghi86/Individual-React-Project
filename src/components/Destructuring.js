import React from "react";

const Destructuring = () => {
	// Introduction: Spread Operator
	const items = [10, 3, 2, "Amin", "Haghi"];
	console.log(items);
	console.log(...items);

	//
	const obj1 = { firstName: "Amin", age: 36 };
	const obj2 = { lastName: "Haghi", gender: "Male" };
	const newObj = { ...obj1, ...obj2, school: "HyperIsland" };
	console.log(newObj);

	////////////////
	//
	// Destructuring

	//object
	const info = { firstName: "Amin", lastName: "Haghi", age: 36 };
	const { firstName, age } = info;
	console.log(firstName, age);

	// array
	const address = [100, "Radhuset Street", "Stockholm"];
	const [houseNo, , city] = address;
	console.log(houseNo, city);

	//Rest Operator
	const numbers = [111, 222, 333];
	const [first, ...rest] = numbers;
	console.log(first, rest);
	//
	return <div>Destructuring</div>;
};

export default Destructuring;
