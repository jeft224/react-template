"use strict"
import React , {Component} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routesConfig from './router.conf';
import AllComponents from '../views';
class ARouter extends Component {
    render(){
        return (
            <Switch>
                {   
                    Object.keys(routesConfig).map(key => {
                        return (
                            routesConfig[key].map(r => {
                            const route = r =>{
                                const Component = AllComponents[r.component];
                                return  (<Route key={r.path}  exact= {r.exact} path = {r.path} render={() => <Component />}/>)
                                
                            }
                            return r.component ? route(r) : r.subs.map(r => route(r))
                            })
                        )
                    })
                }
            </Switch>
        )
    }
}
export default ARouter;