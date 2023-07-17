import React, { Component } from "react";

class Count extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({
      count: (this.state.count = this.state.count + 1),
    });
    console.log(this.state.count);
  }

  decrement() {
    this.setState({
      count: (this.state.count = this.state.count - 1),
    });
    console.log(this.state.count);
  }

  render() {
    return (
      <div className="count">
        <div className="count1">
          <h1 className="count2">{this.state.count}</h1>
          <button onClick={() => this.increment()} className="btn">
            Increment
          </button>
          <button onClick={() => this.decrement()} className="btn">
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default Count;
