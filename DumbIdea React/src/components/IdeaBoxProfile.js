import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import $ from 'jquery';
import Rating from './Rating'

class IdeaBoxProfile extends Component {
    constructor() {
        super();
        this.state = {
            ideas : null
        }
    }

    componentDidMount() {
        $.ajax({
            url: '/api/idea/' + this.props.id,
            type: 'get'
        }).done(data => {
            this.setState ({
                idea : data
            });
            console.log(data);
        }).fail(err => {
            console.log(err);
        })
    }

    render() {
        if(!this.state.idea) return null;
        return(
            <div className="container">
              <article className="IdeaBoxProfile post style-3 well">
                  <div className="media">
                      <div className="media-left pull-left visible-lg visible-md">
                        <img className="img-responsive box-media-object" src={this.state.idea.photo} alt="Idea image"/>
                      </div>
                      <div className="media-body">
                          <h6 className="entry-title"><Link to={"/idea/" + this.state.idea._id}>{this.state.idea.name}</Link></h6>
                          <div className="entry-author"><span className="text-muted">Tác giả</span>
                              <Link to={"/profile/" + this.state.idea.owner._id}> {this.state.idea.owner.username}</Link>                    
                          </div>
                          <p>{this.state.idea.briefDescription}</p>
                          <div className="idea-footer">
                              <div className="rating"><Rating static={true} rating={this.state.idea.noUsersRated ? (Math.round(this.state.idea.ratingSum / this.state.idea.noUsersRated)) : 0} /> </div>
                          </div>
                      </div> 
                  </div>
              </article>    
              <hr /> 
            </div>           
        );
    }
}

export default withRouter(IdeaBoxProfile);