import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Forwarder from '../routes/Forwarder';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<Forwarder path= "/:id" />
		</Router>
	</div>
)

export default App;
