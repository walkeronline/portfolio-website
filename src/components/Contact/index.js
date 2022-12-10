import { useState } from 'react';
import './Contact.css';

function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	console.log(name);

	return (
		<div className="contact-container">
			<form id="contact-form">
				<div className="name-email-control">
					<div className="form-control name-form">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="ex: John Doe"
						/>
					</div>
					<div className="form-control email">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="ex: john@doe.com"
						/>
					</div>
				</div>
				<div className="form-control">
					<label htmlFor="message">Message</label>
					<textarea
						rows={20}
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						placeholder="Type your message here"
					/>
				</div>
			</form>
		</div>
	);
}

export default Contact;
