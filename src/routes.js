import React, {Component, Fragment} from 'react';
import {Router ,Route, Switch} from 'react-router';
import LoginAuthentication from './LoginAuthentication';
class Routes extends Component {
    render(){
        return(
            <div>
              <Router>
              <div>

                  <Switch>
                      <Route exact path='/' component ={()=> <LoginAuthentication title='Login'/>}/>
                  </Switch>
              </div>

              </Router>

            </div>
        )
    }
}



export default Routes;



