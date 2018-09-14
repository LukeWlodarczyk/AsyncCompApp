import React, { Component } from "react";

class Home extends Component {
  state = {
    count: 0
  };

  inc = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  dec = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.inc}>Inc</button>
        <button onClick={this.dec}>Dec</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default Home;
