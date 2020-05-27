import React from 'react';
import './style.css';

function FormButton(props) {
	const { currentStep, totalSteps, buttonEnabed } = props;

	return (
		<div className="form-button-container">
			<div className="form-button-progress-bar">
				<div style={{ width: `${(currentStep / totalSteps) * 100}%` }} />
			</div>
			<button id="form-button" disabled={!buttonEnabed}>
				Continue
			</button>
		</div>
	);
}

export default FormButton;
