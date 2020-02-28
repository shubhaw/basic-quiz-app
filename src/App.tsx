import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Main";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
	return (
		<>
        <Sidebar />
			<Layout>
				<Main />
			</Layout>
		</>
	);
}

export default App;
