import React, { Component } from 'react'
/* 
  函数组件不能直接给ref，因为没有实例

*/
function Button(props,ref){
  console.log(props)
  return <button ref={ref}>按钮</button>
}

Button = React.forwardRef(Button);

// 用在高阶组件上，可以拿到某个具体组件的引用

function HOC(Com){
  class HOCCompoennt extends Component {
    render(){
      let {forwardRef,...rest} = this.props;
      return <Com {...rest} ref={forwardRef} />
    }
  }
  return React.forwardRef((props,ref) => {
    return <HOCCompoennt {...props} forwardRef={ref}  />
  });
}

// 测试包装一个组件
class TestForWard extends Component {
  render(){
    return <div>测试forwardRef</div>
  }
}

TestForWard = HOC(TestForWard)

class ForwardRef  extends Component {
  componentDidMount(){
    // 拿到函数组件内部的button
    console.log('ForwardRef', this.getButton)
    console.log('ForwardRef', this.getCom)
  }
  getButton = React.createRef()
  getCom = React.createRef()
  render() {
    return (
      <div>
        <Button ref={this.getButton} />
        {/**对开发者来说这个ref是完全透明的，高阶组件内部使用了forwardRef做转发 */}
        <TestForWard ref={this.getCom} />
      </div>
    )
  }
}

export default ForwardRef
