import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
	const href = window.location.href.split('/');
	const currentPath = href[href.length - 1];

	const [page, setPage] = useState(currentPath ? currentPath : 'home');

	return (
		<div className="button-container">
			<Link
				to="/"
				className={`home-button${page === 'home' ? ' active' : ''}`}
				onClick={() => setPage('home')}
			>
				About
			</Link>
			<Link
				to="/portfolio"
				className={`home-button${page === 'portfolio' ? ' active' : ''}`}
				onClick={() => setPage('portfolio')}
			>
				Portfolio
			</Link>
			<Link
				to="/resume"
				className={`home-button${page === 'resume' ? ' active' : ''}`}
				onClick={() => setPage('resume')}
			>
				Resume
			</Link>
			<Link
				to="/contact"
				className={`home-button${page === 'contact' ? ' active' : ''}`}
				onClick={() => setPage('contact')}
			>
				Contact
			</Link>
		</div>
	);
}

export default NavigationBar;
