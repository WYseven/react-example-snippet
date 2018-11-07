import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


/* let h2 = <h2>
  <span>hello,react</span>
</h2> */

/*let span = React.createElement('span',
  {className:'test',style:{color:'red'}},
  'hello,react'
)
let h2 = React.createElement('h2',null,span);*/

// JSX中的语法规范 
let title = 'hello,react'
let a = 'hello,react'
let getValue = () => '返回值';
let h2 = <h2>
  <span>{title}</span><br/>
  <span>{'hello,react2'}</span><br />
  <span>{1 + 1}</span><br />
  <span>{getValue()}</span><br />
  <span>{[1, 2, 3].map((item) => item * 3)}</span><br />
  <span>{String(null)}</span><br />
  <span>{String(undefined)}</span><br />
  <span miaov={title}>{String(undefined)}</span><br />
  <span miaov="title">{String(undefined)}</span><br />
</h2>

ReactDOM.render(
  h2,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
