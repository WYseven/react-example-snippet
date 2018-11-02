import React, { Component } from 'react'
import style from './css/base.css'
console.log(style)
export default class TodoList extends Component {
    render() {
        return (
            <div>
                <p style={style.test}>hello</p>
            </div>
        )
    }
}
