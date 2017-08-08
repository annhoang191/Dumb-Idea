import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import PanelBody from './PanelBody';
import PanelHeader from './PanelHeader';

class Showcase extends Component {
  render() {
    return (
      <div className="Showcase container panel panel-default">
          <PanelHeader />
          <PanelBody />
      </div>
    );
  }
}

export default Showcase;
