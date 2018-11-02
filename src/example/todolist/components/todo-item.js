import React, { Component } from 'react'
import index from '../css/index.css'
export default class TodoItem extends Component {
  render() {
    return (
      <li className={index['completed editing']}>
        <div className={index.view}>
          <input className={index.toggle} type="checkbox" />
          <label>miaoweiketang</label>
          <button className={index.destroy}></button>
        </div>
        <input className={index.edit} />
      </li>
    )
  }
}
