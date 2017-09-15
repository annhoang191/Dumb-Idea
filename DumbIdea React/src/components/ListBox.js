import React, { Component } from 'react';
import Box from './TopIdea/Box';

import $ from 'jquery';

class ListBox extends Component {
  render() {
    var childElements = this.props.ideasDisplay.map(function(idea) {
      return (
        <Box {...idea} />
      );
    });

    return (
      <div className="ListBox">
        <div className="list-idea">
          <div className="white-box white-box-waiting-list">
              <div className="list-post waiting-list">
                  <header className="clearfix">
                      <h4 className="pull-left">Tất cả ý tưởng</h4>

                  </header>
                  <hr />
                  { childElements }
              </div>
            
            </div>
        </div>
      </div>
    );
  }
}

export default ListBox;
