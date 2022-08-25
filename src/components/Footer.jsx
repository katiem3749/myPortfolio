import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Footer() {
	const form = useRef();

	const SendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"gmail",
				"portfolio_template",
				form.current,
				"mAucJp9gBcgqRoBOh"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};
	return (
		<section id="contact" className="contact">
			<div className="container">
				<div className="section-title ">
					<h2>&amp; contact me</h2>
					<div className="container-statement">
						<p>
							<em>
								I have held multiple roles in the financial industry but enjoy
								fast-pace and innovative nature of software development.
							</em>
						</p>

						<p>
							<em>
								When I am not slapping away at the keyboard, you can find me
								learning Japanese and cooking for my family.
							</em>
						</p>
						<p>
							<em>
								I am happy to hear about any software development opportunities
								or chat with you about anything related.
							</em>
						</p>
					</div>
				</div>
			</div>
			<div className="app__footer-container">
				<form ref={form} onSubmit={SendEmail} className="app__footer ">
					<div className="app__footer-form">
						<div className="app__footer-form-items app__flex">
							<label>NAME:</label>
							<input className="p-text" type="text" name="from_name" />
						</div>
						<div className="app__footer-form-items app__flex">
							<label>EMAIL:</label>
							<input className="p-text" type="email" name="from_email" />
						</div>
						<div className="app__footer-form-items app__flex">
							<label>SUBJECT:</label>
							<input className="p-text" name="subject" />
						</div>
						<div className="app__footer-form-items app__flex">
							<label>MESSAGE:</label>
							<textarea className="p-text" name="message" />
						</div>
					</div>

					<div className="app__footer-cards">
						<div className="app__footer-card ">
							<h5>EMAIL</h5>
							<p>KATIEM3749@gmail.com</p>
							<h5>TELEPHONE</h5>
							<p>917-512-3805</p>
							<h5>LOCATION</h5>
							<p>New York, NY</p>
						</div>
						<button type="submit" className="p-text">
							SEND
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}
