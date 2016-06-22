import React from 'react';
import ReactDOM from 'react-dom';

/* Will have State: */
class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      txt: 'My new color',
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
      <div className="card-block">
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
        <TimerWrapper />
      </div>
    )
  }
}

/* Color Slider */
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
        <h1> Name your new color! </h1>
        <input type="text"
          onChange={props.update} />
        <hr />
        <h3> {props.txt} </h3>
        <hr />
        <Button> I <Heart /> React </Button>
      </div>    
    )
}

/* Accessing nested child components */
class Button extends React.Component {
  render() {
    return <button> {this.props.children} </button>    
  }
}

const Heart = () => <span className="glyphicon glyphicon-heart"></span>

/* Component Lifecycle */
class Timer extends React.Component {
  constructor(args) {
    super();
    this.state = { val: 0 };
    this.update = this.update.bind(this);
  }

  // methods
  update() {
    this.setState({ val: this.state.val + 1 })
  }
  componentWillMount() {
    this.setState({ m: 2 })
  }
  render() {
    console.log('rendering!')
    return(
      <button onClick={this.update}> 
        {this.state.val * this.state.m}
      </button> 

    )
  }
  componentDidMount() {
    this.inc = setInterval(this.update, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.inc)
  }
}

class TimerWrapper extends React.Component {
  constructor(args) {
    super();
  }
  mount() {
    console.log('mounting timer')
    ReactDOM.render(<Timer />, document.getElementById('increment-timer'))
  }
  unmount() {
    console.log('unmounting timer')
    ReactDOM.unmountComponentAtNode( document.getElementById('increment-timer') )
  }
  render() {
    return(
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="increment-timer">
        </div>
      </div>
      )
  }
}

export default App