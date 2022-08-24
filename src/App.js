import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.scss";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import AlbumMgmtModal from "./components/Projects/AlbumMgmtModal";
import RealTimeChatModal from "./components/Projects/RealTimeChatModal";

function App() {
	return (
		<div>
			<Header />
			<Hero />
			<main id="main">
				<Experience />

				<div>
					<AlbumMgmtModal />
					<RealTimeChatModal />
				</div>
				<Portfolio />
			</main>
			<Footer />
		</div>
	);
}

export default App;
