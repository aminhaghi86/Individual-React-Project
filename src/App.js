import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import GithubUsers from "./components/GithubUsers";
import Colors from "./components/Colors";
import MemoHook from "./components/MemoHook";
function App() {
	const [showCounter, setShowCounter] = useState(false);
	return (
		<>
			<div className="App">
				<h3>React Componnent LifeCycle</h3>
				<button onClick={() => setShowCounter(!showCounter)}>
					{showCounter ? "hide counter" : "show counter"}
				</button>
				{showCounter && <Counter />}
				<GithubUsers />
				<Colors />
				<MemoHook />
			</div>
		</>
	);
}

export default App;
