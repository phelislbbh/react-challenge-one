import React, { useState } from 'react';
import './style.css';

import FormButton from './button';

const options = ['Smooth', 'Wavy', 'Curly', 'Very Curly', 'Kinky'];

function FormScreen({ onClose }) {
	const totalSteps = 15;

	const [currentStep, setCurrentStep] = useState(2);
	const [buttonEnabed, setButtonEnabled] = useState(false);
	const [selectedOption, setSelectedOption] = useState('');

	const onItemSelect = value => {
		setSelectedOption(value);

		setButtonEnabled(true);
	};

	return (
		<div className="form-screen">
			<div className="form-screen-header">
				<button id="form-screen-close-button" onClick={onClose}>
					×
				</button>
				<div className="form-screen-avatar" />
				<h1>So, Serena, how would you describe the texture of your hair?</h1>
			</div>
			<div className="form-screen-content">
				<ul className="form-screen-content-options">
					{options.map((option, index) => (
						<li key={option} data-active={selectedOption === option}>
							<button id={index} onClick={onItemSelect.bind(null, option)}>
								{option}
							</button>
						</li>
					))}
				</ul>
				<div className="form-screen-content-pagination-container">
					<button />
					<span>{`${currentStep} . ${totalSteps}`}</span>
				</div>
			</div>
			<FormButton currentStep={currentStep} totalSteps={totalSteps} buttonEnabed={buttonEnabed} />
		</div>
	);
}

export default FormScreen;
