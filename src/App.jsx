import "./App.css";
import { Header } from "./Component/Header";
import { Body } from "./Component/Body";
import { Footer } from "./Component/Footer";

function App() {
	return (
		<div className="container mt-3">
			<div>
				<Header />
			</div>
			<div>
				<Body />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
