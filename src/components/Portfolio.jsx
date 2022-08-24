import { motion } from "framer-motion";
import AmazonClone from "./Projects/AmazonClone";
import RealTimeChat from "./Projects/RealTimeChat";
import AlbumMgmtGraphql from "./Projects/AlbumMgmtGraphql";

export default function Portfolio() {
	return (
		<section id="portfolio" className="portfolio">
			<div className="container">
				<div className="section-title">
					<h2>&amp; personal projects</h2>
					<motion.div
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, delayChildren: 0.5 }}
						className="app__work-portfolio">
						<AmazonClone />
						<RealTimeChat />
						<AlbumMgmtGraphql />
					</motion.div>
				</div>
			</div>
		</section>
	);
}
