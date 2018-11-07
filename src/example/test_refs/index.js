import React, { Component } from 'react'
import StringRefs from './string_ref'
import CallBackRef from './callback_ref'
import CreateRef from './create_ref'
import ForwardRef from './forward_ref'

export default class TestRefs extends Component {
  testCreateRef = React.createRef()
  componentDidMount() {
    console.log(this.refs.test_div)
    console.log(this.test_div)
    console.log('index testCreateRef',this.testCreateRef)
  }

  renderHtml1 = () => {
    // 利用字符串的方式，绑定在了子组件中
    return <div ref="test_div">想要绑定在父组件index实例上</div>
  }
  renderHtml2 = () => {
    // 利用回调函数方式是绑定在当前实例上
    return <div ref={(d) => this.test_div = d}>想要绑定在父组件index实例上</div>
  }

  render() {
    
    return (
      <div>
        {/**测试字符串形式的ref */}
        <StringRefs ref="stringChild" rendered={this.renderHtml1} />
        {/**测试回调函数形式的ref */}
        <CallBackRef
          ref={(c) => this.callbackChild = c} 
          rendered={this.renderHtml2}
          forwardRef={(c) => this.forwardRefCallbackChild = c }
        />
        {/**测试createRef形式的ref */}
        <CreateRef ref={this.testCreateRef} forwardRef={this.testCreateRef} />
        {/**测试ref转发 */}
        <ForwardRef />
      </div>
    )
  }
}
