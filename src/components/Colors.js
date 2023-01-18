import React from "react";
import { useState, useEffect } from "react";
const Colors = () => {
	const [data, setData] = useState([]);
	const [name, setName] = useState("");
	const [color, setColor] = useState("#FFFFFF");
	useEffect(() => {
		console.log("rerendered");
	}, [data]);
	const handleSubmit = (e) => {
		e.preventDefault();
		setData([
			...data,
			{
				name: name,
				color: color,
			},
		]);

		setName("");
		setColor("#FFFFFF");
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					value={name}
					type="text"
					placeholder="your name"
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					value={color}
					type="color"
					onChange={(e) => setColor(e.target.value)}
				/>

				<button type={"submit"}>submit</button>
			</form>

			{
				<div>
					{data.length > 0 ? (
						data.map((data, i) => (
							<div key={i}>
								<p
									style={{
										color: data.color,
									}}
								>
									{data.name}
								</p>
								<p
									style={{
										color: data.color,
									}}
								>
									{data.color}
								</p>
							</div>
						))
					) : (
						<h1>... data is loading</h1>
					)}
				</div>
			}
		</div>
	);
};

export default Colors;
