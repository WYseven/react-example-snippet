import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import config from './config'

export default class RouteConfig extends React.Component {
  render () {
    return (
      <React.Fragment>
        {
          config.map((item) => {
            return (
              <Route 
                key={item.path} 
                path={item.path} 
                component={item.component}
              ></Route>
            )
          })
        }
      </React.Fragment>
    )
  }
}