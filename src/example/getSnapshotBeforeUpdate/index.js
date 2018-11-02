import React from 'react'
import Test from './getSnapshotBeforeUpdate'


export default class App extends React.Component {
  constructor(props) {
    console.log('App costructor')
    super(props);
    this.state = {
      list: [1, 2, 3]
    };
  }
  render() {
    console.log('App render');
    return (
      <div>
        <h2>测试getSnapshotBeforeUpdate生命周期函数</h2>
        <p>当滚动条拉到底部，再新添加内容时候，动态的改变滚动条的位置，保持在底部不变</p>
        <p>
          使用getSnapshotBeforeUpdate钩子函数在更新前获取元素的位置，在componentDidUpdate之后保持在原来的位置
        </p>
        <button onClick={() => {
          let list = [...this.state.list]
          list.push(Math.random())
          this.setState({
            list: list
          })
        }}>添加数据</button>
        <Test a={this.state.a} list={this.state.list} />
      </div>
    )
  }
}