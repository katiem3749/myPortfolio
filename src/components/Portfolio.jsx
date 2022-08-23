import { motion } from "framer-motion";
import AmazonClone from "./Projects/AmazonClone";
import RealTimeChat from "./Projects/RealTimeChat";
import AlbumMgmtGraphql from "./Projects/AlbumMgmtGraphql";

export default function Portfolio() {
	return (
		<motion.div
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5, delayChildren: 0.5 }}
			className="app__work-portfolio">
			<AmazonClone />
			<RealTimeChat />
			<AlbumMgmtGraphql />
		</motion.div>
	);
}
