import React from 'react';
import './App.css';
import Tab from './components/Tab';
import Home from './pages/Home';
import Features from './pages/Features';
import About from './pages/About';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="app">
				<div className="browser">
					<div className="tabs">
						<Tab>
							<NavLink to="/" activeClassName="is-active" exact={true}>
								Home
							</NavLink>
						</Tab>
						<Tab>
							<NavLink to="/features" activeClassName="is-active">
								Features
							</NavLink>
						</Tab>
						<Tab>
							<NavLink to="/about" activeClassName="is-active">
								About
							</NavLink>
						</Tab>
					</div>
					<div className="viewport">Pages Go Here</div>
				</div>
			</div>
			<Switch>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/features">
					<Features />
				</Route>
				<Route path="/" exact={true}>
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
