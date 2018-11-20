{/* <ul>
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
                </ul> */}
// 动态路由配置的案列
<div className= "fontcolor" >
                        
                        
                        hello react!!!!
                        <img src={img}/>
                        <img src={require('../assets/images/1.jpg')}/>
                        <TodoList store = {todoStore}/>
                        <SlideMenu/>
                        
                        <Switch>
                            <Route exact path ="/app/home" component ={Home}></Route>
                            <Route path ="/app/Loan/about" component ={About}></Route>
                        </Switch>
                    </div>