"use strict"
import React , {Component} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routesConfig from './router.conf';
import AllComponents from '../components';
class ARouter extends Component {

    render(){
        <Switch>
            {
                Object.keys(routesConfig).map( (key) => {
                    routesConfig[key].map((r) => {
                        const route = (r) =>{
                            const AComponent = AllComponents[r.component];
                            return (
                                <Route key={r.route || r.path}  exact path = {r.route || r.path } component={AComponent}/>
                            )
                        }
                        
                        return r.component ? route(r) : r.subs.map(r => route(r))
                    })
                })
            }
        </Switch>
    }
}
export default ARouter;