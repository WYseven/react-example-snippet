import React, { Component } from 'react'
import index from '../css/index.css'

export default class TodoFooter extends Component {
  render() {
    return (
      <footer className={index.footer}>
        <span className={index['todo-count']}>
          <strong>0</strong>
          <span>条未选中</span>
        </span>
        <ul className={index['filters']}>
          <li><a href="#/all" className={index.selected}>All</a></li>
          <li><a href="#/active">Active</a></li>
          <li><a href="#/completed">Completed</a></li>
        </ul>
      </footer>
    )
  }
}
