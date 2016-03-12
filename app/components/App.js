import React from 'react';
import { connect } from 'react-redux';
 
const App = ({active, reset, value, onReset, onStart, onStop}) => (
  <div>
  	{value}{' '}{reset ? '(Reset)' : (active ? '(Running)' : '(Stopped)')}
  	<div>
  		<br />
  		<button onClick={onReset}>Reset</button>
  		<button onClick={onStart} disabled={active}>Start</button>
  		<button onClick={onStop} disabled={!active}>Stop</button>
  	</div>
  </div>
);

const mapStateToProps = (state) => {
	return {
		active: state.active,
		reset: state.reset,
		value: state.value
	};
};

const mapDispathToProps = (dispatch) => {
	return {
		onStart: () => dispatch({type: 'START'}),
		onStop: () => dispatch({type: 'STOP'}),
		onReset: () => dispatch({type: 'RESET'})
	};
};

export default connect(mapStateToProps, mapDispathToProps)(App);