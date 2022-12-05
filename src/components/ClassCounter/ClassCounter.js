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

  render() {
    return (
      <div>
        <h1>counter</h1>
        <h2>Count value is : {this.state.count}</h2>
        <button onClick={this.incrementCount}>Click</button>
      </div>
    );
  }
}

export default ClassCounter;
