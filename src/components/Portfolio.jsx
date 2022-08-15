import { motion } from "framer-motion";
import AmazonClone from "./Projects/AmazonClone";
import RealTimeChat from "./Projects/RealTimeChat";

export default function Portfolio() {
	return (
		<motion.div
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5, delayChildren: 0.5 }}
			className="app__work-portfolio">
			<AmazonClone />
			<RealTimeChat />
		</motion.div>
	);
}
