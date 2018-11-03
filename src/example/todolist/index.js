import React, { Component } from 'react'
import base from './css/base.css'
import index from './css/index.css'

import TodoHeader from './components/todo-header'
import TodoContent from './components/todo-content'
import TodoFooter from './components/todo-footer'

import gethash from '../utils/getHash'

export default class TodoList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            list:[],
            hash: 'all'
        };
    }

    componentDidMount() {
        // 获取数据
        let list = JSON.parse(localStorage.getItem('list')) || [];

        // 设置是否选中的初始状态
        list.forEach((item) => {
            if (!item.hasOwnProperty('checked')){
                item.checked = true;
            }
        })

        this.setState({
            list: list
        })

        
        // 绑定监听hash的值
        gethash((hash) => {
            this.setState({
                hash
            })
        });

    }

    // 更新之后存入 localStorage

    componentDidUpdate(){
        // 更新之后存入localStorage
        localStorage.setItem('list', JSON.stringify(this.state.list))
    }

    // 拿到header组件输入的title
    getHeaderTitle = (title) => {
        let list = [...this.state.list];
        list.push({
            id: Math.random(),
            title,
            checked: false
        })

        this.setState({
            list
        })
    }
    // 全选
    changeCheckedAll = (checked) => {
        let list = this.state.list;
        list.forEach((item) => item.checked = checked);
        this.setState({
            list
        })
    }

    // 单选

    changeCheckedSingle = (id,checked) => {
        let list = this.state.list;
        list = list.map((item) => {
            if(item.id === id){
                return {
                    ...item,
                    checked
                }
            }
            return item;
        });

        this.setState({
            list
        })
    }

    changeTilteSingle = (id,title) => {
        let list = [...this.state.list];
        list = list.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    title
                }
            }
            return item;
        });

        this.setState({
            list
        })
    }

    // 删除
    destroyHandle = (id) => {
        let list = [...this.state.list];
        list = list.filter((item) => item.id !== id)
        this.setState({
            list
        })
    }

    render() {

        let {list,hash} = this.state;
        let hasItem = !!list.length;
        let unCheckedLen = list.length - list.filter((item) => item.checked).length;

        // 过滤数据
        list = gethash.filterHash[hash](list)

        return (
            <section className={index.todoapp}>
                <TodoHeader
                    getHeaderTitle={this.getHeaderTitle}
                ></TodoHeader>
                {
                    hasItem &&
                    <TodoContent
                        list={list}
                        changeCheckedAll={this.changeCheckedAll}
                        changeCheckedSingle={this.changeCheckedSingle}
                        changeTilteSingle={this.changeTilteSingle}
                        destroyHandle={this.destroyHandle}
                    ></TodoContent>
                }
                
                {hasItem && <TodoFooter unCheckedLen={unCheckedLen}></TodoFooter>}
            </section>
        )
    }
}
