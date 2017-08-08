import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import PanelBodyList from './PanelBodyList';

class ShowcaseList extends Component {
  render() {

    return (
      <div className="ShowcaseList container">
        <div className="panel panel-default">
          <div className="panel-heading">
            Các ý tưởng nổi bật khác
          </div>
          <PanelBodyList />
          <PanelBodyList />
          <PanelBodyList />
        </div>
      </div>
    );
  }
}

export default ShowcaseList;
