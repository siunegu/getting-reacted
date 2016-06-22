import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired,
	red: React.PropTypes.number,
	blue: React.PropTypes.number,
	green: React.PropTypes.number
}

App.defaultProps = {
	txt: 'this is the default txt',
	red: 0,
	blue: 0,
	green: 0
}

ReactDOM.render(<App cat={5} />, document.getElementById('app'))