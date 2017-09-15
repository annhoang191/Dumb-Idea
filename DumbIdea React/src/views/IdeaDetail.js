import React, { Component } from 'react';
import { Link , withRouter } from 'react-router-dom';

import $ from 'jquery';
import CommentElement from '../components/CommentElement';
import Rating from '../components/Rating';

class IdeaDetail extends Component {
  constructor() {
      super();
      this.state = {
        idea: null,
        user: null
      };
  }

  componentDidMount() {
      $.ajax({
          url:'/api/idea/' + this.props.match.params.id,
          type : 'get'
      }).done(data => {
          this.setState({
            idea: data
          });
          console.log(data);
      }).fail(err => {
          console.error(err);
      });

      if (localStorage.userId && localStorage.userId != null) {
          $.ajax({
              url:'/api/user/' + localStorage.userId,
              type : 'get'
          }).done(data => {
              this.setState({
                user: data
              });
              console.log(data);
          }).fail(err => {
              console.error(err);
          });
      }
  }

  submitComment = (e) => {
    e.preventDefault();
    if (!this.state.user) {
        alert('Please login to post comments');
        return;
    }    console.log('commentText = ', this.commentText);
    if (this.commentText && this.commentText.length > 0) {
        $.ajax({
            url: '/api/comment/',
            type: 'post',
            data: {
                postId: this.state.idea._id,
                content: this.commentText
            },
            headers: {
                token: localStorage.token
            }
        }).done(data => {
            window.location.reload();
        }).fail(err => {
            console.log(err);
        });
    }
  }

  toggleFollow = (e) => {
    e.preventDefault();
    $.ajax({
        url: '/api/user/togglefollow/' + this.state.idea._id,
        type: 'put',
        headers: {
            token: localStorage.token
        }
    }).done(data => {
        
        console.log('success togglefollow');
        console.log(data);
        window.location.reload();
    }).fail(err => {
        console.log(err);
    });
  }

  doRate = (newRating) => {
    if (!this.state.user) {
        alert('Please login to rate');
        return;
    }
    $.ajax({
        url: '/api/idea/rateidea/' + this.state.idea._id + '?rating=' + (newRating),
        type: 'put',
        headers: {
            token: localStorage.token
        }
    }).done(data => {
        window.location.reload();
    }).fail(err => {
        console.log(err);
    });
  }

  getRatingFromUser = () => {
    if (!this.state.user) return 0;
    for (let i = 0; i < this.state.user.ratedIdeas.length; ++i) {
        if (this.state.user.ratedIdeas[i].ideaId == this.state.idea._id) {
            return this.state.user.ratedIdeas[i].rating;
        }
    }
    return 0;
  }

  render() {
    if (!this.state.idea) return <div>Please wait</div>;

    let FollowButton = (props) => {
        if (!this.state.user) return null;
        if (this.state.user.followedIdeas.includes(this.state.idea._id)) {
            return <button className="btn btn-lg btn-warning" onClick={this.toggleFollow}>Bỏ theo dõi</button>
        } else {
            return <button className="btn btn-lg btn-primary" onClick={this.toggleFollow}>Theo dõi</button>
        }
    }

    return (
        <div className="IdeaDetail">
            <div className="container">
                <div className="row overview">
                    <h1 className="idea-name text-center">{this.state.idea.name}</h1>
                    <div className="col-md-6 container-idea-detail">
                        <img className="img-responsive center-block img-idea-detail" src={this.state.idea.photo} />
                        <br />
                        <div className="middle-idea-detail">
                          <Link to={'/editidea/' + this.state.idea._id} className="btn btn-info btn-lg text-idea-detail">
                            <span className="glyphicon glyphicon-pencil"></span> Edit
                          </Link>
                        </div>
                        <div className="center-div">
                            <Rating label="Total rating" static={true} callback={this.doRate} rating={this.state.idea.noUsersRated ? (Math.round(this.state.idea.ratingSum / this.state.idea.noUsersRated)) : -1}/>
                            <Rating label="Your  rating" static={false} callback={this.doRate} rating={this.getRatingFromUser()}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-8">
                                <h3>{this.state.idea.owner.username}</h3>
                            </div>
                            <div className="col-md-4">
                                <FollowButton />
                            </div>
                    </div>
                    <h3>Lĩnh vực: </h3> <span>{this.state.idea.category}</span>
                    <h3>Độ khả thi: </h3> <span>{this.state.idea.estimatedRating}</span>
                    <h3>Ngày đăng</h3>
                    <h4 className="text-muted">Tags: {this.state.idea.tags} </h4>
                    </div>
                </div>
            </div>

                <div className="container main-content">
                    <ul className="nav nav-tabs">
                        <li className="active"><a data-toggle="tab" href="#descript"><i className="fa fa-align-left"></i> Mô tả chi tiết</a></li>
                        <li><a data-toggle="tab" href="#comments"><i className="fa fa-comment-o"></i> Nhận xét</a></li>
                        <li><a data-toggle="tab" href="#multimedia"><i className="fa fa-eye"></i> Hình ảnh - video </a></li>
                        <li><a data-toggle="tab" href="#addcomment"><i className="fa fa-comment-o"></i> Gửi đánh giá - nhận xét</a></li>
                        <li><a data-toggle="tab" href="#contact"><i className="fa fa-id-card-o"></i> Thông tin liên hệ</a></li>
                    </ul>

                <div className="tab-content">
                    <div id="descript" className="tab-pane fade in active">
                        <h3 className="text-center">Chi tiết ý tưởng</h3>
                        <p>{this.state.idea.description}</p>
                    </div>

                    <div id="multimedia" className="tab-pane fade">
                        <h3 className="text-center">Hình ảnh / Video minh họa cho ý tưởng</h3>
                        <figure className="figure">
                            <img src={this.state.idea.photo} className="figure-img img-fluid rounded img-responsive center-block" />
                        </figure>
                    </div>

                    <div id="comments" className="tab-pane fade">
                        <ul className="media-list">
                            {this.state.idea.comments.map((cmt,index) =>(
                                <CommentElement key={index} {...cmt} />
                            ))}
                        </ul>
                    </div>

                    <div id="addcomment" className="tab-pane fade">
                    <h3 className="text-center">Gửi đánh giá - nhận xét của bạn</h3>
                    <div className="row">
                        <div className="col-md-7">
                        <div className="form-group">
                            <label htmlFor="comment">Comment:</label>
                            <textarea className="form-control" rows="9" onChange={(e) => {this.commentText = e.target.value;}}></textarea>
                        </div>
                        </div>
                    </div>
                    <button className="btn btn-lg btn-primary" onClick={this.submitComment}><i className="fa fa-paper-plane"></i> Submit</button>
                    </div>

                    <div id="contact" className="tab-pane fade">
                        <h3 className="text-center">Liên hệ với tác giả ý tưởng</h3>
                        <h4>Email: {this.state.idea.owner.email}</h4>
                        <h4>Address: {this.state.idea.owner.address} </h4>
                    </div>
                </div>
            </div>

        </div>
    );
  }
}

export default IdeaDetail;
