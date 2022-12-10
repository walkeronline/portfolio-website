import { Link } from 'react-router-dom';
import './Home.css';

import NavigationBar from '../NavigationBar';

function Home() {
	return (
		<>
			<div className="about-container">
				<div className="header-container">
					<img
						className="header-pic"
						src="https://avatars.githubusercontent.com/u/33130575?v=4"
						alt="Me"
					></img>
					<div className="header">
						<h1>Hi,</h1>
						<h2>
							I'm <div className="name-highlight">Walker</div>.
						</h2>
					</div>
				</div>
				<div className="about-me">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam
						non nisi est sit amet facilisis magna. Etiam tempor orci eu lobortis
						elementum nibh tellus molestie. Augue neque gravida in fermentum.
						Lectus quam id leo in. Pellentesque pulvinar pellentesque habitant
						morbi tristique. Sit amet nulla facilisi morbi tempus. Praesent
						elementum facilisis leo vel fringilla est. Eget egestas purus
						viverra accumsan. Amet aliquam id diam maecenas ultricies mi eget
						mauris. Nulla facilisi morbi tempus iaculis urna. Nunc non blandit
						massa enim nec. Ut etiam sit amet nisl purus in mollis nunc.
					</p>
					<p>
						In tellus integer feugiat scelerisque varius morbi. Maecenas
						accumsan lacus vel facilisis volutpat est. Nulla facilisi nullam
						vehicula ipsum a. Sit amet mattis vulputate enim nulla aliquet
						porttitor. Dignissim enim sit amet venenatis urna cursus. Lectus
						arcu bibendum at varius. Sit amet massa vitae tortor condimentum
						lacinia quis vel. Lorem ipsum dolor sit amet consectetur adipiscing
						elit duis tristique. Sit amet massa vitae tortor condimentum lacinia
						quis vel. Id aliquet lectus proin nibh nisl condimentum.
					</p>
				</div>
			</div>
		</>
	);
}

export default Home;
