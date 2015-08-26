import React, {Component} from 'react';

import styles from './components/shared/style.scss';

import Main from './components/main/main';
import SampleComponent from './components/sampleComponent/sampleComponent';

export default class App extends Component {
	render() {
		return (
			<div className="main">
				<p>UI Library Bolierplate</p>
				<Main />
				<SampleComponent />
			</div>
		);
	}
}