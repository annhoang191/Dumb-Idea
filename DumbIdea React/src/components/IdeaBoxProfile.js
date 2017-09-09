import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import $ from 'jquery';


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
        if(!this.state.idea) return <div>There's nothing here</div>
        return(

              <article className="IdeaBoxProfile post style-3">
                  <div className="media">
                      <div className="media-left pull-left visible-lg visible-md">
                        <img className="img-responsive media-object" src={this.state.idea.photo} />
                      </div>
                      <div className="media-body">
                          <h6 className="entry-title"><Link to={"/idea/" + this.state.idea._id}>{this.state.idea.name}</Link></h6>
                          <div className="entry-author"><span className="text-muted">Tác giả</span>
                              <Link to={"/profile/" + this.state.idea.owner._id}> {this.state.idea.owner.username}</Link>                    
                          </div>
                          <p>{this.state.idea.briefDescription}</p>
                          <div className="idea-footer">
                              <div className="rating"><i className="fa fa-star"></i> Độ khả thi (người dùng tự đánh giá): {this.state.idea.estimatedRating} </div>
                              <div className="rating"><i className="fa fa-star-o"></i> Độ khả thi (tính trung bình): {this.state.rating} </div>
                              <button className="btn btn-sm btn-default btn-detail">Chi tiết</button>
                          </div>
                      </div>
                  </div>
              </article>                
        );
    }
}

export default withRouter(IdeaBoxProfile);