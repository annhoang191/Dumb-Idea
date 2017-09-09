import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import $ from 'jquery';

class PanelBody extends Component {
  

  render() {
    return (
      <div className="PanelBody">
        <div className="panel-body col-md-6">
              <img className="img-showcase featurette-image img-responsive" src={this.props.photo} alt="Idea Image" />
              <h2> <Link to={"/idea/" + this.props._id}> {this.props.name} </Link>
              <span className="text-muted"> {this.props.category}</span></h2>
              <p>{this.props.briefDescription}</p>
              <button type="button" className="btn btn-default"> <Link to={"/idea/" + this.props._id}> Chi tiết </Link></button>
              <br></br>
              <br></br>
              <p><span className="glyphicon glyphicon-user"></span> Tác giả: {this.props.owner.username}</p>
              <p><span className="glyphicon glyphicon-envelope"></span> Liên hệ: {this.props.owner.email}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(PanelBody);
