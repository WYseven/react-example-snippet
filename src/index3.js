import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


let h2 = <h2>
  <span>hello,react</span>
</h2>;

function createH2(props) {
  return <h2>
    <span>{props.title}</span>
  </h2>;
}

function CreateH2Component(props) {
  return <h2>
    <span>{props.title}</span>
  </h2>;
}

let div = <div>
  {h2}
  {h2}
  {createH2({ title: '定制1' })}
  {createH2({title:'定制2'})}
  <CreateH2Component title="定制3"></CreateH2Component>
</div>

ReactDOM.render(
  div,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
