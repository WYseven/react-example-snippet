import React, { Component } from 'react'

export default class TestRef extends Component {
  componentDidMount() {
    console.log('子组件StringRefs', this.refs.test_div)
  }
  render() {
    return (
      <div>
        {this.props.rendered()}
      </div>
    )
  }
}
