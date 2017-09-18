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
                <img className="img-responsive box-media-object" src={ this.props.photo } alt="Idea image"/>
              </div>
              <div className="media-body">
                <h6 className="entry-title"><Link to={"/idea/" + this.props._id}> { this.props.name }</Link></h6>
                  <div className="entry-author"><span className="text-muted">Tác giả: </span>
                  <Link to={"/profile/" + this.props.owner._id}> { this.props.owner.username }</Link>
                  <br />
                  </div>
                  <p>{ this.props.description }</p>
                  <div className="idea-footer">
                      <div className="rating"><Rating static={true} rating={this.props.noUsersRated ? (Math.round(this.props.ratingSum / this.props.noUsersRated)) : 0} /> </div>
                  </div>
              </div>
            </div>
        </article>
        <hr />
      </div>
    );
  }
}

export default withRouter(Box);
