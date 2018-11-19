import React, {Component} from 'react'
import menuConfig from '../route/router.conf'
import { withRouter ,Link} from 'react-router-dom'

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
                                    <Link to = {item.path}>
                                        <p>
                                        父菜单1
                                        <span>{item.title}</span>
                                        </p>
                                    </Link>
                                   {
                                       item.subs.map((subitem,i)=>
                                            <Link to = {subitem.path}>
                                            <p key= {i}>
                                                <span>{subitem.title}</span>
                                            </p>
                                            </Link>
                                       )
                                   }
                                </li>
                            ): (
                                <li className ="" key={i} >
                                   <Link to = {item.path}>
                                        <p>
                                            父菜单2
                                            <span>{item.title}</span>
                                        </p>
                                    </Link>
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