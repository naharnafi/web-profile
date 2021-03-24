import fotoProfil from "./img/Nahar.jpeg";
import { FaHtml5 } from "react-icons/fa";
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
	return (
		<div className="App">
			<div className="box">
				<div className="sidebar">
					<div className="biodata">
						<div className="background-profile">
							<img src={fotoProfil} />
						</div>
						<div className="biodata-detail">
							<ul className="name-job">
								<li type="none" className="n3">
									<h2>Nahar Nurun Nafi</h2>
								</li>
								<li type="none" className="job">
									<h4>
										Front-end Developer
									</h4>
								</li>
							</ul>
							<ul className="address" type="none">
								<h4>Contact</h4>
								<li>
									<FaMapPin className="icon-address" />
									Salatiga, Central Java,
									Indonesia
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
						<div className="button-download">
							<button className="btn">
								<a>Download CV</a>
							</button>
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
								A language nerd and tech-savvy
								who participated in the various
								web development project for a
								Non-Profit Organization.
								Completed the Intensive Bootcamp
								from Glints Academy focusing on
								Front-end development. Actively
								write articles for some
								reputable academic journals in
								the field of language and
								education. Adept at problem
								solving, time-management.
								Proficient in MS Office and
								Corel Draw.
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
									High-quality development
									of sites at the
									professional level with
									the globally recognized
									web design and marketing
									company,
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
									<span>Javascript</span>
								</div>
								<div className="content react-container">
									<FaReact className="icon-skill icon-react" />
									<span>React Js</span>
								</div>
							</div>
						</div>
						<div className="skill skill-english">
							<h2>TRANSLATION</h2>
							<p>
								The high-level translation which
								provides the affordable prices
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
							</div>
						</div>
					</div>
				</div>
				<YouTube
					videoId="vHjYrFOaIOs"
					opts={opts}
					onReady={this._onReady}
				/>
			</div>
		</div>
	);
}

export default App;
