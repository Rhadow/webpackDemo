'use strict';

import './assets/styles/main.css'
import React from 'react';

var Component = require('./component.js');
var Profile = require('./Profile.js');


var Main = React.createClass({
	getInitialState: function() {
		return {
			switch: true
		};
	},
	_toggle() {
		this.setState({
			switch: !this.state.switch
		});
	},
	render() {
		return (
			<div>
			    <input type="button" onClick={this._toggle} value="Press Me!"/>
			    {this.state.switch ? <Component /> : <Profile />}
			</div>
			
		);
	}
});

React.render(<Main />, document.body);