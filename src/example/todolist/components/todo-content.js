import React, { Component } from 'react'
import PropTypes from 'prop-types'
import index from '../css/index.css'
import TodoItem from './todo-item'

export default class TodoContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isEditId: -1
    };
  }

  static defaultProps = {
    list: []
  }
  static propTypes = {
    list: PropTypes.array
  }

  checkedAllHandle = (e) => {
    if(this.props.changeCheckedAll){
      this.props.changeCheckedAll(e.target.checked);
    }
  }

  // 正在编辑的id
  editingById = (id) => {
    this.setState({
      isEditId: id
    })
  }

  render() {

    // 判断是否都选中
    let n = 0;
    let { list } = this.props;

    /* list.reduce((m,item) => {
      return item.checked && ++m;
    },n) */

    let isCheckedAll = list.every((item) => item.checked);
    return (
      <section className={index.main}>
        <input 
          className={index['toggle-all']} 
          type="checkbox"
          checked={isCheckedAll}
          onChange={this.checkedAllHandle}
        />
        <ul className={index['todo-list']}>
          {
            this.props.list.map((item) => {
              return <TodoItem 
                key={item.id} 
                {...item} 
                isEditId={this.state.isEditId}
                editingById={this.editingById}
                changeCheckedSingle={this.props.changeCheckedSingle}
                changeTilteSingle={this.props.changeTilteSingle}
                destroyHandle={this.props.destroyHandle}
                />
            })
          }
        </ul>
      </section>
    )
  }
}
