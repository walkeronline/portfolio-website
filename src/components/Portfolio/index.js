import './Portfolio.css';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import Home from '../Home';

function Portfolio() {
	return (
		<>
			{/* <div className="old-home">
				<Home />
			</div> */}
			<div className="grid-container">
				<div className="projects-grid">
					<div className="grid-item" id="grid-1">
						<div className="grid-text">Project 1</div>
					</div>
					<div className="grid-item" id="grid-2">
						<div className="grid-text">Project 2</div>
					</div>
					<div className="grid-item" id="grid-3">
						<div className="grid-text">Project 3</div>
					</div>
					<div className="grid-item" id="grid-4">
						<div className="grid-text">Project 4</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Portfolio;
