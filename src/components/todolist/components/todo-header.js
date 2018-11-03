import React, { Component } from 'react'
import index from '../css/index.css'

export default class TodoHeader extends Component {
  render() {
    return (
      <header>
        <h1>todos</h1>
        <input className={index['new-todo']} placeholder="请输入内容" />
      </header>
    )
  }
}
