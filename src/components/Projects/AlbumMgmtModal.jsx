import album1 from "../../assets/img/album_graphql/albumDB_graphql_demo_1.png";
import album2 from "../../assets/img/album_graphql/albumDB_graphql_demo_2.png";
import album3 from "../../assets/img/album_graphql/albumDB_graphql_demo_3.png";
import album4 from "../../assets/img/album_graphql/albumDB_graphql_demo_4.png";

import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";

export default function AlbumMgmtModal() {
	return (
		<>
			{/* -- Modal -- */}

			<div
				className="modal fade"
				id="albumMgmtModal"
				aria-labelledby="albumMgmtModalLabel"
				aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered modal-fullscreen-xxl-down">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="albumMgmtModalLabel">
								Album Collection - GraphQL
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<div
								id="albumMgmtCarouselControls"
								className="carousel slide "
								data-bs-ride="carousel">
								<div className="carousel-inner">
									<div className="carousel-item active">
										<img
											className="d-block w-100"
											src={album1}
											alt="First slide"
										/>
									</div>
									<div className="carousel-item">
										<img
											className="d-block w-100"
											src={album2}
											alt="Second slide"
										/>
									</div>
									<div className="carousel-item">
										<img
											className="d-block w-100"
											src={album3}
											alt="Third slide"
										/>
									</div>

									<div className="carousel-item">
										<img
											className="d-block w-100"
											src={album4}
											alt="Third slide"
										/>
									</div>
								</div>
								<button
									className="carousel-control-prev"
									type="button"
									data-bs-target="#albumMgmtCarouselControls"
									data-bs-slide="prev">
									<span
										className="carousel-control-prev-icon"
										aria-hidden="true"></span>
									<span className="visually-hidden">Previous</span>
								</button>
								<button
									className="carousel-control-next"
									type="button"
									data-bs-target="#albumMgmtCarouselControls"
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
