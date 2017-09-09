import React, { Component } from 'react';

import $ from 'jquery';
import CommentElement from '../components/CommentElement';

class IdeaDetail extends Component {
  constructor() {
      super();
      this.state = {
        idea: null
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
  }

  submitComment = (e) => {
    e.preventDefault();
    console.log('commentText = ', this.commentText);
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

  render() {
    if (!this.state.idea) return <div>Please wait</div>
    return (
        <div className="IdeaDetail">
            <div className="container">
                <div className="row overview">
                    <h1 className="idea-name text-center">{this.state.idea.name}</h1>
                    <div className="col-md-6">
                        <img className="img-responsive center-block" src={this.state.idea.photo} />
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-8">
                                <h3>{this.state.idea.owner.username}</h3>
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-lg btn-default">Theo dõi ý tưởng</button>
                            </div>
                    </div>
                    <h3>Lĩnh vực: </h3> <span>{this.state.idea.category}</span>
                    <h3>Brief description:</h3>
                        <p>{this.state.idea.briefDescription}</p>
                    <h3>Độ khả thi: </h3> <span>{this.state.idea.estimatedRating}</span>
                    <h3>Công khai: </h3> <span>{this.state.idea.status} </span>
                    <h3>Ngày đăng</h3>
                    <h4 className="text-muted">Tags: {this.state.idea.tags} </h4>
                    </div>
                </div>
            </div>      

                <div className="container main-content">
                    <ul className="nav nav-tabs">
                        <li className="active"><a data-toggle="tab" href="#descript"><i className="fa fa-align-left"></i> Mô tả chi tiết</a></li>
                        <li><a data-toggle="tab" href="#rating"><i className="fa fa-thumbs-o-up"></i> Đánh giá</a></li>
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

                    <div id="rating" className="tab-pane fade">
                        <h3 className="text-center">Đánh giá</h3>
                        <h4>Tác giả tự đánh giá độ khả thi của ý tưởng: </h4>
                            <span>{this.state.idea.estimatedRating}</span>
                        <h4>Đánh giá của các thành viên khác: </h4>
                            <span>{this.state.idea.rating}</span>
                        <h4>Nhận xét:</h4>
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
                        <div className="col-md-5"><label>Rating:</label>
                            <select>
                                <option value="">Đánh giá</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                    <button className="btn btn-lg btn-primary" onClick={this.submitComment}><i className="fa fa-paper-plane"></i> Submit</button>
                    </div>

                    <div id="contact" className="tab-pane fade">
                        <h3 className="text-center">Liên hệ với tác giả ý tưởng</h3>
                        <h4>Email: {this.state.idea.owner.email}</h4>
                        <h4>Address: {this.state.idea.owner.address} </h4>
                        <h4>Khác: </h4>
                    </div>
                </div>
            </div>

        </div>
    );
  }
}

export default IdeaDetail;