import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Layout extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<div className="home">
				<div className="Aligner">
					<div className="Aligner-item">
						<img src="/img/logo.png" />
						<h1>Marquez Pickett Dev-Starter-Kit</h1>
						<div className="menu">
							<ul>
								<li></li>
								<li></li>
							</ul>
						</div>
						<div className="version-num">version 4.0.0</div>
						<br />
						<a>Star</a>
					</div>
				</div>
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);
