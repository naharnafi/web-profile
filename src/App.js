import React from "react";
import fotoProfil from "./img/Nahar.jpeg";
import { FaBookReader, FaHtml5, FaSass } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaGlobeAsia } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import YouTube from "react-youtube";

function App() {
	const opts = {
		height: "500",
		width: "800",
		playerVars: {
			autoplay: 1,
		},
	};

	const onReady = (event) => {
		event.target.pauseVideo();
	};
	return (
		<div className="App">
			<div className="up-part">
				<div className="box">
					<div className="sidebar">
						<div className="biodata">
							<div className="background-profile">
								<img src={fotoProfil} />
							</div>
							<div className="biodata-detail">
								<ul className="name-job">
									<li
										type="none"
										className="n3"
									>
										<h2>
											Nahar Nurun
											Nafi
										</h2>
									</li>
									<li
										type="none"
										className="job"
									>
										<h4>
											Frontend
											Developer
										</h4>
									</li>
								</ul>
								<ul
									className="address"
									type="none"
								>
									<h4>Contact</h4>
									<li>
										<FaMapPin className="icon-address" />
										Salatiga, Central
										Java, Indonesia
									</li>
									<li>
										<FaEnvelope className="icon-address" />
										nahar.nafi@fulbrightmail.org
									</li>
									<li>
										<FaWhatsapp className="icon-address" />
										+6285641551819
									</li>
									<li>
										<FaInstagram className="icon-address" />
										nahar.nafi
									</li>
								</ul>
							</div>
							<div className="project-experience">
								<h3>Project Experiences</h3>
								<p className="laflix">Laflix</p>
								<div className="laflix-text-wrapper">
									<p className="laflix-info">
										This is an app for
										watching movie
										information such as
										the trailers,
										rating, synopsis,
										etc. To start using
										the complete feature
										of the app, the user
										should create an
										account first, later
										on the users even
										can save the
										favorite movie
										information. To see
										how the app looks
										like, click the
										deployed app
									</p>
									<span> </span>
									<a href="https://laflix-movie.herokuapp.com">
										here
									</a>
								</div>
								<p className="laflix">
									Sportsman
								</p>
								<div className="laflix-text-wrapper">
									<p className="laflix-info">
										Sportsman is an app
										designed for people
										who love excercises.
										This app has been
										created by 10
										developers and the
										improvement is still
										continuing so far.
										See the app by
										clicking
									</p>
									<span> </span>
									<a href="https://laflix-movie.herokuapp.com">
										here
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="main">
						<div className="intro">
							<div>
								<h2>About Me</h2>
							</div>
							<p>
								<b>
									A language nerd and
									tech-savvy who
									participated in the
									various web development
									project for a Non-Profit
									Organization. Completed
									the Intensive Bootcamp
									from Glints Academy
									focusing on Front-end
									development. Actively
									write articles for some
									reputable academic
									journals in the field of
									language and education.
									Adept at problem solving,
									time-management.
									Proficient in MS Office
									and Corel Draw.
								</b>
							</p>
							<div>
								<hr />
								<h2>What I am doing</h2>
							</div>
						</div>
						<div className="skill-container">
							<div className="skill skill-web">
								<div className="skill-text">
									<h2>WEB DEVELOPMENT</h2>
									<p>
										High-quality
										development of sites
										at the professional
										level with the
										globally recognized
										web design and
										marketing company,
									</p>
								</div>

								<div className="skill-content">
									<div className="content html-container">
										<FaHtml5 className="icon-skill icon-html" />
										<span>HTML</span>
									</div>
									<div className="content css-container">
										<FaCss3Alt className="icon-skill icon-css" />
										<span>CSS</span>
									</div>
									<div className="content js-container">
										<FaJsSquare className="icon-skill icon-js" />
										<span>
											Javascript
										</span>
									</div>
									<div className="content react-container">
										<FaReact className="icon-skill icon-react" />
										<span>
											React Js
										</span>
									</div>
									<div className="content sass-container">
										<FaSass className="icon-skill icon-sass" />
										<span>SASS</span>
									</div>
								</div>
							</div>
							<div className="skill skill-english">
								<h2>TRANSLATION</h2>
								<p>
									The high-level translation
									which provides the
									affordable prices
								</p>
								<div className="skill-content">
									<div className="content en-container">
										<FaGlobeAmericas className="icon-skill icon-globe" />
										<span>
											English-Indonesia
										</span>
									</div>
									<div className="content in-container">
										<FaGlobeAsia className="icon-skill icon-globe" />
										<span>
											Indonesia-English
										</span>
									</div>
									<div className="content proof-container">
										<FaBookReader className="icon-skill icon-proof" />
										<span>
											Proof-Reading
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="down-part">
				<div className="video-container">
					<h2>Sportsman</h2>

					<span></span>
					<YouTube
						className="video"
						videoId="vHjYrFOaIOs"
						opts={opts}
						onReady={onReady}
					/>
				</div>
			</div> */}
			<div className="footer">
				<span>Designed by Nahar</span>
			</div>
		</div>
	);
}

export default App;
