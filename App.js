import React from 'react';
import ReactDOM from 'react-dom';

/* Will have State: */
class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      txt: '',
      red: 0,
      green: 0,
      blue: 0
    }
    this.update = this.update.bind(this)
  }
  update(e) {
    this.setState({
      txt: e.target.value,
      red: ReactDOM.findDOMNode( this.refs.red.refs.inp ).value,
      green: ReactDOM.findDOMNode( this.refs.green.refs.inp ).value, 
      blue: ReactDOM.findDOMNode( this.refs.blue.refs.inp ).value
    })
  }
  render() {
    return (
      <div>
      {this.state.txt}
        <Widget txt={this.state.txt} update={this.update} />
        <hr />
        <Slider ref="red" update={this.update} />
        {this.state.red}
        <br />
        <Slider ref="green" update={this.update} />
        {this.state.green}
        <br />        
        <Slider ref="blue" update={this.update} />
        {this.state.blue}
        <br />        
      </div>
    )
  }
}

class Slider extends React.Component {
  render() {
    return(
        <div>
          <input ref="inp" type="range" 
            min="0"
            max="255"
            onChange={this.props.update} />
        </div>    
      )
  }
}

/* Will not have State: */
const Widget = (props) => {
  return (
      <div>
        <h1> Type below to change! </h1>
        <input type="text"
          onChange={props.update} />
        <h3> {props.txt} </h3>
      </div>    
    )
}

export default App