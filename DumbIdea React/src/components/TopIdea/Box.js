import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import Rating from '../Rating';

class Box extends Component {
  render() {
    return (
      <div>
        <article className="post style-3">
            <div className="media">
              <div className="media-left pull-left visible-lg visible-md">
                <img className="img-responsive media-object" src={ this.props.photo } />
              </div>
              <div className="media-body">
                <h6 className="entry-title"><Link to={"/idea/" + this.props._id}> { this.props.name }</Link></h6>
                  <div className="entry-author"><span className="text-muted">Tác giả: </span>
                  <Link to={"/profile/" + this.props.owner._id}> { this.props.owner.username }</Link>
                  <br />
                    <button className="btn btn-sm btn-default btn-detail"><Link to={"/idea/" + this.props._id}> Chi tiết</Link></button>
                  </div>
                  <p>{ this.props.description }</p>
                  <div className="idea-footer">
                      <div className="rating"><Rating rating={this.props.noUsersRated ? (Math.round(this.props.ratingSum / this.props.noUsersRated)) : 0} /> </div>
                  </div>
              </div>
            </div>
        </article>
        <hr />
      </div>
    );
  }
}

export default Box;
