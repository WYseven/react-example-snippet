import React from 'react'
import CustomeTitle from './components/title'

let t = 'hello,react3'

export default class App extends React.Component {
  render(){
    return (
      <div>
        <CustomeTitle title="hello,react1"></CustomeTitle>
        <CustomeTitle title={"hello,react2"}></CustomeTitle>
        <CustomeTitle title={t}></CustomeTitle>
      </div>
     )
  }
}