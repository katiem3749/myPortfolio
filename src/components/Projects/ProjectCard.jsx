import { useState } from "react";
import { Modal } from "react-bootstrap";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import ProjectModal from "../ProjectModal";

export default function ProjectCard(project) {
	const { name, description, images, tag, deployed, deployedLink, codeLink } =
		project;
	const [modalShow, setModalShow] = useState(false);
	function closeModal() {
		setModalShow(false);
	}
	return (
		<>
			<motion.div
				animated={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__work-portfolio">
				<a
					href={project.deployed ? project.deployedLink : project.codeLink}
					target="_blank"
					rel="noreferrer">
					<div className="app__work-item app__flex">
						<div className="app__work-img app__flex">
							<img src={images[0]} alt={images[1]} />

							<motion.div
								whileHover={{ opacity: [0, 1] }}
								transition={{
									duration: 0.25,
									ease: "easeInOut",
									staggerChildren: 0.5,
								}}
								className="app__work-hover app__flex">
								{/* <a
									href={"https://amazon2point0.vercel.app/"}
									target="_blank"
									rel="noreferrer">
									<motion.div
										whileInView={{ scale: [0, 1] }}
										whileHover={{ scale: [1, 0.9] }}
										transition={{ duration: 0.25 }}
										className="app__flex">
										<AiFillEye />
									</motion.div>
								</a> */}

								<button onClick={() => setModalShow(!modalShow)}>
									<motion.div
										whileInView={{ scale: [0, 1] }}
										whileHover={{ scale: [1, 0.9] }}
										transition={{ duration: 0.25 }}
										className="app__flex">
										<AiFillEye />
									</motion.div>
								</button>
								{/* <Modal show={modalShow} onHide={closeModal} centered>
									<ProjectModal />
								</Modal>*/}
								<a
									href={"https://github.com/katiem3749/amazon2point0"}
									target="_blank"
									rel="noreferrer">
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
							<h4 className="bold-text">amazon clone</h4>
							<p className="p-text" style={{ marginTop: 10 }}>
								a fullstack e-commerce website
							</p>
							<div className="app__work-tag app__flex">
								<p className="p-text">Next JS</p>
							</div>
						</div>
					</div>
				</a>
			</motion.div>
		</>
	);
}
