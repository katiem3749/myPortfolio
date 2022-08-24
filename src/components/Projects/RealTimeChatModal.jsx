import chat4 from "../../assets/img/real_time_chat/real-time-chat-demo-1.png";
import chat2 from "../../assets/img/real_time_chat/real-time-chat-demo-2.png";
import chat3 from "../../assets/img/real_time_chat/real-time-chat-demo-3.png";
import chat1 from "../../assets/img/real_time_chat/real-time-chat-demo-4.png";
import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";

export default function RealTimeChatModal() {
	return (
		<>
			{/* -- Modal -- */}

			<div
				className="modal fade"
				id="realTimeChatAppModal"
				aria-labelledby="realTimeChatAppModalLabel"
				aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered modal-fullscreen-xxl-down">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="realTimeChatAppModalLabel">
								Real-time Chat Application
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<div
								id="realTimeChatCarouselControls"
								className="carousel slide "
								data-bs-ride="carousel">
								<div className="carousel-inner">
									<div className="carousel-item active">
										<img
											className="d-block w-100"
											src={chat1}
											alt="First slide"
										/>
									</div>
									<div className="carousel-item">
										<img
											className="d-block w-100"
											src={chat2}
											alt="Second slide"
										/>
									</div>
									<div className="carousel-item">
										<img
											className="d-block w-100"
											src={chat3}
											alt="Third slide"
										/>
									</div>

									<div className="carousel-item">
										<img
											className="d-block w-100"
											src={chat4}
											alt="Third slide"
										/>
									</div>
								</div>
								<button
									className="carousel-control-prev"
									type="button"
									data-bs-target="#realTimeChatCarouselControls"
									data-bs-slide="prev">
									<span
										className="carousel-control-prev-icon"
										aria-hidden="true"></span>
									<span className="visually-hidden">Previous</span>
								</button>
								<button
									className="carousel-control-next"
									type="button"
									data-bs-target="#realTimeChatCarouselControls"
									data-bs-slide="next">
									<span
										className="carousel-control-next-icon"
										aria-hidden="true"></span>
									<span className="visually-hidden">Next</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
