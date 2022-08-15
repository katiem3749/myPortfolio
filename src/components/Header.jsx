import Kprofile from "../assets/img/Kprofile.jpg";
import Signature from "../assets/img/signature.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Resume from "../assets/Resume_2022-08-01.pdf";

export default function Header() {
	return (
		<header id="header" className="header">
			<div className="d-flex flex-column">
				{/* profile top + social media links */}
				<div className="profile">
					<div className="mb-50">
						<img
							src={Kprofile}
							alt="noreferrence"
							className="img-fluid rounded-circle"
						/>

						<a href="index.html">
							<img
								src={Signature}
								className="w-1/2 pt-10 border-0"
								alt="signature"
							/>
						</a>
					</div>

					<div className="social-links text-center">
						<a
							href="https://github.com/katiem3749?tab=repositories"
							target="_blank"
							rel="noreferrer">
							<div className="mt-3 ">
								<FaGithub className="w-100" />
							</div>
						</a>

						<a
							href="https://www.linkedin.com/in/katie-li-723398105/"
							target="_blank"
							rel="noreferrer">
							<div className=" mt-3">
								<FaLinkedinIn />
							</div>
						</a>

						<a href={Resume}>
							<div className=" mt-3">
								<BsFillPersonLinesFill />
							</div>
						</a>
					</div>
				</div>
				<div className="resume-link">
					<a href="assets/img/Resume_2022-08-01.pdf">
						Resume<i className="bx bx-download"></i>
					</a>
				</div>
			</div>
		</header>
	);
}
