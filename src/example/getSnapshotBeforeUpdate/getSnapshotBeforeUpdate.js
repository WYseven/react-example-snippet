import React from 'react';


export default class Test extends React.Component {
  constructor(props) {
    console.log('Test costructor')
    super(props);
    this.state = {};
    this.listRef = React.createRef();
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Test getSnapshotBeforeUpdate');
    if (prevProps.list.length < this.props.list.length) {
      let t = this.listRef.current.scrollHeight - this.listRef.current.scrollTop;
      return t;
    }

    return null;
  }
  componentDidUpdate(props, state, t) {
    console.log('Test componentDidUpdate');
    if (t !== null) {
      this.listRef.current.scrollTop = this.listRef.current.scrollHeight - t;
    }
  }
  render() {
    return (
      <React.Fragment>
        <div 
          ref={this.listRef} 
          style={{ 
            height: '100px', 
            width: '500px',
            border: '1px solid #000', 
            overflowY: 'scroll' 
          }}>
          {
            this.props.list.map((item) => {
              return (
                <p key={item}>{item}</p>
              )
            })
          }
        </div>
      </React.Fragment>
    )
  }
}