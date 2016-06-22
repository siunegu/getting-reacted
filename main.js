import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired,
}

App.defaultProps = {
	txt: 'this is the default txt',
}

ReactDOM.render(<App cat={5} />, document.getElementById('app'))