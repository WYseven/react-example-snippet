import React from 'react'
import { BrowserRouter,NavLink } from 'react-router-dom'

import RouteConfig from './example/'
import config from './example/config'

export default class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <React.Fragment>
          <ul>
            {
              config.map((item) => {
                return (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                    >{item.path}</NavLink>
                  </li>
                )
              })
            }
          </ul>
          
          <RouteConfig></RouteConfig>
        </React.Fragment>
      </BrowserRouter>
      
    )
  }
}