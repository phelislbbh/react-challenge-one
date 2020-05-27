import React, { useState } from 'react';
import './style.css';

import FormScreen from '../form';

function StartScreen() {
	const [modalVsible, setModalVisible] = useState(false);

	return (
		<div className="start-screen">
			<div className="start-screen-background" />
			<div className="start-screen-content">
				<div>
					<div className="start-screen-avatar-container">
						<div className="start-screen-avatar" />
						<div class="start-screen-help-indicator" />
					</div>
					<h1>I’m always here to help!</h1>
					<p>Together, we’ll discover your unique hair needs and goals. Occasionally, you’ll see an orange cirle on my photo. That means there’s a bit more information on the questions I’m asking. Simply tap if you’re curious to learn more.</p>
				</div>
				<div>
					<button id="start-button" onClick={setModalVisible.bind(null, !modalVsible)}>
						Okay, got it!
					</button>
				</div>
			</div>
			{modalVsible ? (
				<div className="start-screen-form-screen-container">
					<FormScreen onClose={setModalVisible.bind(null, false)} />
				</div>
			) : (
				<React.Fragment />
			)}
		</div>
	);
}

export default StartScreen;
