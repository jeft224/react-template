import React, {Component} from 'react'
import menuConfig from '../route/router.conf'
import { withRouter } from 'react-router-dom'

@withRouter
class SlideMenu extends Component {
    onSelect = ({path}) => { 

        const { location, history } = this.props
        // alert(location.pathname)
        if (location.pathname === path) return
        history.push(path)
    }

    render() {
        return (
            <div className="slideMenu_wrap">
                <ul>
                    {
                        menuConfig['menus'].map((item,i)=>
                            item.subs&&item.subs.length>0 ? (
                                <li className ="" key ={i} >
                                    <p onClick ={this.onSelect(item)}>
                                      父菜单1
                                      <span>{item.title}</span>
                                    </p>
                                   {
                                       item.subs.map((subitem,i)=>
                                           <p key= {i} onClick ={this.onSelect(subitem)}>
                                               <span>{subitem.title}</span>
                                           </p>
                                       )
                                   }
                                </li>
                            ): (
                                <li className ="" key={i}>
                                    <p onClick ={this.onSelect(item)}>
                                      父菜单2
                                      <span>{item.title}</span>
                                    </p>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default SlideMenu;