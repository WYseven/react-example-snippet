import React, { Component } from 'react'
import index from '../css/index.css'
import TodoItem from './todo-item'

export default class TodoContent extends Component {
  render() {
    return (
      <section className={index.main}>
        <input className={index['toggle-all']} type="checkbox" />
        <ul className={index['todo-list']}>
          <TodoItem />
        </ul>
      </section>
    )
  }
}
