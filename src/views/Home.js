import React, { Component } from 'react';
import { observer } from 'mobx-react';
import {withRouter} from 'react-router-dom';
@observer
class Home extends Component {
    render() {
        return (
            <div>
               首页
            </div>
        )
    }
}
export default withRouter(Home);