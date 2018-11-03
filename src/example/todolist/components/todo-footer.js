import React, { Component } from 'react'
import PropTypes from 'prop-types'
import index from '../css/index.css'

export default class TodoFooter extends Component {
  static propsTypes = {
    unCheckedLen: PropTypes.number
  }
  static defaultProps = {
    unCheckedLen: 0
  }
  render() {
    return (
      <footer className={index.footer}>
        <span className={index['todo-count']}>
          <strong>{this.props.unCheckedLen}</strong>
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
