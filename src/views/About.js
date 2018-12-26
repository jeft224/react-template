import React, { Component } from "react";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";

@observer
class About extends Component {
  render() {
    return <div>关于</div>;
  }
}
export default withRouter(About);
