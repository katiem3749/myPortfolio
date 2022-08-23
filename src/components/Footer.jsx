import React, { useState } from "react";

// import { images } from "../../constants";
// import { AppWrap, MotionWrap } from "../../wrapper";
// import { client } from "../../client";
// import "./Footer.scss";

export default function Footer() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const { username, email, message } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		setLoading(true);

		const contact = {
			_type: "contact",
			name: formData.username,
			email: formData.email,
			message: formData.message,
		};

		return (
			<>
				<h2 className="head-text">Take a coffee & chat with me</h2>

				<div className="app__footer-cards">
					<div className="app__footer-card ">
						{/* <img src={} alt="email" /> */}
						<a href="mailto:katiem3749@gmail.com" className="p-text">
							katiem3749@gmail.com
						</a>
					</div>
					<div className="app__footer-card">
						{/* <img src={images.mobile} alt="phone" /> */}
						<a href="tel:+1 (917) 512-3805" className="p-text">
							+1 (917) 512-3805
						</a>
					</div>
				</div>

				<div className="app__footer-form app__flex">
					<div className="app__flex">
						<input
							className="p-text"
							type="text"
							placeholder="Your Name"
							name="username"
							value={username}
							onChange={handleChangeInput}
						/>
					</div>
					<div className="app__flex">
						<input
							className="p-text"
							type="email"
							placeholder="Your Email"
							name="email"
							value={email}
							onChange={handleChangeInput}
						/>
					</div>
					<div>
						<textarea
							className="p-text"
							placeholder="Your Message"
							value={message}
							name="message"
							onChange={handleChangeInput}
						/>
					</div>
					<button type="button" className="p-text" onClick={handleSubmit}>
						{!loading ? "Send Message" : "Sending..."}
					</button>
				</div>
			</>
		);
	};
}
