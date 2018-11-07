import React, { Component } from 'react'
import List from './list'
export default class CustomeTitle extends React.Component {

  test(e,n){
    console.log(this,e,n)
  }
  
  render() {
    console.log(this.props)
    return (
      /* [
        <h2 key="1">
          <span>{this.props.title}</span>
        </h2>,
        <List key="2" />
      ] */
      <React.Fragment>
        <h2>
          <span onClick={this.test.bind(this,1)}>{this.props.title}</span>
        </h2>
        <List />
      </React.Fragment>
    )
  }
}
