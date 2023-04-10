import { Title } from "@tremor/react";
import "./App.css";
import { CreateNewUser } from "./components/CreateNewUser";
import ListOfUsers from "./components/ListOfUsers";

function App() {
	return (
		<>
			<Title className="mb-2">
				Proyecto con Redux + Rome linter + Tremor components + Typescript
			</Title>

			<ListOfUsers />

			<CreateNewUser />
		</>
	);
}

export default App;
