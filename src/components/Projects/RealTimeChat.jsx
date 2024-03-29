import chat4 from "../../assets/img/real_time_chat/real-time-chat-demo-1.png";
import chat2 from "../../assets/img/real_time_chat/real-time-chat-demo-2.png";
import chat3 from "../../assets/img/real_time_chat/real-time-chat-demo-3.png";
import chat1 from "../../assets/img/real_time_chat/real-time-chat-demo-4.png";

import RealTimeChatModal from "./RealTimeChatModal";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

export default function RealTimeChat() {
	const project = {
		name: "Real-Time Chat Application",
		description: "Real-time chat app with Socket.IO",
		images: [chat1, chat2, chat3, chat4],
		tag: "Socket.IO",
		deployed: true,
		deployedLink: "https://github.com/katiem3749/real-time-chat-app3749",
		codeLink: "https://github.com/katiem3749/real-time-chat-app3749",
	};

	return (
		<div className="app__work">
			<div className="app__work-details">
				<h5>{project.description}</h5>
				<br />
				<ul>
					<li>
						Realized bidirectional communication on the server side by using
						Javascript library - Socket.io
					</li>
					<br />
					<li>
						Built client side interface mainly with the third party framework
						Bootstrap built-in features to achieve a fast, extensible frontend
						interface
					</li>
				</ul>
			</div>

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
						<button
							type="button"
							className="app__work-modal-button"
							data-bs-toggle="modal"
							data-bs-target="#realTimeChatAppModal">
							<motion.div
								whileInView={{ scale: [0, 1] }}
								whileHover={{ scale: [1, 0.9] }}
								transition={{ duration: 0.25 }}
								className="app__flex">
								<AiFillEye />
							</motion.div>
						</button>

						<RealTimeChatModal />
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
		</div>
	);
}
