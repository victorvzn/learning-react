import { useState } from "react";
import "./App.css";
import ListOfUsers from "./components/ListOfUsers";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1 className="mb-2">
				Proyecto con Redux + Rome linter + Tremor components + Typescript
			</h1>

			<ListOfUsers />
		</>
	);
}

export default App;
