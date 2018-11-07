import React, { Component } from 'react'

export default class CreateRef extends Component {
  /**不能解决循环生成元素放入数组中 */
  inputs = React.createRef()
  componentDidMount() {
    console.log(this.inputs)
    console.log('forwardRef',this.forwardRef)
  }
  render() {
    console.log('CreateRef',this.props)
    return (
      <div>
        <div ref={this.props.forwardRef}></div>
        {
          [1,2,3].map((item) => {
            return <button key={item} ref={this.inputs}>按钮</button>
          })
        }
      </div>
    )
  }
}
