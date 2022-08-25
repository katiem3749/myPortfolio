import amazon1 from "../../assets/img/amazon_clone/amazon-demo-1.png";
import amazon2 from "../../assets/img/amazon_clone/amazon-demo-2.png";
import amazon3 from "../../assets/img/amazon_clone/amazon-demo-3.png";
import amazon4 from "../../assets/img/amazon_clone/amazon-demo-4.png";
import amazon5 from "../../assets/img/amazon_clone/amazon-demo-5.png";

import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
export default function AmazonClone() {
	const project = {
		name: "Amazon Clone",
		description: "Fullstack e-commerce website",
		images: [amazon1, amazon2, amazon3, amazon4, amazon5],
		tag: "NextJS",
		deployed: true,
		deployedLink: "https://amazon2point0.vercel.app/",
		codeLink: "https://github.com/katiem3749/amazon2point0",
	};

	return (
		<div className="app__work">
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
					<h4>{project.name}</h4>

					<div className="app__work-tag app__flex">
						<p className="p-text">{project.tag}</p>
					</div>
				</div>
			</div>

			<div className="app__work-details">
				<h5>{project.description}</h5>
				<br />
				<ul>
					<li>
						Built responsive web pages with using HTML/CSS (TailwindCSS),
						created reusable frontend components with React, and managed global
						state with Redux-toolkit, to perform CRUD operations
					</li>
					<br />
					<li>
						Implemented the RESTful APIs with Node.js to handle HTTP requests
						and response; implemented NextAuth.js for sign-in authentication to
						allow users sign in with built-in OAuth Authentication Providers
					</li>
					<br />
					<li>
						Implemented the Stripe Checkout for processing payments, connected
						Stripe webhook with Firestore Database to store successful
						transactions and for retrieving order history
					</li>
				</ul>
			</div>
		</div>
	);
}
