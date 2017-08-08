import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


class PanelHeader extends Component {
  render() {
      const title = "Ý tưởng nghiêm túc nhất trong tuần";
      
    return (
      <div className="PanelHeader">
          < div className="panel-heading">
            {title}
          </div>
      </div>
    );
  }
}

export default PanelHeader;
