import React, { useState } from 'react';
import './style.css';

const sliders = [1, 2, 3, 4];

function WelcomeScreen() {
	const [selectedSlide, setSelectedSlide] = useState(1);

	return (
		<div className="welcome-screen">
			<div className="welcome-screen-content">
				<div>
					<div>
						<p>No. 1</p>
						<h1>The Basics</h1>
						<p>Let's get to know each other</p>
					</div>
					<div>
						<ul>
							{sliders.map(slide => (
								<li data-active={selectedSlide === slide ? 'true' : 'false'}>
									<a href="javascript:void(0)" onClick={setSelectedSlide.bind(null, slide)} />
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WelcomeScreen;
