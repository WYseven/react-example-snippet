import React, { Component } from 'react'
import base from './css/base.css'
import index from './css/index.css'

import TodoHeader from './components/todo-header'
import TodoContent from './components/todo-content'
import TodoFooter from './components/todo-footer'

export default class TodoList extends Component {
    render() {
        return (
            <section className={index.todoapp}>
                <TodoHeader></TodoHeader>
                <TodoContent></TodoContent>
                <TodoFooter></TodoFooter>
            </section>
        )
    }
}
