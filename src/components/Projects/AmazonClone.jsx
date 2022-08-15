import amazon1 from "../../assets/img/amazon_clone/amazon-demo-1.png";
import amazon2 from "../../assets/img/amazon_clone/amazon-demo-2.png";
import amazon3 from "../../assets/img/amazon_clone/amazon-demo-3.png";
import amazon4 from "../../assets/img/amazon_clone/amazon-demo-4.png";
import amazon5 from "../../assets/img/amazon_clone/amazon-demo-5.png";

import { useState } from "react";
import { Modal } from "react-bootstrap";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
export default function AmazonClone() {
	const project = {
		name: "Amazon Clone",
		description: "A Fullstack projects ...",
		images: [amazon1, amazon2, amazon3, amazon4, amazon5],
		tag: "NextJS",
		deployed: true,
		deployedLink: "https://amazon2point0.vercel.app/",
		codeLink: "https://github.com/katiem3749/amazon2point0",
	};

	const [modalShow, setModalShow] = useState(false);
	function closeModal() {
		setModalShow(false);
	}
	return (
		<>
			<div className="app__work-item app__flex">
				<div className="app__work-img app__flex">
					<img src={project.images[0]} alt={project.images[1]} />

					<motion.div
						whileHover={{ opacity: [0, 1] }}
						transition={{
							duration: 0.25,
							ease: "easeInOut",
							staggerChildren: 0.5,
						}}
						className="app__work-hover app__flex">
						<a href={project.deployedLink} target="_blank" rel="noreferrer">
							<motion.div
								whileInView={{ scale: [0, 1] }}
								whileHover={{ scale: [1, 0.9] }}
								transition={{ duration: 0.25 }}
								className="app__flex">
								<AiFillEye />
							</motion.div>
						</a>
						<a href={project.codeLink} target="_blank" rel="noreferrer">
							<motion.div
								whileInView={{ scale: [0, 1] }}
								whileHover={{ scale: [1, 0.9] }}
								transition={{ duration: 0.25 }}
								className="app__flex">
								<AiFillGithub />
							</motion.div>
						</a>
					</motion.div>
				</div>

				<div className="app__work-content app__flex">
					<h4 className="bold-text">{project.name}</h4>
					<p className="p-text" style={{ marginTop: 10 }}>
						{project.description}
					</p>

					<div className="app__work-tag app__flex">
						<p className="p-text">{project.tag}</p>
					</div>
				</div>
			</div>
		</>
	);
}
