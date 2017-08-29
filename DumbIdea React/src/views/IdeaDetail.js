import React, { Component } from 'react';

import $ from 'jquery';

class IdeaDetail extends Component {
  constructor() {
      super();
      this.state = {
          idea : '',
          author : ''
      }
  }

  componentDidMount() {
      $.ajax({
          url:'/api/idea/:id',
          type : 'get'
      }).done(data => {
          this.setState({
              idea : data
          });
      }).fail(err => {
          console.error(err);
      });
  }



  render() {
    return (
        <div className="IdeaDetail">
            <div className="container">
                <div className="row overview">
                    <h1 className="idea-name text-center">{this.props.name}</h1>
                    <div className="col-md-6">
                        <img className="img-responsive center-block" src={this.props.photo} />
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-8">
                                <h3>{this.props.owner}</h3>
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-lg btn-default">Theo dõi ý tưởng</button>
                            </div>
                    </div>
                    <h3>Lĩnh vực: </h3> <span>{this.props.category}</span>
                    <h3>Brief description:</h3>
                        <p>{this.props.briefDescription}</p>
                    <h3>Độ khả thi: </h3> <span>{this.props.estimatedRating}</span>
                    <h3>Công khai: </h3> <span>{this.props.status} </span>
                    <h3>Ngày đăng</h3>
                    <h4 className="text-muted">Tags: {this.props.tags} </h4>
                    </div>
                </div>
            </div>      

                <div className="container main-content">
                    <ul className="nav nav-tabs">
                        <li className="active"><a data-toggle="tab" href="#descript"><i className="fa fa-align-left"></i> Mô tả chi tiết</a></li>
                        <li><a data-toggle="tab" href="#rating"><i className="fa fa-thumbs-o-up"></i> Đánh giá</a></li>
                        <li><a data-toggle="tab" href="#multimedia"><i className="fa fa-eye"></i> Hình ảnh - video </a></li>
                        <li><a data-toggle="tab" href="#comment"><i className="fa fa-comment-o"></i> Gửi đánh giá - nhận xét</a></li>
                        <li><a data-toggle="tab" href="#contact"><i className="fa fa-id-card-o"></i> Thông tin liên hệ</a></li>
                    </ul>

                <div className="tab-content">
                    <div id="descript" className="tab-pane fade in active">
                        <h3 className="text-center">Chi tiết ý tưởng</h3>
                        <p>{this.props.description}</p>
                    </div>

                    <div id="rating" className="tab-pane fade">
                        <h3 className="text-center">Đánh giá</h3>
                        <h4>Tác giả tự đánh giá độ khả thi của ý tưởng: </h4>
                            <span>{this.props.estimatedRating}</span>
                        <h4>Đánh giá của các thành viên khác: </h4>
                            <span>{this.props.rating}</span>
                        <h4>Nhận xét:</h4>
                            <p>{this.props.comments}</p>
                    </div>

                    <div id="multimedia" className="tab-pane fade">
                        <h3 className="text-center">Hình ảnh / Video minh họa cho ý tưởng</h3>
                        <figure className="figure">
                            <img src={this.props.photo} className="figure-img img-fluid rounded img-responsive center-block" />
                        </figure>
                    </div>


                    <div id="comment" className="tab-pane fade">
                    <h3 className="text-center">Gửi đánh giá - nhận xét của bạn</h3>
                    <div className="row">
                        <div className="col-md-7">
                        <div className="form-group">
                            <label for="comment">Comment:</label>
                            <textarea className="form-control" rows="9" id="comment"></textarea>
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
                    <button className="btn btn-lg btn-primary"><i className="fa fa-paper-plane"></i> Submit</button>
                    </div>

                    <div id="contact" className="tab-pane fade">
                        <h3 className="text-center">Liên hệ với tác giả ý tưởng</h3>
                        <h4>Email: {this.props.email}</h4>
                        <h4>Address: {this.props.address} </h4>
                        <h4>Khác: </h4>
                    </div>
                </div>
            </div>

        </div>
    );
  }
}

export default IdeaDetail;
