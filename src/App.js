import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.scss";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";

function App() {
	return (
		<div>
			<Header />
			<Hero />
			<main id="main">
				<Experience />
				<Portfolio />
			</main>
		</div>
	);
}

export default App;
