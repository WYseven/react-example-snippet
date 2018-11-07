import React, { Component } from 'react'
import List from './list'
export default class CustomeTitle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: '',
      isClick: false
    };
  }

  changeHandle = () => {
    this.setState({
      //color: 'red'
      isClick: !this.state.isClick
    })
    console.log(this.state.isClick)
  }

  render() {

    let { isClick } = this.state;
    let color = isClick ? 'red' : '';
    return (
      <React.Fragment>
        <h2 style={{ color: color }} onClick={this.changeHandle}>
          <span>{this.props.title}</span>
        </h2>
        <List />
      </React.Fragment>
    )
  }
}
