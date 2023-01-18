import React, { useState } from "react";

const Counter = () => {
	const [counter, setCounter] = useState(0);
	return (
		<div className="counter-container">
			<h6>counter</h6>
			<p>current count {counter}</p>
			<button onClick={() => setCounter((prev) => prev + 1)}>increament</button>
		</div>
	);
};

export default Counter;
