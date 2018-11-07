import React, { Component } from 'react'
import List from './list'
export default class CustomeTitle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      n: 0
    };
  }

  changeHandle = () => {
    let m = this.state.n;
    this.setState({
      n: ++m
    })
  }

  render() {

    return (
      <React.Fragment>
        <button onClick={this.changeHandle}>
          数字累加
        </button>
        <p>{this.state.n}</p>
      </React.Fragment>
    )
  }
}
