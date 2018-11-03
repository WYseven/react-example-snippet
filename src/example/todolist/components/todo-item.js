import React, { PureComponent,Component } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import index from '../css/index.css'
export default class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editId: this.props.isEditId,
      title: this.props.title
    }
    this.editInput = React.createRef();
  }

  static defaultProps = {
    id: -1,
    title: '',
    checked: true
  }

  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    checked: PropTypes.bool
  }
  // 双击编辑
  editHandle = () => {
    this.setState({
      editId: this.props.id
    },() => {
      this.editInput.current.focus();
    });
    
    // 通知外面，已经有人在编辑了,传递给外面id
    if(this.props.editingById){
      this.props.editingById(this.props.id)
    }
  }

  static getDerivedStateFromProps (nextProps,prevState) {
    if (nextProps.isEditId !== prevState.editId){
      return {
        editId: ''
      }
    }
    return {
      editId: nextProps.isEditId
    };
  }

  // 编辑完成
  editDone = () => {
    this.setState({
      editId: ''
    });

    // 通知给父级
    if (this.props.changeTilteSingle) {
      this.props.changeTilteSingle(this.props.id, this.state.title)
    }

  }

  // 键盘触发
  keyUpEditDone = (e) => {
    if (e.keyCode === 13) {
      this.editDone()
    }

    if (e.keyCode === 27) {
      this.setState({
        editId: '',
        title: this.props.title
      })
    }
  }

  // 删除
  destroyHandle = () => {
    if (this.props.destroyHandle){
      this.props.destroyHandle(this.props.id)
    }
  }

  render() {
    let {
      id,
      title,
      checked
    } = this.props;
    
    return (
      <li className={classnames({
        [index.completed]: checked,
        [index.editing]: this.state.editId === id
      })}>
        <div className={index.view}>
          <input 
            className={index.toggle} 
            type="checkbox"
            checked={checked}
            onChange={(e)=>{
              if (this.props.changeCheckedSingle){
                this.props.changeCheckedSingle(id,e.target.checked)
              }
            }}
          />
          <label onDoubleClick={this.editHandle}>{title}</label>
          <button 
            className={index.destroy} 
            onClick={this.destroyHandle}
          ></button>
        </div>
        <input 
          ref={this.editInput} 
          className={index.edit}
          value={this.state.title}
          onChange={(e)=>{
            this.setState({
              title:e.target.value 
            })
          }}
          onBlur={this.editDone}
          onKeyUp={this.keyUpEditDone}
        />
      </li>
    )
  }
}
