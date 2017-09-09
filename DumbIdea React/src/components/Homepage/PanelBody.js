import React, { Component } from 'react';
import { Link , withRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

class PanelBody extends Component {
  render() {
    return (
      <div className="PanelBody">
        <div className="panel-body col-md-6">
              <img className="img-showcase featurette-image img-responsive" src={this.props.photo} alt="Idea Image" />
              <h2>
                <Link to={'/idea/' + this.props._id}>{this.props.name}</Link>
                <span className="text-muted"> {this.props.category}</span>
              </h2>
              <p>{this.props.briefDescription}</p>
              <Link to={'/idea/' + this.props._id} className="btn btn-info" role="button">Chi tiết</Link>
              <br></br>
              <br></br>
              <p><span className="glyphicon glyphicon-user"></span> Tác giả: {this.props.owner.username}</p>
              <p><span className="glyphicon glyphicon-envelope"></span> Liên hệ: SĐT - Email</p>
        </div>
      </div>
    );
  }
}

export default PanelBody;
