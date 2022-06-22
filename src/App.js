import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom';

import TestSetup from './components/TestSetup.jsx';

const rootContainer = document.getElementById("mainContainer");
const app = createRoot(rootContainer);

const TheApp = () => {
	return (
		<div>
			<p> Testing some jsx!</p>
			<TestSetup details="some drilling!"/>
		</div>
 	);
}

app.render(<TheApp />);