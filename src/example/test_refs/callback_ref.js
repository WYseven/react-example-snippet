import React, { Component } from 'react'

export default class CallBackRef extends Component {
  componentDidMount() {
    console.log('子组件CallBackRef', this.refs.test_div)
  }
  render() {
    console.log('CallBackRef render',this.props)
    return (
      <div>
        {this.props.rendered()}
      </div>
    )
  }
}
