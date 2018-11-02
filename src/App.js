import React from 'react'
import { BrowserRouter,NavLink } from 'react-router-dom'

import RouteConfig from './example/'
import config from './example/config'

export default class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <React.Fragment>
          {
            config.map((item) => {
              return (
                <NavLink
                  key={item.path} 
                  to={item.path}
                >{item.path}</NavLink>
              )
            })
          }
          <RouteConfig></RouteConfig>
        </React.Fragment>
      </BrowserRouter>
      
    )
  }
}