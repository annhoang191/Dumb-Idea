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
                      <div className="pull-right">
                          <ul className="list-inline">
                              <li><span>Sắp xếp theo</span></li>
                              <li>
                                  <select id="orderby" className="form-control font-size-12 border-radius-3">
                                      <option value="2">Thời gian đăng gần nhất</option>
                                      <option value="3">Thời gian đăng xa nhất</option>
                                  </select>
                              </li>
                          </ul>
                      </div>
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
