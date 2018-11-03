import React, { Component } from 'react'
import index from '../css/index.css'

export default class TodoHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
    this.input = React.createRef();
  }

  changeTitle = () => {
    // 设置状态改变input的值
    this.setState({
      title: this.input.current.value
    })
  }

  sendTitle = (e) => {
    if(e.keyCode !== 13) return;
    // 向父级通信
    if (this.props.getHeaderTitle){
      this.props.getHeaderTitle(this.state.title);
      this.setState({
        title: ''
      })
    }
  }

  render() {
    return (
      <header>
        <h1>todos</h1>
        <input 
          className={index['new-todo']} 
          placeholder="请输入内容" 
          value={this.state.title}
          onChange={this.changeTitle}
          onKeyUp={this.sendTitle}
          ref={this.input}
        />
      </header>
    )
  }
}
