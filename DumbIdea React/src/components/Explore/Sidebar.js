import React, { Component } from 'react';
import { Link , withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Sidebar extends Component {
  static propTypes = {
    items : PropTypes.array.isRequired
  }

  render() {
    const sidebarItems = this.props.items.map((item) => {
      return (
        <li key={item.name} className={`${this.props.location.pathname === item.path ? "active" : ''}`}>
          <Link to = {`${item.path}`}>{item.name}</Link>
        </li>
      )
    });

    return(
      <div className="Sidebar">
        <div className="sidebar clearfix">
          <h4>Các lĩnh vực</h4>
          <hr />
          <ul className="categories">
            {sidebarItems}
          </ul>
        </div>

      </div>
    );
  }
}
export default withRouter(Sidebar);
