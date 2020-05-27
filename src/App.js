import React from 'react';
import './App.css';

import WelcomeScreen from './screens/welcome';
import StartScreen from './screens/start';

function App() {
	return (
		<div className="App">
			<WelcomeScreen />
			<StartScreen />
		</div>
	);
}

export default App;
