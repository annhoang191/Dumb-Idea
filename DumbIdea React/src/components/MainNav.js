import React, { Component } from 'react';
import { Link , withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

window.jQuery = window.$ = require('jquery');
require('bootstrap/dist/js/bootstrap.min.js');

class MainNav extends Component {
  static propTypes = {
    items : PropTypes.array.isRequired
  }

  render() {
    const menuItems = this.props.items.map((item) => {
      if(item.subItems) {
        const subItems = item.subItems.map((subItem) => {
          return (
            <li key={subItem.name}>
              <Link to = {`${subItem.path}`}>{subItem.name}</Link>
            </li>
          )
        });

        return (
          <li className="dropdown" key={item.name}>
            <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{item.name} <span className="caret"></span></a>
            <ul className="dropdown-menu">
              {subItems}
            </ul>
          </li>
        );
      }  else {
        return (
          <li key={item.name} className={`${this.props.location.pathname === item.path ? "active" : ''}`}>
            <Link to = {`${item.path}`}>{item.name}</Link>
          </li>
        )
      }
    });

    return (
      <ul className="nav navbar-nav">
        {menuItems}
      </ul>
    );
  }
}

export default withRouter(MainNav);
