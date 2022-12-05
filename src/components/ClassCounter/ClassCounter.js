import { Component } from "react";
class ClassCounter extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  increment5 = (num) => {
    this.setState({
      count: this.state.count + num,
    });
  };

  render() {
    return (
      <div>
        <h1>counter</h1>
        <h2>Count value is : {this.state.count}</h2>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={() => this.decrementCount()}>Decrement</button>
        <button onClick={() => this.increment5(2)}>Increment By 2</button>
      </div>
    );
  }
}

export default ClassCounter;
