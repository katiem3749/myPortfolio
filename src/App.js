import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.scss";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import AlbumMgmtModal from "./components/Projects/AlbumMgmtModal";
import RealTimeChatModal from "./components/Projects/RealTimeChatModal";
import { Toaster } from "react-hot-toast";
function App() {
	return (
		<div>
			<Toaster position="top-center" />
			<Header />
			<Hero />
			<main id="main">
				<Experience />
				<AlbumMgmtModal />
				<RealTimeChatModal />
				<Portfolio />
				<Footer />
			</main>
		</div>
	);
}

export default App;
