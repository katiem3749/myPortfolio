import album1 from "../../assets/img/album_graphql/albumDB_graphql_demo_1.png";
import album2 from "../../assets/img/album_graphql/albumDB_graphql_demo_2.png";
import album3 from "../../assets/img/album_graphql/albumDB_graphql_demo_3.png";
import album4 from "../../assets/img/album_graphql/albumDB_graphql_demo_4.png";

// import { useState } from "react";
// import { Modal } from "react-bootstrap";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import AlbumMgmtModal from "./AlbumMgmtModal";

export default function AlbumMgmtGraphql() {
	const project = {
		name: "Album Collection Dashboard",
		description: "Dashboard built with GraphQL and MongoDB",
		images: [album1, album2, album3, album4],
		tag: "GraphQL",
		deployed: true,
		deployedLink: "https://github.com/katiem3749/albumCollection_graphQL_api",
		codeLink: "https://github.com/katiem3749/albumCollection_graphQL_api",
	};

	// const [modalShow, setModalShow] = useState(false);
	// function closeModal() {
	// 	setModalShow(false);
	// }
	return (
		<div className="d-flex">
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
						{/* <a href={project.deployedLink} target="_blank" rel="noreferrer">
							<motion.div
								whileInView={{ scale: [0, 1] }}
								whileHover={{ scale: [1, 0.9] }}
								transition={{ duration: 0.25 }}
								className="app__flex">
								<AiFillEye />
							</motion.div>
						</a> */}
						<button
							type="button"
							className="app__work-modal-button"
							data-bs-toggle="modal"
							data-bs-target="#albumMgmtModal">
							<motion.div
								whileInView={{ scale: [0, 1] }}
								whileHover={{ scale: [1, 0.9] }}
								transition={{ duration: 0.25 }}
								className="app__flex">
								<AiFillEye />
							</motion.div>
						</button>
						<AlbumMgmtModal />
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
					<h4>{project.name}</h4>
					<div className="app__work-tag app__flex">
						<p className="p-text">{project.tag}</p>
					</div>
				</div>
			</div>

			<div className="app__work-details">
				<p>{project.description}</p>

				<br />
				<ul>
					<li>
						Generated a dashboard of albums that enables users to enter related
						information, update and delete artists or albums (CRUD operations)
					</li>
					<br />
					<li>
						Set up connection to MongoDB database to store data and reflect any
						mutation called from the front end; created mongoose schema, used
						GraphQL to query needed data fields and realize mutation
					</li>
				</ul>
			</div>
		</div>
	);
}
