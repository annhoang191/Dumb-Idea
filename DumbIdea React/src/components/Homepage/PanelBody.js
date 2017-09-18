import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import $ from 'jquery';
import Rating from '../Rating';

class PanelBody extends Component {
  render() {
    return (
      <div className="PanelBody">
        <div className="panel-body col-md-6">
              <img className="img-showcase featurette-image img-responsive" src={this.props.photo} alt="Idea Image" />
              <h2> <Link to={"/idea/" + this.props._id}> {this.props.name} </Link></h2>
              <p>{this.props.briefDescription}</p>
              <div className="idea-footer">
                <div className="rating"><Rating rating={this.props.noUsersRated ? (Math.round(this.props.ratingSum / this.props.noUsersRated)) : 0} /> </div>
              </div>
              <span className="glyphicon glyphicon-user"></span><span>Tác giả: </span><Link to={"/profile/" + this.props.owner._id}>{this.props.owner.username}</Link>
              <p><span className="glyphicon glyphicon-envelope"></span> Liên hệ: {this.props.owner.email}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(PanelBody);
